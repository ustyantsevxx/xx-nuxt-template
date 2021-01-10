import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    xs: 320,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: Infinity
  },
  defaultBreakpoint: 'sm'
})
