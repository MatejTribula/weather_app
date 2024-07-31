import globals from "globals";
import pluginJs from "@eslint/js";

/*eslint-disable*/
/*eslint-enable*/

alert("foo"); // eslint-disable-line no-alert

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.node },
    files: ["src/*.js"],
    ignores: ["*.config.js", "!**/eslint.config.js"],
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
];
