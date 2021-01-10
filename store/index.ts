import {
  getAccessorType,
  mutationTree,
  actionTree,
  getterTree
} from 'nuxt-typed-vuex'

import * as companies from './companies'

export const state = () => ({})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, getters, mutations }, {})

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: { companies }
})
