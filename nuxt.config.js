const environment = process.env.NODE_ENV
const env = require(`./env.${environment}.js`)

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 components: true,
 ssr: false,
  router: {
      middleware: [
          'setDeviceType',
          'audio'
      ]
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'https://relaxed-blackwell-749eb9.netlify.app' : 'http://localhost:3000')
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/plots/plot',
    '@/plugins/mixins/global.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    'nuxt-user-agent'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },
  rules: [
    {
      test: /\.json$/,
      loader: "json-loader",
      type: "javascript/auto"
    }
  ]
}
