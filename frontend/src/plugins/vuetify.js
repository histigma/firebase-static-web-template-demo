/**
 * Imports all components and driectives of vuetify3.
 *
 * This script allows vuetify(Framework).
 *
 */


// import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '../assets/styles/variables.scss'
import 'vuetify/styles'

// Font awesome icons
import '@fortawesome/fontawesome-free/css/all.css'

import colors from 'vuetify/util/colors'


export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases: {},
    sets: {
      // mdi,
      fa: {
        component: (props) => {
          return h('i', { class: `fa-solid fa-${props.icon}` })
        },
      },
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: 	"#FFD166",
          secondary: "#E63946",
          salmon: "#FA8072",
          accent: "#52B788",
          warning: "#E53935",
          orange: "#FFD166",
          light: "#F5F8FA",
          dark: "#333333",
          neutralDark: "#F8F9FA"
        },
      },
    },
  },
  defaults: {
    global: {
      fontFamily: '"Pretendard Variable", "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
    },
  },
})

