export default function ({ store, app: { $axios }, redirect }) {
    $axios.onRequest((config) => {
      // check if the user is authenticated
      const token = localStorage.getItem('auth.jwt')
      if (token) {
        // set the Authorization header using the access token
        config.headers.common['Authorization'] =`bearer ${token}`

        console.log(config)
        
      }
  
      return config
    })
  }

