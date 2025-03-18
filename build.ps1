# 清理旧文件
Write-Host "正在清理旧文件..." -ForegroundColor Cyan
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue

# 安装依赖
Write-Host "正在安装依赖..." -ForegroundColor Cyan
npm install

# 构建项目
Write-Host "正在构建项目..." -ForegroundColor Cyan
npm run build

Write-Host "构建完成！" -ForegroundColor Green
Write-Host "请在 Logseq 中重新加载插件" -ForegroundColor Yellow 