const title = 'Jason Nguyen.'
const description =
    'Personal portfolio and resume website for Jason Nguyen.'

const SEO = {
    title,
    description,
    // canonical: 'https://benjamincarlson.io',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        // url: 'https://ben.io',
        title,
        description,
        images: [
            {
                // url: 'https://benjamincarlson.io/images/logo.png',
                alt: title
            }
        ]
    },
    twitter: {
        // handle: '@bjmncrlsn',   
        // site: '@bjmncrlsn',
        // cardType: 'summary_large_image'
    }
}

export default SEO