const createConfig = require("vuepress-bar")
const barConfig = createConfig(`${__dirname}/..`, { addReadMeToFirstGroup: false })
console.log(barConfig)
// 修正分组错误。
delete barConfig.sidebar['/']
barConfig.sidebar['/'] = ['']

module.exports = ctx => ({
    title: '正经人文章',
    head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
    description: '进哥哥著作,禁止盗版',
    theme: '@vuepress/theme-default',
    base:'/docs/',
    port:'8088',
    locales: {
        '/': {
            lang: "zh-CN"
        }
    },
    evergreen: false,
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: './logo.jpg',
        repo: 'http://git.5ihw.cn:10080/docs/bf-docs',
        repoLabel: '查看源码',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '编辑此页',
        // smoothScroll: false, // 页面滚动
        lastUpdated: '上次更新',
        sidebarDepth: 3, //侧边栏显示层级
        nav: [
            { text: '首页', link: '/' },
            { text: '前端技术', link: '/reception/' },
            { text: '后端技术', link: '/backstage/' },
            {
                text: '网站', items: [
                    { text: '微信小程序', link: '/interface/wxapi/' },
                    { text: '网站', link: '/interface/website/' }
                ]
            },
            { text: '我的博客', link: 'https://gitee.com/flypig666/projects' },
        ],
        sidebar: {
            // "/guide/": [""],
            "/interface/wxapi/": [""],
            "/interface/web/": [""],
        }
        // nav:barConfig.nav.concat[{
        //     text:'其他'
        // }],
        // sidebar: barConfig.sidebar
    }
})