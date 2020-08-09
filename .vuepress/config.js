const logo = '/logo.png'

module.exports = {
    title: 'Opaque',
    description: 'A Client-Side Javascript ORM',
    base: '/documentation/',
    head: [
        ['link', { rel: 'icon', href: logo }],
    ],
    themeConfig: {
        logo,
        lastUpdated: 'Last Updated',
        repo: 'https://gitlab.com/opaquejs',
        repoLabel: 'GitLab',
        docsRepo: 'https://gitlab.com/opaquejs/documentation',
        editLinks: true,
        editLinkText: 'Edit this page',
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
            {
                title: 'Digging Deeper',
                collapsable: false,
                children: [
                    '/digging-deeper/models',
                ],
            },
        ],
    }
}