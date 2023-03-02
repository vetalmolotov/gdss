// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    buildModules: [
        '@nuxtjs/google-fonts'
      ],
    css: [
        '@/assets/css/normalize.css',
        '@/assets/css/fonts.scss',
        '@/assets/css/buttons.scss',
        '@/assets/css/icons.scss',
        '@/assets/css/form.scss',
        '@/assets/css/index.scss',

    ],
    googleFonts: {
        useStylesheet: true,
        preload: true,
        families: {
          Roboto: true,
          Questrial: true
        }
      },
      head: {
        link: [
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
            }
          ]
      }
}
