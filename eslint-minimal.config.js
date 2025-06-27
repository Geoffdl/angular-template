// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
    // Global ignores
    {
        ignores: ["**/node_modules/**", "**/dist/**", "**/.angular/**", "**/coverage/**"],
    },

    // Base ESLint config
    eslint.configs.recommended,

    // TypeScript files
    {
        files: ["**/*.ts"],
        extends: [...tseslint.configs.recommended, ...angular.configs.tsRecommended],
        processor: angular.processInlineTemplates,
        rules: {
            // Angular selector rules
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

            // Disable strict naming rules (modern Angular approach)
            "@angular-eslint/component-class-suffix": "off",
            "@angular-eslint/directive-class-suffix": "off",

            // TypeScript rules
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-empty-function": ["error", { allow: ["constructors"] }],
        },
    },

    // HTML templates
    {
        files: ["**/*.html"],
        extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
        rules: {},
    },
);
