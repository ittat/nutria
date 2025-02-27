use std::env::var;
use std::io::Write;

fn main() {
    // I/O safety is stabilized in Rust 1.63.
    if has_io_safety() {
        use_feature("io_safety_is_in_std")
    }

    // Work around
    // <https://github.com/rust-lang/rust/issues/103306>.
    use_feature_or_nothing("wasi_ext");

    // Rust 1.56 and earlier don't support panic in const fn.
    if has_panic_in_const_fn() {
        use_feature("panic_in_const_fn")
    }

    // Don't rerun this on changes other than build.rs, as we only depend on
    // the rustc version.
    println!("cargo:rerun-if-changed=build.rs");
}

fn use_feature_or_nothing(feature: &str) {
    if has_feature(feature) {
        use_feature(feature);
    }
}

fn use_feature(feature: &str) {
    println!("cargo:rustc-cfg={}", feature);
}

/// Test whether the rustc at `var("RUSTC")` supports the given feature.
fn has_feature(feature: &str) -> bool {
    can_compile(format!(
        "#![allow(stable_features)]\n#![feature({})]",
        feature
    ))
}

/// Test whether the rustc at `var("RUSTC")` can compile the given code.
fn can_compile<T: AsRef<str>>(test: T) -> bool {
    use std::process::Stdio;

    let out_dir = var("OUT_DIR").unwrap();
    let rustc = var("RUSTC").unwrap();
    let target = var("TARGET").unwrap();

    let mut cmd = if let Ok(wrapper) = var("CARGO_RUSTC_WRAPPER") {
        let mut cmd = std::process::Command::new(wrapper);
        // The wrapper's first argument is supposed to be the path to rustc.
        cmd.arg(rustc);
        cmd
    } else {
        std::process::Command::new(rustc)
    };

    cmd.arg("--crate-type=rlib") // Don't require `main`.
        .arg("--emit=metadata") // Do as little as possible but still parse.
        .arg("--target")
        .arg(target)
        .arg("--out-dir")
        .arg(out_dir); // Put the output somewhere inconsequential.

    // If Cargo wants to set RUSTFLAGS, use that.
    if let Ok(rustflags) = var("CARGO_ENCODED_RUSTFLAGS") {
        if !rustflags.is_empty() {
            for arg in rustflags.split('\x1f') {
                cmd.arg(arg);
            }
        }
    }

    let mut child = cmd
        .arg("-") // Read from stdin.
        .stdin(Stdio::piped()) // Stdin is a pipe.
        .stderr(Stdio::null()) // Errors from feature detection aren't interesting and can be confusing.
        .spawn()
        .unwrap();

    writeln!(child.stdin.take().unwrap(), "{}", test.as_ref()).unwrap();

    child.wait().unwrap().success()
}

/// Test whether the rustc at `var("RUSTC")` supports panic in `const fn`.
fn has_panic_in_const_fn() -> bool {
    can_compile("const fn foo() {{ panic!() }}")
}

/// Test whether the rustc at `var("RUSTC")` supports the I/O safety feature.
fn has_io_safety() -> bool {
    can_compile(
        "\
    #[cfg(unix)]\n\
    use std::os::unix::io::OwnedFd as Owned;\n\
    #[cfg(target_os = \"wasi\")]\n\
    use std::os::wasi::io::OwnedFd as Owned;\n\
    #[cfg(windows)]\n\
    use std::os::windows::io::OwnedHandle as Owned;\n\
    \n\
    pub type Success = Owned;\n\
    ",
    )
}
