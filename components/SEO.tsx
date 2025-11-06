import Head from "next/head";
import { siteConfig } from "@/config/site";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

// TODO: need work yet
// show categories
// meta 
// add more keywords
// use it in each page

export default function SEO({
    title = siteConfig.name,
    description = siteConfig.description,
    keywords = siteConfig.keywords,
    image = siteConfig.image,
    url = siteConfig.url,
}: SEOProps) {
    return (
        <Head>
            {/* Primary Meta */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
            <meta charSet="UTF-8" />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
