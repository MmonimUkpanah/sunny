export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sunny Seed Oil Company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" },
      { rel: 'stylesheet', href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" },
      {
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
        rel: "stylesheet"
      },
      {
        href: "https://fonts.googleapis.com/css2?family=DM+Sans&family=Public+Sans&display=swap",
        rel: "stylesheet"
      },
      {
        href: "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css",
        rel: "stylesheet"
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js", 
        type: "text/javascript"
      },
      {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        scr: "https://unpkg.com/element-ui/lib/index.js",
        type: "text/javascript"
      },
      {
        scr: "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js",
        type: "text/javascript"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: "./plugins/element-ui.js",
      ssr: false
    },
    {
      src: "./plugins/aos.js",
      ssr: false
    },
    {
      src: "./plugins/axios.js",
      ssr: false
    },
    {
      src: "./plugins/vee-validate.js",
      ssr: false
    },
    
    
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + window.innerHeight,
          behavior: 'smooth'
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  
 
  axios: {
    baseURL: "https://api.fxhup.com",
  
    // requestInterceptor: (config, { store }) => {
    //    config.headers.common['Authorization'] = `Bearer ${store.getters['localStorage.getItem(this.$token)']}`;
    // }
  },

  
  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: "token" },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: "/auth/user", method: "get", propertyName: "user" },
        },
        tokenType: "Bearer"
      }
    }
  }


  
}


