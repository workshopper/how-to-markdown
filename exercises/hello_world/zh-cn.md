     _                        _             _  _   _
    | |__   _____      __    | |_ ___      |  V  | | |
    | '_ \ / _ \ \ /\ / /____| __/ _ \ ____| |V| |_| |_
    | | | | (_) \ V  V /_____| || (_) |____| | | |\   /
    |_| |_|\___/ \_/\_/       \__\___/     |_| |_| \_/


欢迎使用 **how-to-markdown** 教程！

## Markdown 是什么？

首先，我们需要了解 MarkDown 到底是什么。

**Markdown** - 是一种轻量的、易于书写的、纯文本格式的语法，用来在互联网上书写带有格式的文档。Markdown 用来控制文档的样式，包括：文字的粗体、斜体，在文档中添加图片，创建列表，等等。

Markdown 是由 [John Gruber](http://daringfireball.net/) 与 [Aaron Swartz](http://www.aaronsw.com/) 在 2004 年合作发明的。

Markdown 文档可以在最简单的文本编辑器中编写。可以很方便的把文本转换成 HTML 网页。当你编写 Markdown 文档时，你需要把文件保存成 `.md` 或 `.markdown` 扩展名。

你可以在几乎所有的地方使用 Markdown：

* **StackOverflow** 使用 Markdown 来发帖或者评论。
* **GitHub** 使用 Markdown 提交 issues 讨论问题或者 pull requests。
* **Reddit** 使用 Markdown 来格式化评论。
* **Slack**, **Gitter** 和其他的 IM（即时通讯工具）使用 Markdown 来格式化消息。
* **Jekyll**, **Octopress**, **Hexo** 以及其他静态网站工具使用 Markdown 来发布网站内容。
* **GitBook** 使用 Markdown 来编写电子书。
* 很多人用 Markdown 来写博客日志。
* 很多开源项目的文档用 Markdown 来编写。
* **how-to-markdown** 也用 Markdown 来格式化练习题。

因此，掌握 MarkDown 语法是现代开发人员的一项重要技能。这就是为什么你需要学习她的理由。

### 如何得到 Markdown？

并不存在一个明确的 Markdown 标准规范。Markdown 只是如何编写可读性强又具有格式的文档的一系列通用规则。

因为 Markdown 是一个精炼的标记语言，在文本编辑工具中很容易阅读和编写，所以，并不需要为编写 MarkDown 文档设计特殊的文字编辑软件。然而，只有少部分文本编辑工具能提供文档的样式预览功能。

超过一打的编程语句实现了 MarkDown（包括：_JavaScript_, _Ruby_, _Python_, _PHP_, _Perl_, 等等）。此外，很多平台和框架支持  Markdown。例如，很多主流的博客平台都支持 Markdown 插件。

### 如何使用本教程？

本教程很容易使用。大部分情况只需要使用三个命令：

* `how-to-markdown run file.md` 将启动一个本地服务 `http://localhost:3000/` 来预览 `file.md`。
* `how-to-markdown verify file.md` 来检查你的文件是否正确。
* `how-to-markdown help` 显示一个帮助信息。

## 挑战

你的第一个挑战非常简单。只需要新建一个文件（例如：`touch.md`）并且添加一行文字：

    Hello, world!

如果已经完成，请运行 `how-to-markdown verify` 来检查你的成果或者运行 `how-to-markdown run` 在浏览器中预览你的文件。

---
