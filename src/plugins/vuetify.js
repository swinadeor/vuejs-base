import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#8bc34a',
        secondary: '#03a9f4',
        accent: '#9c27b0',
        error: '#f44336',
        warning: '#ffc107',
        info: '#607d8b',
        success: '#4caf50'
      }
    }
  }
})
