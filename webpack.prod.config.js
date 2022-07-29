const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    plugins: [
        new CopyPlugin({
        patterns: [
            { from: "src/assets", to: "assets" },
            { from: "src/assets/covers", to: "assets/covers" },
        ],
        }),
    ],
};