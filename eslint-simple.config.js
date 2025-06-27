// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angularEslint = require("@angular-eslint/eslint-plugin");
const angularTemplateEslint = require("@angular-eslint/template-parser");
const ngrx = require("@ngrx/eslint-plugin/v9");

module.exports = tseslint.config(
    {
        ignores: ["**/node_modules/**", "**/dist/**", "**/.angular/**"],
    },
    // Base configs
    eslint.configs.recommended,

    // TypeScript files
    {
        files: ["**/*.ts"],
        extends: [...tseslint.configs.recommended],
        plugins: {
            "@angular-eslint": angularEslint,
        },
        rules: {
            // Angular selector rules
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "app",
                    style: "kebab-case",
                },
            ],
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "app",
                    style: "camelCase",
                },
            ],
            // Core Angular rules
            "@angular-eslint/no-empty-lifecycle-method": "error",
            "@angular-eslint/no-input-rename": "error",
            "@angular-eslint/no-output-native": "error",
            "@angular-eslint/no-output-on-prefix": "error",
            "@angular-eslint/use-pipe-transform-interface": "error",
        },
    },

    // HTML template files
    {
        files: ["**/*.html"],
        languageOptions: {
            parser: angularTemplateEslint,
        },
        rules: {
            // Add template rules as needed
        },
    },

    // NgRx rules
    {
        files: ["**/*.ts"],
        extends: [...ngrx.configs.all],
    },
);
