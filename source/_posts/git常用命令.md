---
title: git常用命令
date: 2019-10-16 22:13:58
tags: git
categories: git
---

## 前言

​	此篇主要收集了一些git常用命令，方便查阅，参阅了廖雪峰老师的[git教程]( https://www.liaoxuefeng.com/wiki/896043488029600 )



## 创建版本库

 `git init`命令使目录变成Git可以管理的仓库 

```bash
git init
```

## 中文乱码

windows

```
git config --global core.quotepath false          # 显示 status 编码
git config --global gui.encoding utf-8            # 图形界面编码
git config --global i18n.commit.encoding utf-8    # 提交信息编码
git config --global i18n.logoutputencoding utf-8  # 输出 log 编码
set LESSCHARSET=utf-8 #最后一条命令是因为 git log 默认使用 less 分页，所以需要 bash 对 less 命令进行 utf-8 编码
```

