# Button 按钮

这个按钮可不简单

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/button)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/button.md)

## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

`simple` 属性可以配置简约的按钮，样式依然由 `type` 控制

::: demo

<template #source>
<f-button type="default">默认按钮</f-button>
<f-button type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button type="danger">危险按钮</f-button>
<f-button type="warning">警告按钮</f-button>
<f-button type="info">信息按钮</f-button>

  <br />

<f-button simple type="default">默认按钮</f-button>
<f-button simple type="primary">主要按钮</f-button>
<f-button simple type="success">成功按钮</f-button>
<f-button simple type="danger">危险按钮</f-button>
<f-button simple type="warning">警告按钮</f-button>
<f-button simple type="info">信息按钮</f-button>

</template>

```html
<f-button type="default">默认按钮</f-button>
<f-button type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button type="danger">危险按钮</f-button>
<f-button type="warning">警告按钮</f-button>
<f-button type="info">信息按钮</f-button>

<f-button simple type="default">默认按钮</f-button>
<f-button simple type="primary">主要按钮</f-button>
<f-button simple type="success">成功按钮</f-button>
<f-button simple type="danger">危险按钮</f-button>
<f-button simple type="warning">警告按钮</f-button>
<f-button simple type="info">信息按钮</f-button>
```

:::

## Button Attributes

| 参数            | 说明                                                                                                                                                                                                          | 类型                                                                   | 可选值                                                  | 默认值   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------- | -------- |
| `bold`          | 按钮文字是否加粗                                                                                                                                                                                              | boolean                                                                | ——                                                      | false    |
| `circle`        | 是否为圆形按钮                                                                                                                                                                                                | boolean                                                                | ——                                                      | false    |
| `round`         | 是否为圆角按钮                                                                                                                                                                                                | boolean                                                                | ——                                                      | false    |
| `font-size`     | 文字字体大小                                                                                                                                                                                                  | string / number                                                        | ——                                                      | ——       |
| `font-color`    | 文字字体颜色                                                                                                                                                                                                  | string                                                                 | ——                                                      | ——       |
| `size`          | 按钮尺寸                                                                                                                                                                                                      | <a href="/components/interface.html#fightingsize">FightingSize</a>     | `large` `middle` `small` `mini`                         | middle   |
| `block`         | 是否为块级元素                                                                                                                                                                                                | boolean                                                                | ——                                                      | false    |
| `href`          | 链接按钮的地址                                                                                                                                                                                                | string                                                                 | ——                                                      | ——       |
| `target`        | 原生 [target](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href) 属性，在 `link="true"` 时生效                                                                                            | <a href="/components/interface.html#fightingtarget">FightingTarget</a> | `_blank` `_self` `_parent` `_top`                       | \_self   |
| `loading`       | 是否展示 loading 状态                                                                                                                                                                                         | boolean                                                                | ——                                                      | false    |
| `disabled`      | 是否禁用按钮                                                                                                                                                                                                  | boolean                                                                | ——                                                      | false    |
| `before-icon`   | 之前的 icon                                                                                                                                                                                                   | <a href="/components/interface.html#fightingicon">FightingIcon</a>     | ——                                                      | ——       |
| `after-icon`    | 之后的 icon                                                                                                                                                                                                   | <a href="/components/interface.html#fightingicon">FightingIcon</a>     | ——                                                      | ——       |
| `loading-icon`  | loading 状态下的 icon                                                                                                                                                                                         | <a href="/components/interface.html#fightingicon">FightingIcon</a>     | ——                                                      | ——       |
| `type`          | 按钮的类型 （不同类型对应不同的背景和字体颜色，非自定义按钮颜色时有效）                                                                                                                                       | <a href="/components/interface.html#fightingtype">FightingType</a>     | `default` `primary` `success` `danger` `warning` `info` | ——       |
| `autofocus`     | 是否自动获取焦点                                                                                                                                                                                              | boolean                                                                | ——                                                      | false    |
| `spread`        | 是否带有点击扩散效果                                                                                                                                                                                          | boolean                                                                | ——                                                      | false    |
| `name`          | 按钮的名字                                                                                                                                                                                                    | string                                                                 | ——                                                      | f-button |
| `shadow`        | 按钮的阴影                                                                                                                                                                                                    | string                                                                 | ——                                                      | ——       |
| `text`          | 是否为文字按钮 （非自定义按钮颜色时有效）                                                                                                                                                                     | boolean                                                                | ——                                                      | false    |
| `simple`        | 是否为简约按钮 （非自定义按钮颜色时有效）                                                                                                                                                                     | boolean                                                                | ——                                                      | false    |
| `ripples`       | 是否启用点击涟漪效果                                                                                                                                                                                          | boolean                                                                | ——                                                      | false    |
| `ripples-color` | 涟漪背景色                                                                                                                                                                                                    | string                                                                 | ——                                                      | ——       |
| `native-type`   | 按钮的原生类型                                                                                                                                                                                                | <a href="#buttonnative">ButtonNative</a>                               | `button` `submit` `reset`                               | button   |
| `color`         | 自定义按钮的背景颜色，仅支持 [hex](https://baike.baidu.com/item/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2%E7%A0%81/10894232?fr=aladdin) 格式的色号。如果未指定`font-color`，则字体颜色默认为白色 | string                                                                 | ——                                                      | ——       |
| `on-click`      | 点击执行的回调                                                                                                                                                                                                | <a href="/components/interface.html#handlemouse">HandleMouse</a>       | ——                                                      | ——       |

## ButtonGroup Attributes

| 参数        | 说明     | 类型                                                               | 可选值                          | 默认值     |
| ----------- | -------- | ------------------------------------------------------------------ | ------------------------------- | ---------- |
| `size`      | 按钮尺寸 | <a href="/components/interface.html#fightingsize">FightingSize</a> | `large` `middle` `small` `mini` | middle     |
| `direction` | 排列方式 | <a href="#buttongroupdirection">ButtonGroupDirection</a>           | `horizontal` `vertical`         | horizontal |

## Button Slots

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 默认按钮的内容 |

## ButtonGroup Slots

| 名称      | 说明             |
| --------- | ---------------- |
| `default` | 默认按钮组的内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  ButtonInstance,
  ButtonProps,
  ButtonNative,
  ButtonGroupInstance,
  ButtonGroupProps,
  ButtonGroupDirection
} from 'fighting-design'
```

### ButtonNative

```ts
type ButtonNative = 'submit' | 'reset' | 'button'
```

### ButtonGroupDirection

```ts
type ButtonGroupDirection = 'horizontal' | 'vertical'
```

### ButtonClick

```ts
type ButtonClick = (evt: MouseEvent) => void
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                     | 描述              |
| ------------------------ | ----------------- |
| `--button-color`         | 文字颜色          |
| `--button-background`    | 背景色            |
| `--button-hover`         | hover 状态背景色  |
| `--button-active`        | active 状态背景色 |
| `--button-height`        | 高度              |
| `--button-padding`       | 内边距            |
| `--button-font-size`     | 文字大小          |
| `--button-border-radius` | 圆角大小          |

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/lxqddd" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/56574505?v=4" />
</a>

<a href="https://github.com/long-life233" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/77321887?v=4" />
</a>

<script setup lang="ts">
  import { FIconApps, FIconBlock } from 'fighting-design/fighting-icon'
</script>

<style scoped>
  .f-button {
    margin: 5px;
  }
  .f-button-group-vertical .f-button,
  .f-button-group .f-button {
    margin: 0;
  }
</style>
