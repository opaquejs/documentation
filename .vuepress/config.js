module.exports = {
    title: 'Opaque',
    description: 'A Client-Side Javascript ORM',
    themeConfig: {
        nav: [
            { text: 'Documentation', link: '/' },
        ],
        sidebar: [
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    ['/', 'Introduction'],
                    '/getting-started/installation',
                    '/getting-started/defining-models',
                    '/getting-started/working-with-models',
                    '/getting-started/querying',
                ],
            },
        ],
    }
}