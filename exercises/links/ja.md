私たちはしばしば、何かを参考にする必要があります。 リンクを作成するには、_inline-style_ と _reference-style_ の2つの方法があります。

ところで、リンクを作成する最も簡単な方法はリンクをMarkdownファイルに貼り付けることです。山括弧で囲まれたURLとURLは自動的にリンクに変わります.


    http://www.example.com or <http://www.example.com>

**|>** http://www.example.com or <http://www.example.com>

### Inline style

Markdownのリンクは次の形式です。

    [text](href "alt")


上記の `text`はリンクとなるテキストで、`href`はリソースへの参照（HTMLの `href`属性に似ています）、`alt`はリンクの代替テキストです（ `alt`属性に似ていますHTML）。リンク内のテキストには書式が設定されているため、必要に応じてリンク内で強調を使用することができます。


より現実的な例がこちらです。

    [Google](https://www.google.com)
    [Google Homepage](https://www.google.com "Google Homepage")

## Reference style

場合によっては、同じリンクを別の場所で使用する必要があるため、これらのリンクすべてに対して1つの参照を使用すると便利です。そのときは、こうすることが出来ます。


    [NodeSchool Site][ref]
    [GitHub][1]
    [Remark parser]

    
    参照リンクがついているいくつかのテキスト：

    [ref]: http://www.nodeschool.io
    [1]: https://github.com/
    [Remark parser]: http://remark.js.org/

上記のように、参照は大文字と小文字を区別しません。参照を作成するために数値を使用するか、リンクテキスト自体を参照として使用することは自由です。

## 課題

ファイルの一番上に、第一レベル見出しとして `Links`テキストを追加します。

ここにいくつかのテキストがあります：

    how-to-markdown is a workshopper that teaches you how to write Markdown.

このテキストを新しいファイルにコピーして、**'how-to-markdown'** フレーズをリファレンススタイルのリンクとしてマークしてください。あなたのファイルの下に `//git.io/how-to-markdown`を参照するリファレンスを追加してください。


完了したら、解答を確認してください。

---
