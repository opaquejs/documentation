module.exports = {
    title: 'Opaque',
    description: 'A Client-Side Javascript ORM',
    base: '/documentation',
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
                    '/getting-started/managing-models',
                ],
            },
            {
                title: 'First-Party Extensions',
                collapsable: false,
                children: [
                    '/extensions/local',
                    '/extensions/vue',
                    '/extensions/socketio',
                ],
            },
        ],
    }
}