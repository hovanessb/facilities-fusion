const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		colors: {
		  customPrimary: "#29f8c8ff",
		  customSecondary: "#d9fcbbff",
		  customDarkBg1: "#061c27ff",
		  customDarkBg2: "#172e3b",
		  customDarkBg3: "#030b0e",
		  customDarkBg3Hover: "#29f8c8ff",
		  customContentSubtitle: "rgb(178, 184, 205)",
		  customGrayBorder: "rgb(255,255,255,0.1)",
		  customGrayText: "rgb(174, 178, 183)",
		  customDarkBgTransparent: "#011e2cff",
		  customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
		  customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)"  
		},
		fontFamily: {
			'sans': ['"Work Sans Variable"','Proxima Nova', ...defaultTheme.fontFamily.sans],
			'mono': ['"Big Shoulders Inline Text Variable"','Proxima Nova', ...defaultTheme.fontFamily.mono],
		},
		screens: {
		  xs: "530px",
		  sm: "640px",
		  md: "768px",
		  lg: "1024px",
		  xl: "1280px",
		  xll: "1400px",
		  "2xl": "1536px",
		},
	  },
	},
  };