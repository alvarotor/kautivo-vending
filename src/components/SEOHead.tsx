interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export function SEOHead({ 
  title = "Kautivo - Smart Vending Machines for Wellness Facilities",
  description = "Premium smart vending machines designed specifically for wellness facilities, fitness centers, and health-conscious environments. Boost revenue while serving your community's wellness goals.",
  keywords = "smart vending machines, wellness facilities, fitness center vending, gym vending machines, health conscious vending, spa vending solutions, automated retail wellness",
  image = "/images/kautivo-hero.jpg",
  url = "https://kautivo-vending.yourdomain.com",
  type = "website"
}: SEOHeadProps) {
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Kautivo" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Kautivo" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kautivo",
          url,
          description,
          logo: `${url}/images/kautivo-logo.png`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567",
            contactType: "customer service",
            email: "info@kautivo.com",
            availableLanguage: ["English", "Spanish", "French", "German"]
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "US"
          },
          sameAs: [
            "https://linkedin.com/company/kautivo",
            "https://twitter.com/kautivo",
            "https://facebook.com/kautivo"
          ]
        })}
      </script>
    </>
  )
}