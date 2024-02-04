import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 是否展开 */
  opened: {
    type: Boolean,
    default: false
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false
  },
  /** 是否开启高度过度动画 */
  heightAnimation: {
    type: Boolean,
    default: true
  },
  /** 是否开启宽度过度动画 */
  widthAnimation: {
    type: Boolean,
    default: false
  },
  /** 过度动画时间 */
  animationTime: {
    type: Number
  },
  /** 打开动画开始的回调 */
  onOpen: {
    type: Function
  },
  /** 关闭动画开始的回调 */
  onClose: {
    type: Function
  },
  /** 打开动画结束的回调 */
  onOpenEnd: {
    type: Function
  },
  /** 关闭动画结束的回调 */
  onCloseEnd: {
    type: Function
  }
} as const

/** collapse-animation 组件 props 类型 */
export type CollapseAnimationProps = ExtractPropTypes<typeof Props>