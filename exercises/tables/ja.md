テーブルはMarkdown仕様の一部ではありませんが、多くのパーサがそれらをサポートしています。 特に**GFM** はGitHubで使用されます。

Markdownのテーブルの作成は、ダッシュ (`-`) とパイプ(`|`)を使った描画のようになります。 また、コロンを使用して列を揃えることもできます。 

    | Head         | of       | Table         |
    | :----------- |:--------:| ------------: |
    | left-aligned | centered | right-aligned |
    | left-aligned | centered | right-aligned |

上記の表は次のように表示されます。

| Head         | of       | Table         |
| :----------- |:--------:| ------------: |
| left-aligned | centered | right-aligned |
| left-aligned | centered | right-aligned |

ここで重要なことがいくつかあります。

* 各ヘッダーセルを少なくとも3つのダッシュで区切る必要があります。 列を揃えるコロンはダッシュとしてカウントされます。
* 外側のパイプ (`|`) はオプションです。
* セルでインラインMarkdownを使用できます。

つまり、次のようなことができます。

    Markdown | Less | Pretty
    --- | --- | ---
    *Still* | `renders` | **nicely**

あまり綺麗な表に見えませんが、期待どおりに動作します。

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**

## 課題

この演習の名前を含む、第1レベルの見出しを追加します。

そして、この表を再現してください。

| Year | World population |
| :--: | ---------------- |
| 1960 | 3 Billion        |
| 1980 | 4 Billion        |
| 2000 | 6 Billion        |

 _Year_ 列は中央揃えにする必要があります。

終わったら解答を確認しましょう。

---
