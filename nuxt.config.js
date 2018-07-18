const parseArgs = require("minimist");
const argv = parseArgs(process.argv.slice(2), {
    alias: {
        H: "hostname",
        p: "port"
    },
    string: ["H"],
    unknown: parameter => false
});

const port = argv.port || process.env.PORT || process.env.npm_package_config_nuxt_port || "3000";
const host = argv.hostname || process.env.HOST || process.env.npm_package_config_nuxt_host || "localhost";

module.exports = {
    env: {
        baseUrl:
        process.env.BASE_URL || `http://${host}:${port}`
    },
    srcDir: "src/",
    head: {
        title: "SSSR Vue",
        meta: [
            {charset: "utf-8"},
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Nuxt.js project"
            }
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/dev/favicon.ico"
            }
        ]
    },
    /*
    ** Build configuration
    */
    modules: [
        "@nuxtjs/axios",
        "../nuxt-modules/typescript.js"
    ],
    router: {
        base: '/dev/'
    },
    performance: {
        gzip: false
    },
    dev: false
};
