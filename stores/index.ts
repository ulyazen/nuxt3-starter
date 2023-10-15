import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    items: [] as string[],
  }),
  getters: {},
  actions: {
  },
})
