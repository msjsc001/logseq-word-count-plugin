# Logseq Word Count Plugin / Logseq 字数统计插件

A simple and practical Logseq plugin for counting words in your current page. Supports counting both Chinese and English text.

一个简单而实用的 Logseq 插件，用于统计当前页面的字数。支持中英文混合统计。

![工具栏预览](./docs/toolbar-preview.png)

## Features / 功能特点

- Real-time word counting / 实时字数统计
- Support for mixed Chinese and English text / 支持中英文混合统计
- Clean and simple user interface / 简洁的用户界面
- Lightweight design that doesn't affect editor performance / 轻量级设计，不影响编辑器性能
- Automatic counting when switching pages / 切换页面时自动统计

## How to Use / 使用方法

1. After enabling the plugin in Logseq, you can: / 在 Logseq 中启用插件后，你可以：
   - Use the command `/字数统计` to count words in the current page / 使用命令 `/字数统计` 统计当前页面字数
   - Check the toolbar where the word count is displayed / 在工具栏查看字数统计显示

2. The count includes: / 统计包括：
   - Chinese characters / 中文字符
   - English words / 英文单词
   - Numbers / 数字

## Installation / 安装方法

### Install from Marketplace / 从插件市场安装

1. Open the plugin marketplace in Logseq / 在 Logseq 中打开插件市场
2. Search for "Word Count" / 搜索 "Word Count"
3. Click install / 点击安装

### Manual Installation / 手动安装

1. Download the latest release / 下载最新的发布版本
2. Extract the downloaded file / 解压下载的文件
3. Click "Load unpacked plugin" in Logseq / 点击 Logseq 中的 "加载解压的插件"
4. Select the extracted folder / 选择解压后的文件夹

## Development / 开发

本项目使用 Parcel 进行构建。

## 发布准备 (Publishing Preparation)

根据 Logseq 插件的最佳实践，在构建 (`npm run build`) 之后，如果你需要手动加载未打包的插件进行测试，或者准备发布到 Marketplace，你需要对 `dist` 目录进行以下处理：

1.  **复制文件:** 将以下文件从项目根目录复制到 `dist` 目录中：
    *   `package.json`
    *   `README.md`
    *   `icon.svg` (或你的图标文件)
    *   `LICENSE` (如果存在)
2.  **修改 `dist/package.json`:** 打开位于 `dist` 目录下的 `package.json` 文件，找到 `"main"` 字段，并将其值修改为 `"index.html"`。
    ```json
    "main": "index.html"
    ```
3.  **测试:** 使用 Logseq 的 "Load unpacked plugin" 功能加载修改后的 `dist` 文件夹进行测试。
4.  **打包 (可选):** 如果要创建 `.zip` 包进行分发，请将 **`dist` 目录的 *内容***（而不是 `dist` 目录本身）压缩成 `.zip` 文件。
