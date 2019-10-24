---
title: '元素坐标之鼠标事件对象pageX,clientX,screenX(3)'
date: 2019-10-18 16:45:53
tags: [js]
categories: [js,元素坐标(兼容性ie9+、火狐26+)]
---

## screenX

只读属性

返回的相对于屏幕（以屏幕左上角为原点）的水平（x）坐标，单位像素

### 语法

```js
var screenX = event.screenX
```

## screenY

只读属性

返回的相对于屏幕（以屏幕左上角为原点）的垂直（y）坐标，单位像素

### 语法

```js
var screenY = event.screenY
```



## clientX

只读属性

返回的相对于浏览器视口（以浏览器视口左上角为原点）的水平（x）坐标，单位像素

```js
var clientX = event.clientX
```

## clientY

只读属性

返回的相对于浏览器视口（以浏览器视口左上角为原点）的垂直（y）坐标，单位像素

```js
var clientY = event.clientY
```



## pageX

只读属性

返回的相对于整个文档（以文档左上角为原点）的水平（x）坐标，单位像素

考虑任何页面的水平方向上的滚动  

### 语法

```js
var pageX = event.pageX
```

## pageY

只读属性

返回的相对于整个文档（以文档左上角为原点）的垂直（y）坐标，单位像素

考虑任何页面的水平方向上的滚动  

### 语法

```js
var pageY = event.pageY
```



## 文字不直观，来张图

{% asset_img 鼠标事件对象坐标属性.png 鼠标事件对象坐标属性 %}

测试：[测试demo]( https://xuanzhuo.github.io/blog-post-code/js/coordinate/event-about.html ) [测试代码]( https://github.com/xuanzhuo/xuanzhuo.github.io/blob/master/blog-post-code/js/coordinate/event-about.html )

