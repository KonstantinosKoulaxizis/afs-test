import Vue from 'vue'
import Vuex from 'vuex'
import { TableData } from '@/types/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    homeTableData: <TableData[]>[]
  },
  getters: {
    loading: state => state.loading,
    homeTableData: state => state.homeTableData
  },
  mutations: {
    setTableData(state, data: TableData[]) {
      state.homeTableData = data
    },
    addTableData(state, data: TableData) {
      state.homeTableData = [...state.homeTableData, data]
    },
    setLodaing(state, isLoading: boolean) {
      state.loading = isLoading
    }
  },
  actions: {
    async handleGetData({ commit, dispatch }): Promise<void> {
      try {
        commit('setLodaing', true)
        const data = await dispatch('getData')
        const tableData = data.map((dataItem: TableData) => {
          return {
            ...dataItem,
            randomNumber: Math.random()
          }
        })
        commit('setTableData', tableData)
        commit('setLodaing', false)
      } catch (error) {
        console.log(error, 'This is not good')
      }
    },

    async getData(): Promise<TableData[]> {
      return [
        {
          id: '42f2462d-49d0-4e91-8fe1-de2e656b0f06',
          name: 'Series A',
          nominalValue: 5,
          authorizedAmount: 1500,
          issuedAmount: 500,
          authorizedCapital: 7550,
          issuedCapital: 2500
        },
        {
          id: '42f2462d-49d0-4e91-8fe1-de2e656b0f06',
          name: 'Series B',
          nominalValue: 10,
          authorizedAmount: 15000,
          issuedAmount: 5000,
          authorizedCapital: 150000,
          issuedCapital: 50000
        },
        {
          id: 'fd78c11b-e3d2-455a-99b0-49907a75c463',
          name: 'Series C',
          nominalValue: 1,
          authorizedAmount: 96876,
          issuedAmount: 61760,
          authorizedCapital: 96876,
          issuedCapital: 61760
        },
        {
          id: 'd8654cb0-8986-4fbc-b969-025e514cb934',
          name: 'Series D',
          nominalValue: 1,
          authorizedAmount: 10110,
          issuedAmount: 1100,
          authorizedCapital: 10110,
          issuedCapital: 1100
        }
      ]
    }
  },
  modules: {}
})
