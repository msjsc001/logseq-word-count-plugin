/* Word Count Plugin / 字数统计插件 */
function createModel() {
  return {
    count: 0,
    setCount(n) {
      this.count = n;
      // Update toolbar display / 更新状态栏显示
      const countEl = parent.document.querySelector('#word-count-display');
      if (countEl) {
        countEl.textContent = `${this.count} words`;
      } else {
        console.log('Display element not found / 未找到显示元素 #word-count-display');
      }
    }
  };
}

const model = createModel();

function main() {
  console.log('Plugin loading... / 插件加载中...');

  // Register UI / 注册UI
  logseq.App.registerUIItem('toolbar', {
    key: 'word-count',
    template: `
      <div class="word-count-button" style="border-right: none;">
        <a data-on-click="showCount" style="font-size: 14px; display: flex; align-items: center; padding: 0 8px; cursor: pointer;">
          <i class="ti ti-calculator-filled" style="margin-right: 4px;"></i>
          <span id="word-count-display">0 words</span>
        </a>
      </div>
    `,
    style: {
      cursor: 'pointer'
    }
  });

  // Listen for page changes / 监听页面切换
  logseq.App.onRouteChanged(() => {
    console.log('Page changed, updating count... / 页面切换，更新字数...');
    setTimeout(updateCount, 300);
  });

  // Listen for content changes / 监听编辑更新
  logseq.DB.onChanged(() => {
    console.log('Content updated, updating count... / 内容更新，更新字数...');
    setTimeout(updateCount, 300);
  });

  // Update word count function / 更新字数统计的函数
  const updateCount = async () => {
    try {
      const page = await logseq.Editor.getCurrentPage();
      if (!page) {
        console.log('No page found / 未找到当前页面');
        return;
      }

      console.log('Counting page: / 正在统计页面:', page.name);
      const blocks = await logseq.Editor.getPageBlocksTree(page.name);
      let total = 0;

      const countBlockContent = (block) => {
        if (block.content) {
          // Remove Markdown syntax / 移除 Markdown 语法
          const text = block.content
            .replace(/#+\s|^\s*[-*]\s|\[\[|\]\]|\(\(|\)\)|#|\*|_|`|>|\||\/|\{|\}|\[|\]|\(|\)|=|~|<|>|!|\$/g, '')
            .trim();
          
          // Count Chinese characters / 计算中文字符
          const chars = text.match(/[\u4e00-\u9fa5]/g) || [];
          // Count English words / 计算英文单词
          const words = text.match(/\b[a-zA-Z]+\b/g) || [];
          // Count numbers / 计算数字
          const numbers = text.match(/\d+/g) || [];
          
          total += chars.length + words.length + numbers.length;
        }
        if (block.children) {
          block.children.forEach(countBlockContent);
        }
      };

      blocks.forEach(countBlockContent);
      console.log('Count completed / 统计完成，总字数:', total);

      // Update UI display / 更新UI显示
      model.setCount(total);
    } catch (error) {
      console.error('Word count error / 字数统计出错:', error);
    }
  };

  // Register click event handler / 注册点击事件处理
  logseq.provideModel({
    showCount() {
      console.log('Word count button clicked / 点击了字数统计按钮');
      updateCount();
    }
  });

  // Initial count / 初始计数
  setTimeout(updateCount, 300);
  console.log('Plugin loaded / 插件加载完成');
}

// Start plugin / 启动插件
logseq.ready(main).catch(console.error); 