---
title: next常见优化设置
date: 2019-10-16 14:19:49
tags: hexo
categories: [hexo,next]
---

### 添加宠物

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

