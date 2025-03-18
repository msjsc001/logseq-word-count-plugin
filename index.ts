// 导入所需的库
import '@logseq/libs'

// 主函数 - 尽量保持轻量
const main = () => {
  // 注册工具栏按钮
  logseq.App.registerUIItem('toolbar', {
    key: 'word-count',
    template: `
      <a data-on-click="countWords" style="
        display: flex;
        align-items: center;
        font-size: 14px;
        margin: 0 5px;
        cursor: pointer;
      ">
        <i class="ti ti-calculator" style="margin-right: 4px;"></i>
        <span id="word-count-display">0 字</span>
      </a>
    `
  })
  
  // 注册模型 - 简化版本
  logseq.provideModel({
    async countWords() {
      try {
        // 只在用户请求时获取当前页面
        const page = await logseq.Editor.getCurrentPage()
        if (!page) return
        
        // 获取页面内容
        const blocks = await logseq.Editor.getPageBlocksTree(page.name)
        let total = 0
        
        // 定义正则表达式
        const CHINESE_CHARS = /[\u4e00-\u9fa5]/g
        const ENGLISH_WORDS = /\b[a-zA-Z]+\b/g
        const NUMBERS = /\d+/g
        
        // 递归统计字数
        const countBlock = (block) => {
          if (block.content) {
            const text = block.content.replace(/[#*`~\[\]()]/g, '').trim()
            total += (text.match(CHINESE_CHARS) || []).length
            total += (text.match(ENGLISH_WORDS) || []).length
            total += (text.match(NUMBERS) || []).length
          }
          if (block.children) block.children.forEach(countBlock)
        }
        
        // 处理所有块
        blocks.forEach(countBlock)
        
        // 更新显示
        const display = document.getElementById('word-count-display')
        if (display) display.textContent = `${total} 字`
        
        // 显示消息提示
        logseq.UI.showMsg(`当前页面字数：${total}`)
      } catch (err) {
        console.error('字数统计错误:', err)
      }
    }
  })
}

// 启动插件 - 直接使用函数，避免异步操作
logseq.ready(main)