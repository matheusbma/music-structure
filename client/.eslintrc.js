module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        mocha: true,
    },
    globals: {
        window: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-unused-vars": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};
