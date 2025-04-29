// 导入所需的库
import '@logseq/libs';
import { BlockEntity } from '@logseq/libs/dist/LSPlugin.user'; // 导入 BlockEntity 类型

// 定义正则表达式 (移到全局或函数内部)
const CHINESE_CHARS = /[\u4e00-\u9fa5]/g;
const ENGLISH_WORDS = /\b[a-zA-Z]+\b/g;
const NUMBERS = /\d+/g;

// 更新字数统计的函数
const updateWordCount = async () => {
  console.log('[updateWordCount] Function called'); // 添加日志
  try {
    console.log('[updateWordCount] Getting current page...'); // 添加日志
    const page = await logseq.Editor.getCurrentPage();
    console.log('[updateWordCount] Current page:', page); // 添加日志
    if (!page) {
      console.log('[updateWordCount] No current page, setting count to 0.'); // 添加日志
      // 如果没有当前页面（例如在日志页面），直接更新 UI 为 0
      logseq.App.registerUIItem('toolbar', {
        key: 'word-count',
        template: `
          <a style="display: flex; align-items: center; font-size: 14px; margin: 0 5px; cursor: default;">
            <span style="margin-right: 4px;">✏️</span>
            <span>0</span>
          </a>
        `
      });
      console.log('[updateWordCount] Updated UI to 0 words.'); // 添加日志
      return;
    }

    console.log(`[updateWordCount] Getting blocks for page: ${page.name}`); // 添加日志
    const blocks: BlockEntity[] = await logseq.Editor.getPageBlocksTree(page.name);
    console.log('[updateWordCount] Got blocks:', blocks.length); // 添加日志
    let total = 0; // 在 try 块顶部声明一次即可

    // 递归统计字数
    const countBlock = (block: BlockEntity) => {
      if (block.content) {
        const text = block.content.replace(/[#*`~\[\]()]/g, '').trim();
        total += (text.match(CHINESE_CHARS) || []).length;
        total += (text.match(ENGLISH_WORDS) || []).length;
        total += (text.match(NUMBERS) || []).length;
      }
      if (block.children && Array.isArray(block.children)) {
         (block.children as BlockEntity[]).forEach(countBlock);
      }
    };

    console.log('[updateWordCount] Starting block iteration...'); // 添加日志
    blocks.forEach(countBlock);
    console.log('[updateWordCount] Block iteration finished. Total:', total); // 添加日志

    // 更新显示：重新注册 UI 项
    logseq.App.registerUIItem('toolbar', {
      key: 'word-count',
      template: `
        <a style="display: flex; align-items: center; font-size: 14px; margin: 0 5px; cursor: default;">
          <span style="margin-right: 4px;">✏️</span>
          <span>${total}</span>
        </a>
      `
    });
    console.log(`[updateWordCount] Updated UI to ${total} words.`); // 添加日志
    console.log('[updateWordCount] Function finished successfully.'); // 添加日志

  } catch (err) {
    console.error('字数统计错误:', err);
    // 出错时更新 UI 显示错误
    logseq.App.registerUIItem('toolbar', {
      key: 'word-count',
      template: `
        <a style="display: flex; align-items: center; font-size: 14px; margin: 0 5px; cursor: default;">
          <span style="margin-right: 4px;">✏️</span>
          <span>错误</span>
        </a>
      `
    });
  }
};


// 主函数
const main = () => {
  console.log('Word Count Plugin Loaded');

  // 初始注册工具栏按钮 (使用 span，但不依赖 ID)
  logseq.App.registerUIItem('toolbar', {
    key: 'word-count',
    template: `
      <a style="display: flex; align-items: center; font-size: 14px; margin: 0 5px; cursor: default;">
        <span style="margin-right: 4px;">✏️</span>
        <span>0</span>
      </a>
    `
  }); // 正确结束 registerUIItem

  // 移除点击事件处理
  // logseq.provideModel({ ... });

  // 恢复自动更新监听器
  // 监听路由变化 (切换页面)
  logseq.App.onRouteChanged(({ path }) => {
    console.log('[onRouteChanged] Route changed, updating count.'); // 添加日志
    // 延迟一点执行，确保页面内容加载完成
    setTimeout(updateWordCount, 100);
  });

  // 监听数据库变化 (内容修改)
  // 注意: onChanged 可能会频繁触发，需要进行防抖处理以避免性能问题
  let debounceTimer: any = null; // 使用 any 类型避免 Timeout 错误
  logseq.DB.onChanged(({ blocks }) => {
    console.log('[onChanged] DB changed, scheduling update.'); // 添加日志
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      console.log('[onChanged] Debounced timer fired, updating count.'); // 添加日志
      updateWordCount();
    }, 300); // 缩短延迟为 300ms
  });

  // 初始加载时更新一次
  console.log('[main] Scheduling initial update.'); // 添加日志
  setTimeout(updateWordCount, 500); // 延迟一点执行，确保 UI 渲染完成
}

// 启动插件
logseq.ready(main).catch(console.error); // 添加错误捕获
