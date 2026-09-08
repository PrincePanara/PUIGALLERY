import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  schema?: Record<string, any>;
}

export function SEO({ title, description, image, url, type = 'website', schema }: SEOProps) {
  // Use window.location as fallback if no url is provided
  const siteUrl = 'https://princepanara.com'; // Default production URL
  const canonicalUrl = url ? `${siteUrl}${url}` : typeof window !== 'undefined' ? window.location.href.split('?')[0] : siteUrl;

  const defaultTitle = 'Prince Panara — UI/UX & Product Designer';
  const defaultDesc = 'Prince Panara is a UI/UX and product designer creating thoughtful web, mobile, and digital experiences through clean interfaces, interaction, and product thinking.';
  
  const seoTitle = title || defaultTitle;
  const seoDesc = description || defaultDesc;
  // Fallback to a default generic OG image if one isn't specified
  const seoImage = image ? `${siteUrl}${image}` : `${siteUrl}/og-default.jpg`;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:site_name" content="Prince Panara" />
      <meta property="og:image" content={seoImage} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={seoImage} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
