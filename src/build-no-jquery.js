({
    baseUrl: "../",
    name: "almond",
    out: "../dist/converse.nojquery.min.js",
    include: ['src/converse'],
    exclude: ['jquery', 'jquery-private'],
    insertRequire: ['converse'],
    mainConfigFile: '../config.js',
    wrap: {
        endFile: "wrapper-no-jquery.js"
    }
})
