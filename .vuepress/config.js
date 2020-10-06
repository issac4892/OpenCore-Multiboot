const {
    description
} = require('../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'OpenCore Multiboot',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/OpenCore-Multiboot/',

	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	},

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/dortania/OpenCore-Multiboot',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        logo: '/homepage.png',
        nav: [{
            text: 'Dortania Guides',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Home Site',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'OpenCore Install Guide',
                link: 'https://dortania.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'OpenCore Post-Install',
                link: 'https://dortania.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Wireless Buyers Guide',
                link: 'https://dortania.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'GPU Buyers Guide',
                link: 'https://dortania.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Anti Buyers Guide',
                link: 'https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
            /*
              {
                text: 'Github',
                link: 'https://github.com/dortania/OpenCore-Install-Guide'
              }
            */
        ],
        sidebar: [{
            title: 'For experienced users who already dealt with multibooting.',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['QUICK', 'Quick! I know what do, just tell me already HOW'],
            ]

        },
        
    	],
    },
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
