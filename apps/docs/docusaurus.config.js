module.exports = {
    title: 'Wildboar ASN.1 TypeScript Libraries',
    tagline: 'Libraries for encoding and decoding ASN.1 data structures from dozens of specifications.',
    url: 'https://asn1tslib.wildboarsoftware.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'WildboarSoftware',
    projectName: 'asn1-typescript-libraries',
    themeConfig: {
        navbar: {
            title: 'ASN.1 TS Libraries',
            //   logo: {
            //     alt: 'My Site Logo',
            //     src: 'img/logo.svg',
            //   },
            items: [
                {
                    to: 'docs/intro',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                // { to: 'blog', label: 'Blog', position: 'left' },
                // {
                //     href: 'https://github.com/WildboarSoftware',
                //     label: 'GitHub',
                //     position: 'right',
                // },
            ],
        },
        footer: {
            style: 'dark',
            // links: [
            //     {
            //         title: 'Docs',
            //         items: [
            //             {
            //                 label: 'Style Guide',
            //                 to: 'docs/',
            //             },
            //             {
            //                 label: 'Second Doc',
            //                 to: 'docs/doc2/',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'Community',
            //         items: [
            //             {
            //                 label: 'Stack Overflow',
            //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //             },
            //             {
            //                 label: 'Discord',
            //                 href: 'https://discordapp.com/invite/docusaurus',
            //             },
            //             {
            //                 label: 'Twitter',
            //                 href: 'https://twitter.com/docusaurus',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'More',
            //         items: [
            //             {
            //                 label: 'Blog',
            //                 to: 'blog',
            //             },
            //             {
            //                 label: 'GitHub',
            //                 href: 'https://github.com/facebook/docusaurus',
            //             },
            //         ],
            //     },
            // ],
            copyright: `Copyright © 2021 Wildboar Software. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
