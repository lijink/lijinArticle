module.exports = {
    title: '正经人文章',
    description: 'Hello, my friend!',
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.jpg`
        }]
    ],
    evergreen: true,
    base: '/',
    port:'8088',
    locales: {
        '/': {
            lang: "zh-CN"
        }
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: './logo.jpg',
        editLinks: true,
        editLinkText: '编辑此页',
        // smoothScroll: false, // 页面滚动
        lastUpdated: '上次更新',
        sidebarDepth: 3, //侧边栏显示层级
        nav:[
            { text: '首页', link: '/' },
            { text: '前端技术', link: '/guide/' },
        ],
        sidebar:{
            "/guide/": [""]
        }
    }
}