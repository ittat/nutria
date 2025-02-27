const kDeps = [
  {
    name: "intro",
    kind: "virtual",
    deps: [
      "shoelace-menu",
      "shoelace-menu-item",
      "shoelace-icon",
      "shoelace-light-theme",
      "shoelace-setup",
    ],
  },
  {
    name: "language-panel",
    kind: "virtual",
    deps: [
      "shoelace-menu",
      "shoelace-menu-item",
      "shoelace-icon",
      "language-module",
    ],
  },
  { name: "language-module", kind: "module", param: "js/language_panel.js" },
  {
    name: "wifi-panel",
    kind: "virtual",
    deps: [
      "shoelace-button",
      "shoelace-menu",
      "shoelace-menu-item",
      "shoelace-icon",
      "shoelace-switch",
      "shoelace-divider",
      "shoelace-dialog",
      "shoelace-input",
      "wifi-module",
    ],
  },
  {
    name: "display-panel",
    kind: "virtual",
    deps: ["shoelace-icon", "shoelace-switch", "display-module"],
  },
  {
    name: "datetime-panel",
    kind: "virtual",
    deps: [
      "shoelace-button",
      "shoelace-alert",
      "shoelace-icon",
      "shoelace-switch",
      "shoelace-details",
      "shoelace-button",
      "shoelace-input",
      "shoelace-menu",
      "shoelace-menu-item",
      "datetime-module",
    ],
  },
  {
    name: "search-panel",
    kind: "virtual",
    deps: [
      "shoelace-alert",
      "shoelace-icon",
      "shoelace-menu",
      "shoelace-menu-item",
      "content manager",
      "search-module",
    ],
  },
  {
    name: "webext-panel",
    kind: "virtual",
    deps: [
      "shoelace-switch",
      "shoelace-button",
      "shoelace-icon",
      "shoelace-menu",
      "shoelace-menu-item",
      "webext-module",
    ],
  },
  {
    name: "apps-panel",
    kind: "virtual",
    deps: [
      "shoelace-button",
      "shoelace-icon",
      "shoelace-menu",
      "shoelace-menu-item",
      "apps-module",
    ],
  },
  {
    name: "identity-panel",
    kind: "virtual",
    deps: [
      "shoelace-button",
      "shoelace-alert",
      "shoelace-icon",
      "shoelace-input",
      "shoelace-menu",
      "shoelace-menu-item",
      "identity-module",
    ],
  },
  {
    name: "systeminfo-panel",
    kind: "virtual",
    deps: ["systeminfo-module", "shoelace-input", "shoelace-divider"],
  },
  {
    name: "lockscreen-panel",
    kind: "virtual",
    deps: [
      "lockscreen-module",
      "shoelace-button",
      "shoelace-input",
      "shoelace-icon",
      "shoelace-switch",
    ],
  },
  {
    name: "dweb-panel",
    kind: "virtual",
    deps: [
      "dweb-module",
      "shoelace-input",
      "shoelace-divider",
      "shoelace-switch",
      "shoelace-select",
      "shoelace-option",
      "switch-setting",
    ],
  },
  {
    name: "content manager",
    kind: "sharedWindowModule",
    param: ["js/content_manager.js", "contentManager", "ContentManager"],
    deps: ["shared-api-daemon"],
  },
  {
    name: "privacy-panel",
    kind: "virtual",
    deps: ["shoelace-icon", "shoelace-switch", "privacy-module"],
  },
  {
    name: "telephony-panel",
    kind: "virtual",
    deps: ["shoelace-switch", "telephony-module"],
  },
  { name: "display-module", kind: "module", param: "js/display_panel.js" },
  { name: "wifi-module", kind: "module", param: "js/wifi_panel.js" },
  {
    name: "datetime-module",
    kind: "module",
    param: "js/datetime_panel.js",
    deps: ["switch-setting"],
  },
  {
    name: "privacy-module",
    kind: "module",
    param: "js/privacy_panel.js",
    deps: ["switch-setting"],
  },
  { name: "search-module", kind: "module", param: "js/search_panel.js" },
  { name: "webext-module", kind: "module", param: "js/webext_panel.js" },
  {
    name: "apps-module",
    kind: "module",
    param: "js/apps_panel.js",
    deps: ["apps manager"],
  },
  { name: "identity-module", kind: "module", param: "js/identity_panel.js" },
  {
    name: "systeminfo-module",
    kind: "module",
    param: "js/systeminfo_panel.js",
  },
  {
    name: "lockscreen-module",
    kind: "module",
    param: "js/lockscreen_panel.js",
  },
  {
    name: "dweb-module",
    kind: "module",
    param: "js/dweb_panel.js",
  },
  {
    name: "telephony-module",
    kind: "module",
    param: "js/telephony_panel.js",
    deps: ["switch-setting", "shared-api-daemon"],
  },
  {
    name: "switch-setting",
    kind: "sharedModule",
    param: ["js/switch_setting.js", "SwitchAndSetting"],
  },
  {
    name: "apps manager",
    kind: "sharedWindowModule",
    param: ["js/apps_manager.js", "appsManager", "AppsManager"],
    deps: ["shared-api-daemon"],
  },
  { name: "dummy", kind: "virtual", deps: ["shoelace-drawer"] },
];
