// 字数统计插件 - 使用最简单可靠方式
(function () {
  // 简单变量存储当前字数
  let currentWordCount = 0;
  
  // 防抖函数，避免频繁更新
  function debounce(fn, delay) {
    let timer = null;
    return function() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, arguments), delay);
    }
  }
  
  // 计算字数函数
  async function countWords() {
    try {
      const page = await logseq.Editor.getCurrentPage();
      if (!page) return 0;
      
      const blocks = await logseq.Editor.getPageBlocksTree(page.name);
      let total = 0;
      
      const processBlock = (block) => {
        if (block.content) {
          const text = block.content.replace(/[#*`~\[\]()]/g, '');
          const chars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
          const words = (text.match(/\b[a-zA-Z]+\b/g) || []).length;
          const numbers = (text.match(/\d+/g) || []).length;
          total += chars + words + numbers;
        }
        if (block.children) {
          block.children.forEach(processBlock);
        }
      };
      
      blocks.forEach(processBlock);
      console.log('当前页面字数：', total);
      return total;
    } catch (err) {
      console.error('计数错误:', err);
      return 0;
    }
  }

  // 更新UI显示
  function updateUI(count) {
    currentWordCount = count;
    // 使用直接的模板刷新而不依赖DOM查询
    logseq.App.registerUIItem('toolbar', {
      key: 'word-count-display',
      template: `
        <a title="当前页面字数" style="
          display: flex;
          align-items: center;
          padding: 4px 6px;
          font-size: 14px;">
          <span>📝 ${count} 字</span>
        </a>
      `,
      replace: true
    });
  }

  // 自动更新函数 - 使用防抖
  const autoUpdate = debounce(async () => {
    const count = await countWords();
    updateUI(count);
  }, 500);

  // 主函数
  function main() {
    console.log('字数统计插件已加载');
    
    // 初始化UI
    updateUI(0);
    
    // 监听路由变化
    logseq.App.onRouteChanged(() => {
      autoUpdate();
    });
    
    // 初始化计数
    setTimeout(autoUpdate, 2000);
    
    // 添加slash命令
    logseq.Editor.registerSlashCommand('字数统计', async () => {
      const count = await countWords();
      logseq.UI.showMsg(`当前页面：${count} 字`, 'success');
    });
  }

  // 启动插件
  logseq.ready(main).catch(console.error);
})();