module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#230023",
        primaryshade: "#360036",
        secondry: "#811336",
        logo: "#EC1C24",
        third: "#E3E3E3",
        third2: "#332F31",
        extra: "#757575",
        texthover: "#474446",
      },
      fontFamily: {
        hd: ["Poppins", "serif"],
        bd: ["Noto Sans", "sans-serif"],
        bd2: ["Mukta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
