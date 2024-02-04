import type { ExtractPropTypes, PropType } from 'vue'
/**
 * 设置 boolean 类型的 prop 参数
 *
 * @param { boolean } [defaultVal = false] 默认值
 * @returns { Object } 配置对象
 */
export const setBooleanProp = (
  defaultVal = false
): {
  readonly type: BooleanConstructor
  readonly default: boolean
} => {
  return { type: Boolean, default: defaultVal } as const
}

/**
 * 设置 string 类型的 prop 参数
 *
 * @param { string } [defaultVal = undefined] 默认值
 * @param { Function } [validator] 校验方法
 * @returns { Object } 配置对象
 */
export const setStringProp = <T extends string>(
  defaultVal?: T,
  validator?: (value: T) => boolean
): {
  readonly type: PropType<T>
  readonly default: T extends string ? T : undefined
  readonly validator?: (value: T) => boolean
} => {
  const prop = {
    type: String as unknown as PropType<T>,
    default: defaultVal
  } as {
    type: PropType<T>
    default: T extends string ? T : undefined
    validator?: (value: T) => boolean
  }

  if (validator) {
    prop.validator = validator
  }

  return prop
}

/**
 * 设置 function 类型 props 参数
 *
 * @param { Function } [defaultVal = null] 默认值
 * @returns { Object } 配置对象
 */
export const setFunctionProp = <T extends Function>(
  defaultVal = null
): {
  readonly type: PropType<T>
  readonly default: T | null
} => {
  return {
    type: Function as PropType<T>,
    default: defaultVal
  } as const
}

/**
 * change 事件类型接口
 *
 * @param { boolean } target 改变后的值
 */
export type HandleChange = (target: boolean) => void

export const Props = {
  /** 是否展开 */
  open: setBooleanProp(),
  /** 操作栏展开时的文字 */
  openText: setStringProp(),
  /**操作栏关闭时的文字 */
  closeText: setStringProp(),
  /** 自定义边框颜色 */
  borderColor: setStringProp(),
  /** 打开时的回调 */
  onOpen: setFunctionProp<HandleChange>(),
  /** 关闭时的回调 */
  onClose: setFunctionProp<HandleChange>()
} as const

/** sticky-card 组件 props 类型 */
export type StickyCardProps = ExtractPropTypes<typeof Props>