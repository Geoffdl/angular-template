// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const ngrx = require("@ngrx/eslint-plugin/v9");

module.exports = tseslint.config(
    {
        ignores: ["**/node_modules/**", "**/dist/**", "**/.angular/**"],
    },
    // Base ESLint recommended
    eslint.configs.recommended,

    // TypeScript files
    {
        files: ["**/*.ts"],
        extends: [...tseslint.configs.recommended],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
                tsconfigRootDir: __dirname,
            },
        },
        plugins: {
            "@angular-eslint": angular.plugin,
        },
        processor: angular.processInlineTemplates,
        rules: {
            // Angular rules manually added instead of extending
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
            "@angular-eslint/no-empty-lifecycle-method": "error",
            "@angular-eslint/no-input-rename": "error",
            "@angular-eslint/no-inputs-metadata-property": "error",
            "@angular-eslint/no-output-native": "error",
            "@angular-eslint/no-output-on-prefix": "error",
            "@angular-eslint/no-output-rename": "error",
            "@angular-eslint/no-outputs-metadata-property": "error",
            "@angular-eslint/prefer-standalone": "error",
            "@angular-eslint/use-pipe-transform-interface": "error",
        },
    },

    // HTML template files
    {
        files: ["**/*.html"],
        languageOptions: {
            parser: angular.templateParser,
        },
        plugins: {
            "@angular-eslint/template": angular.templatePlugin,
        },
        rules: {
            // Template rules manually added
            "@angular-eslint/template/banana-in-box": "error",
            "@angular-eslint/template/no-negated-async": "error",
            "@angular-eslint/template/alt-text": "error",
            "@angular-eslint/template/elements-content": "error",
            "@angular-eslint/template/label-has-associated-control": "error",
            "@angular-eslint/template/table-scope": "error",
            "@angular-eslint/template/valid-aria": "error",
        },
    },

    // NgRx rules
    {
        files: ["**/*.ts"],
        extends: [...ngrx.configs.all],
        rules: {},
    },
);
