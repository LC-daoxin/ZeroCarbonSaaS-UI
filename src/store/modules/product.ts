import {defineStore} from 'pinia'
import {store} from '/@/store'

export const useProductEnumStore = defineStore({
  // 定义缓存id
  id: 'productEnum',
  state() {
    return {
      enumInfo: {} as any,
    }
  },
  // 定义当前缓存公开的 getters，相当于vue的计算属性
  getters: {
    getProductEnum(): any {
      return this.enumInfo
    },
  },
  // 定义当前缓存公开的方法，可以直接调用并传参
  actions: {
    setProductEnum(info: Object) {
      this.enumInfo = info
    },
  },
})

// 在vue3的setup方法之外使用时，需要调用此方法
export function useUseProductEnumWithOut() {
  return useProductEnumStore(store)
}