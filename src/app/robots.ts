import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // Add paths you want to hide from search engines to disallow
            // disallow: '/private/', 
        },
        // Replace with your actual production URL
        sitemap: 'https://alafiyamed.com/sitemap.xml',
    };
}
