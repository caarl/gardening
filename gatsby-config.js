module.exports = {
    siteMetadata: {
        title: 'Joe\'s Garden Services',
        description: 'A helping hand for all those jobs you never get around to.',
        author: '',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'graphics',
                path: `${__dirname}/static/assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/content/blocks`,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
//        {
//            resolve: `gatsby-remark-videos`,
//            options: {
//                pipelines: [
//                    {
//                    name: 'vp9',
//                    transcode: chain =>
//                        chain
//                        .videoCodec('libvpx-vp9')
//                        .noAudio()
//                        .outputOptions(['-crf 20', '-b:v 0']),
//                    maxHeight: 480,
//                    maxWidth: 900,
//                    fileExtension: 'webm',
//                    },
//                    {
//                    name: 'h264',
//                    transcode: chain =>
//                        chain
//                        .videoCodec('libx264')
//                        .noAudio()
//                        .addOption('-profile:v', 'main')
//                        .addOption('-pix_fmt', 'yuv420p')
//                        .outputOptions(['-movflags faststart'])
//                        .videoBitrate('1000k'),
//                    maxHeight: 480,
//                    maxWidth: 900,
//                    fileExtension: 'mp4',
//                    },
//                ],
//            }
//        },
//        {
//            resolve: `gatsby-remark-copy-linked-files`,
//            options: {},
//        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: 'graphics', // Must match the source name ^
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {},
                    },
                ],
            },
        },
        'gatsby-plugin-netlify-cms',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
};
