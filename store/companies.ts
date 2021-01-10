import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'
import { Company } from '~/types/Company'

export const state = () => ({
  companies: [] as Company[]
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  SET_COMPANIES(state, companies: Company[]) {
    state.companies = companies
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchAll({ commit }) {
      const response = await this.$axios.$post(
        'https://api.russia-work.com/api/v1/companies/search',
        {
          city_place_id: null,
          industry_id: null,
          page: 1,
          search_query: null,
          type_id: null
        }
      )
      const companies: Company[] = response.data.items
      commit('SET_COMPANIES', companies)
    }
  }
)
