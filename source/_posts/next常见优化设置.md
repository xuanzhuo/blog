---
title: next常见优化设置
date: 2019-10-16 14:19:49
tags: hexo
categories: [hexo,next]
---

## Next主题下载

进入hexo项目根目录

```
cd projectName
```

最新版下载

```bash
git clone https://github.com/theme-next/hexo-theme-next themes/next
```

指定版本( 例如v6.7.0 )

```bash
git clone --branch v6.7.0 https://github.com/theme-next/hexo-theme-next themes/next
```



## 应用主题

更改配置文件

```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next（此处改为next，默认landscape）
```



## 侧边栏设置

### 头像设置

```yml
# Sidebar Avatar
avatar:
  url: /images/avatar.gif #头像所在目录,注释掉则不显示
  rounded: true #圆形头像框
  opacity: 1 #透明度
  rotated: true #旋转动画
```

### 回到顶部及滚动百分比（阅读进度）

```yml
b2t: true #回到顶部
scrollpercent: true #阅读进度
```



## 文章设置

### 主页文章仅显示节选部分

```yml
auto_excerpt:
  enable: true #默认不开启，文章展开全部
  length: 150

```

### 字数统计

安装依赖

```bash
npm i hexo-symbols-count-time
```

安装完成无需配置即可生效（不生效重启hexo项目）

## 添加宠物

安装依赖

```bash
npm install --save hexo-helper-live2d
```

安装宠物模型

```bash
npm install --save live2d-widget-model-shizuku
```

更改配置文件（站点目录与主题目录都可以，二选一），添加以下内容

```yml
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  log: false
  model:
    use: live2d-widget-model-shizuku
  display:
    position: right
    width: 150
    height: 300
  mobile:
    show: true
```

