// https://github.com/kendallstrautman/brevifolia-nuxt-forestry/blob/master/nuxt.config.js
import config from "./content/config.json";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "waheguru-live-com",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/vue-concise-slider.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    // https://image.nuxtjs.org/
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/onesignal",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Options
  oneSignal: {
    // Use CDN
    cdn: true,
    init: {
      appId: config.onesignal_app_id,
      safari_web_id: config.onesignal_app_id_safari,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true,
      },
      promptOptions: {
        customlink: {
          enabled: true /* Required to use the Custom Link */,
          style: "button" /* Has value of 'button' or 'link' */,
          size: "medium" /* One of 'small', 'medium', or 'large' */,
          color: {
            button:
              "#E12D30" /* Color of the button background if style = "button" */,
            text: "#FFFFFF" /* Color of the prompt's text */,
          },
          text: {
            subscribe: "Subscribe" /* Prompt's text when not subscribed */,
            unsubscribe: "Unsubscribe" /* Prompt's text when subscribed */,
            explanation:
              "Get daily Hukumnama alerts on website" /* Optional text appearing before the prompt button */,
          },
          unsubscribeEnabled: true /* Controls whether the prompt is visible after subscription */,
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
    icon: {
      /* icon options */
      purpose: "maskable",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // google fonts options: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      "Krona+One": true,
    },
    display: "auto",
  },
};
