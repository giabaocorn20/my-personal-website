import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ title, exceprt, date_pub, image }) => {
    const date = new Date(date_pub).toISOString()
    const featuredImage = {
        alt: title
    }

    return (
        <>
            <NextSeo
                title={`${title}`}
                description={exceprt}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: date
                    },
                    title,
                    description: exceprt,
                    images: [featuredImage]
                }}
            />
            <ArticleJsonLd
                authorName="Jason"
                dateModified={date}
                datePublished={date}
                description={exceprt}
                images={[featuredImage]}
                publisherName="Jason"
                title={title}
            />
        </>
    )
}

export default BlogSeo