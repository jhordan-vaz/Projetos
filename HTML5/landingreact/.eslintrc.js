module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'plugin:react-hooks/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        parser: "babel-eslint",
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            jsx: true,
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "no-unused-vars": "off",
    }
}
