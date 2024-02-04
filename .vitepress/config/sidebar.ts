/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      collapsible: true,
      link: '/docs/hello',
      items: [
        { text: 'hello', link: '/docs/hello' },
        { text: '欢迎使用', link: '/docs/welcome' }
      ]
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      collapsible: true,
      link: '/components/button',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Form 表单', link: '/components/form' },
      ]
    }
  ]
}
