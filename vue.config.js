module.exports = {
    css: {
        loaderOptions: {
        less: {
            prependData: `@import "./src/colors.less";`
        }
        }
    }
}