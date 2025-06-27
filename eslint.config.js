// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettier = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");

module.exports = tseslint.config(
    {
        // Global ignores - these files/directories will be ignored completely
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/build/**",
            "**/coverage/**",
            "**/.angular/**",
            "**/cypress/screenshots/**",
            "**/cypress/videos/**",
            "**/cypress/downloads/**",
            "**/*.js.map",
            "**/*.d.ts.map",
            "**/package-lock.json",
            "**/yarn.lock",
            "**/pnpm-lock.yaml",
        ],
    },
    {
        files: ["**/*.ts"],
        extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...tseslint.configs.stylistic, ...angular.configs.tsRecommended, prettierConfig],
        processor: angular.processInlineTemplates,
        plugins: {
            "@ngrx": require("@ngrx/eslint-plugin"),
            prettier: prettier,
        },
        rules: {
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "app",
                    style: "camelCase",
                },
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "app",
                    style: "kebab-case",
                },
            ],
            "prettier/prettier": "error",
            "@ngrx/avoid-combining-selectors": "error",
            "@ngrx/avoid-dispatching-multiple-actions-sequentially": "error",
            "@ngrx/avoid-duplicate-actions-in-reducer": "error",
            "@ngrx/avoid-mapping-selectors": "error",
            "@ngrx/good-action-hygiene": "error",
            "@ngrx/no-dispatch-in-effects": "error",
            "@ngrx/no-effects-in-providers": "error",
            "@ngrx/no-multiple-global-stores": "error",
            "@ngrx/no-reducer-in-key-names": "error",
            "@ngrx/no-store-subscription": "error",
            "@ngrx/no-typed-global-store": "error",
            "@ngrx/prefer-action-creator": "error",
            "@ngrx/prefer-action-creator-in-of-type": "error",
            "@ngrx/prefer-concat-latest-from": "error",
            "@ngrx/prefer-inline-action-props": "error",
            "@ngrx/prefer-one-generic-in-create-for-feature-selector": "error",
            "@ngrx/prefer-selector-in-select": "error",
            "@ngrx/prefer-effect-callback-in-block-statement": "error",
            "@ngrx/updater-explicit-return-type": "error",
            "@ngrx/use-consistent-global-store-name": "error",
            "@ngrx/use-effects-lifecycle-interface": "error",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-empty-function": ["error", { allow: ["constructors"] }],
            "@angular-eslint/prefer-inject": "warn",
            "@angular-eslint/component-class-suffix": "off",
            "@angular-eslint/directive-class-suffix": "off",
        },
    },
    {
        files: ["**/*.html"],
        extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
        rules: {},
    },
);
