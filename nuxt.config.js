module.exports = {
  css: [
    "reset-css",
    "@/assets/fonts/futurist-bold/font.css",
    "@/assets/styles/global.styl"
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: "webclient-torchiodev.com",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "a personal website" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ["vuetify"],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  plugins: ["~/plugins/jsapi-torchiodev.com.js"]
};

