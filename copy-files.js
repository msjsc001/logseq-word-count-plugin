const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const filesToCopy = ['package.json', 'README.md', 'icon.svg', 'LICENSE'];

// 确保 dist 目录存在
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 复制文件
filesToCopy.forEach(file => {
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(distDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to ${distDir}`);
  } else {
    console.warn(`Warning: ${file} not found, skipping copy.`);
  }
});

// 修改 dist/package.json
const distPackageJsonPath = path.join(distDir, 'package.json');
if (fs.existsSync(distPackageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(distPackageJsonPath, 'utf-8'));
    packageJson.main = 'index.html';
    fs.writeFileSync(distPackageJsonPath, JSON.stringify(packageJson)); // 使用更简单的 JSON.stringify
    console.log(`Modified ${distPackageJsonPath}: set main to "index.html"`);
  } catch (error) {
    console.error(`Error modifying ${distPackageJsonPath}:`, error);
    process.exit(1); // 退出并报错
  }
} else {
  console.error(`Error: ${distPackageJsonPath} not found after copy.`);
  process.exit(1); // 退出并报错
}

// 修改 dist/index.html 中的 JS 引用路径
const distIndexHtmlPath = path.join(distDir, 'index.html');
if (fs.existsSync(distIndexHtmlPath)) {
  try {
    let indexHtmlContent = fs.readFileSync(distIndexHtmlPath, 'utf-8');
    // 使用正则表达式查找并替换 JS 引用路径
    indexHtmlContent = indexHtmlContent.replace(/<script type="module" src="\/(.+?)"><\/script>/, '<script type="module" src="./$1"></script>');
    fs.writeFileSync(distIndexHtmlPath, indexHtmlContent);
    console.log(`Modified ${distIndexHtmlPath}: changed JS path to relative.`);
  } catch (error) {
    console.error(`Error modifying ${distIndexHtmlPath}:`, error);
    process.exit(1); // 退出并报错
  }
} else {
  console.error(`Error: ${distIndexHtmlPath} not found after build.`);
  process.exit(1); // 退出并报错
}
