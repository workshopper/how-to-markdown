文档中我们经常需要引用一些东西。有两种创建链接的方式： _内嵌式_和 _引用式_。

其实，创建链接的最简单方式就是直接在 MarkDown 文档中粘贴一个 URL 地址。 URL 地址或者在尖角号中的 URL 地址都会被翻译成超链接：

    http://www.example.com or <http://www.example.com>

**|>** http://www.example.com or <http://www.example.com>

### 内嵌式

MarkDown 语法中链接的写法如下：

    [text](href "alt")

上面表达式中，`text` 是超链接的文字，`href` 是你引用的资源（跟 HTML 中的 `href` 属性相同）,`alt` 是超链接的替代文本（与 HTML 中的 `alt` 属性相同）。超链接的文本可以带格式，也就是说，如果需要，你可以对超链接的文字进行强调。

下面是更实际的例子：

    [谷歌](https://www.google.com)
    [谷歌主页](https://www.google.com "谷歌主页")

## 引用式

有些时候，你可能在多个地方使用相同的链接。在多个地方使用同一个引用，引用式会非常方便。你可以这样编写链接：

    [NodeSchool Site][ref]
    [GitHub][1]
    [Remark parser]

    下面是这些链接所引用的资源：

    [ref]: http://www.nodeschool.io
    [1]: https://github.com/
    [Remark parser]: http://remark.js.org/

你可能已经注意到了，引用是大小写不敏感的，并且对于已经创建好的引用你可以使用任意多次，或者链接文字本身作为它的引用。

## 挑战

创建一个新文件，在文件第一行添加一个一级标题，标题的文字是 `Links`。

这里有一些文字：

    how-to-markdown is a workshopper that teaches you how to write Markdown.

请把这些文字复制到文件中，并且标记**'how-to-markdown'** 短语为引用式链接，引用自身。文件的后面添加一个相对链接，链接指向的资源是 `//git.io/how-to-markdown`。

完成后，请检查你的文件。

---
