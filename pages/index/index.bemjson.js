({
    block: 'b-page',
    title: 'Clean BEM project template',
    head: [
        { elem: 'css', url: '_index.css'},
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
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
                }
            ]
        }
    ]
})
