---
title: App Inventor教程创作
layout: tutorial
---

# App Inventor教程创作

## 介绍

您可以使用Markdown编写App Inventor教程。 本文档简要介绍了如何使用Markdown创建教程。

## 创建标题

手风琴由1级标题组成。 您可以通过两种不同的方式进行指示：

```markdown
# 标头
```

要么

```markdown
标头
===
```

## 创建教程页面

通过在1级标题下创建2级标题来添加教程页面：

```markdown
# 标头

## 第1页标题

第1页内容

## 第2页标题

第2页内容
```

如果您喜欢标题的下划线方法，则可以使用`-`：

```markdown
标头
===

第1页标题
---

第1页内容

第2页标题
---

第2页内容
```

## 添加方法

对于包含有关连接随播广告的信息的教程，您可以使用此技术添加操作方法：

```markdown
# 连接到应用

<howto id="connect_app"></howto>
```

## 添加提示

您可以使用以下技术向本教程添加提示：

```markdown
<hint markdown="block" title="给我一个提示">

提示内容

</hint>
```

您还可以嵌套提示：

```markdown
<hint markdown="block" title="给我一个提示">

提示内容

<hint markdown="block" title="检查我的解决方案">

解决方案内容

</hint>

</hint>
```

## 有序列表

有序列表是使用数字创建的：

```markdown
1. 项目1
2. 项目2
3. 项目3
```

如果您需要更多高级功能（例如起始值），则还可以使用HTML：

```markdown
<ol start="4">
<li>项目4</li>
<li>项目5</li>
</ol>
```

## 无序列表

通过使用某些符号（如项目符号）来使用无序列表：

```markdown
* 第一
* 第二
* 第三
```

您还可以嵌套列表：

```markdown
* 第一
    * 子项目
    * 子项目
    * 子项目
* 第二
```

## 链接和图片

通过将链接的文本放在方括号 `[]` 中并将链接目标放在括号 `()` 中来创建链接：

```markdown
[转到App Inventor](http://ai2.appinventor.mit.edu)
```

要创建图像，请使用链接语法并将感叹号（！）放在前面：

```markdown
![辅助功能的替代文字)(http://link/to/image.png)
```

如果要制作图像以便放大图像，请在图像包含文本的末尾添加 `{:.enlargeImage}`。

```markdown
![大形象](image.png){:.enlargeImage}
```
