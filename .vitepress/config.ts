import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { PluginTable, PluginDemo, PluginTitle } from './plugin'
import type MarkdownIt from 'markdown-it'
import { fileURLToPath, URL } from 'node:url'

/**
 * 更多配置项参考：
 * 
 * @see app-configs https://vitepress.vuejs.org/config/app-configs.html
 */
export default {
  title: 'vitepress-template',
  /**
   * vue 相关配置
   *
   * @see vue https://vitepress.dev/reference/site-config#vue
   * @see option https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#options
   */
  vue: {
    script: {
      defineModel: true
    }
  },
  /**
   * 覆盖默认主题组件
   * @see vue  https://vitepress.dev/guide/extending-default-theme
   */
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/vp-theme-apperence.vue', import.meta.url)
          )
        }
      ]
    }
  },
  /**
   * 是否显示最后更新时间
   *
   * @see last-updated https://vitepress.vuejs.org/guide/theme-last-updated#last-updated
   */
  lastUpdated: true,
  /**
   * 缓存目录
   *
   * @see cacheDir https://vitepress.vuejs.org/config/app-configs#cachedir
   */
  cacheDir: '../../node_modules',
  /**
   * 主题配置
   *
   * @see theme-config https://vitepress.vuejs.org/guide/migration-from-vitepress-0#theme-config
   */
  themeConfig: {
    /**
     * 最后更新时间的文案显示
     *
     * @see lastUpdatedText https://vitepress.vuejs.org/config/theme-configs#lastupdatedtext
     */
    lastUpdatedText: '最后更新时间',
    /**
     * 配置导航栏图表
     *
     * @see socialLinks https://vitepress.vuejs.org/config/theme-configs#sociallinks
     */
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tyh2001/vitepress-template'
      }
    ],
    nav,
    sidebar
  },
  /**
   * 自定义 markdown 解析器
   *
   * @see markdown https://vitepress.vuejs.org/config/app-configs#markdown
   */
  markdown: {
    /**
     * 配置 Markdown-it 实例
     *
     * @param { Object } md markdown 实例
     */
    config: (md: MarkdownIt): void => {
      md.use(PluginTitle)
      md.use(PluginTable)
      md.use(PluginDemo)
    }
  }
}
