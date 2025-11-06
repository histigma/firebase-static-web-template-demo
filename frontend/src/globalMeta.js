export const defaultMeta = { 
    title: '',
    description: '',
    keywords: '',
    authors: '',
    copyright: '',
    
    ogType: 'website',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogUrl: '',
    ogSiteName: '',
    ogLocale: 'ko-kr',

    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    twitterCard: 'summary_large_image',
}


export const SdOrganization = {
	"@context": "https://schema.org/",
	"@type": "Organization",
	"name": "MyWebsite",
	"logo": "h",
	"url": "",
	"address": {
		"@type": "PostalAddress",
		"addressCountry": "KR"
	},
	"sameAs": [""]
}


export const SdBuisiness = {
	"@context": "https://schema.org/",
	"@type": "HomeGoodsStore",
	"name": "MyWebsite",
	"image": "",
	"priceRange": "$2-10",
	"telephone": "",
	"url": "",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "",
		"addressLocality": "",
		"addressRegion": "",
		"addressCountry": "KR"
	},
	"openingHoursSpecification": [
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			"opens": "09:00",
			"closes": "18:00"
		}
	],
	"sameAs": [""]
}
