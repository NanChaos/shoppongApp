module.exports = {
    // 关闭eslint校验
    lintOnSave: false,
    // 配置别名src==>@,见jsconfig.json，但是node_modules以及dist是不可用的

    // 代理跨越
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211'
            }
        }
    }
}
