import { computed, inject } from "vue"

/**
 * 判断一个值是否为 function 类型
 *
 * @param { * } value 要检测的值
 * @returns { boolean }
 */
export const isFunction = (value: unknown): value is Function =>
  typeof value === 'function'

/**
 * useRun 返回值类型接口
 *
 * @param { Function } run 执行方法
 */
export interface UseRunReturn {
  run: <T extends Function>(callback: T | null | undefined, ...params: unknown[]) => void
}

/**
 * 执行方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 */
export const useRun = (): UseRunReturn => {
  /**
   * 执行方法函数
   *
   * @param { Function } callback 回调函数
   * @param { string } params 回调参数
   */
  const run = <T extends Function>(
    callback: T | null | undefined,
    ...params: unknown[]
  ): void => {
    isFunction(callback) && callback(...params)
  }

  return { run }
}

const FIGHTING_GLOBAL_PROPS_KEY = Symbol(
  'fighting-global-props-key'
)
/** 类型 */
export const FIGHTING_TYPE = [
  'default',
  'primary',
  'success',
  'danger',
  'warning',
  'info'
] as const
/**
 * 获取组件所需要的配置项，有组件内部的 prop、全局配置和默认值三个参数
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop 组件的 prop
 * @returns { Object } 根据优先级返回需要的参数
 */
export const useGlobal = (prop) => {
  /** 获取全局配置组件注入的依赖项 */
  const global = inject(FIGHTING_GLOBAL_PROPS_KEY, null)

  /**
   * 获取组件的类型
   *
   * @param { string } def 默认参数
   * @returns { Object } 类型
   */
  const getType = (def = 'default') => {
    return computed(() => {
      if (!prop) {
        return def
      }

      // 如果校验不通过则返回默认值
      if (prop.type && !FIGHTING_TYPE.includes(prop.type)) {
        return def
      }

      return (prop.type || (global && global.type) || def)
    })
  }
}