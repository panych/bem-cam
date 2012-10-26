({
    block: 'b-page',
    title: 'BEM CAM Crid1',
    head: [
        { elem: 'css', url: '_index.css'},
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            block: 'b-header',
            content: [
                {
                    block: 'b-logo',
                    content: {
                        elem: 'link',
                        url: 'http://github.com/voischev/bem-cam',
                        content: [
                            {
                                elem: 'icon',
                                url: '../../blocks/b-logo/b-logo.png'
                            },
                            {
                                elem: 'slogan',
                                content: 'Simple BEM Project'
                            }
                        ]
                    }
                },
                {
                    block: 'b-follow'
                }
            ]
        },
        {
            block: 'b-content',
            content: [
                {
                    block: 'b-text',
                    content: [
                        {
                            elem: 'h1',
                            content: 'Clean BEM project template'
                        },
                        {
                            elem: 'p',
                            content: [
                                {
                                    block: 'b-link',
                                    url: 'http://github.com/voischev/bem-cam',
                                    content: 'Link in github'
                                }
                            ]
                        },
                        {
                            elem: 'h2',
                            content: 'What is BEM'
                        },
                        {
                            elem: 'p',
                            content: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.' +
                            'It can be used for the individual development of the site or for a large team.'
                        },
                        {
                            elem: 'h2',
                            content: 'Methodology'
                        },
                        {
                            elem: 'p',
                            content: 'In some ways, BEM is similar to OOP. It\'s a way of describing reality in code, a range of patterns, and a way of thinking about program entities regardless of programming languages being used.' +
                            'We used BEM principles to create a set of front-end development techniques and tools, that allow us to build websites quickly and maintain them over a long time.'
                        },
                        {
                            elem: 'p',
                            content: [
                                {
                                    block: 'b-link',
                                    url: 'http://bem.info',
                                    content: 'More in bem.info'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'b-footer',
            content: [
                {
                    block: 'b-menu-horiz',
                    mods: { layout: 'normal' },
                    js: false,
                    title: {
                        elem: 'title',
                        content: 'More links:'
                    },
                    content: [
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: 'http://github.com/voischev/bem-cam',
                                content: 'Bem-cam'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: 'http://bem.info',
                                content: 'Bem.info'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: 'http://bem.github.com/bem-bl/',
                                content: 'bem-bl'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: 'https://twitter.com/bem_tw',
                                content: '@bem_tw'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: 'http://clubs.ya.ru/bem/',
                                content: 'Bem Club'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
