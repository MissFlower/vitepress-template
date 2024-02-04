import iterator from 'markdown-it-for-inline'
import MarkdownIt from 'markdown-it'

/**
 * 给 table 嵌套一层容器方便处理样式
 *
 * @param { Object } md markdown 实例
 */
export const PluginTitle = (md: MarkdownIt): void => {
  // md.use(iterator, 'title_replace', 'text', function (tokens, idx) {
  //   if (tokens[idx].content.includes('Copy')) {
  //     console.log(tokens, idx);
  //   }
    
  //   tokens[idx].content = tokens[idx].content.replace(/title="Copy Code"/g, 'title="复制代码"');
  // });
}