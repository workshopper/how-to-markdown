Tables are not a part of Markdown spec, but a lot of parsers support them. Especially **GFM** which are used on GitHub.

The creation of tables in Markdown looks exactly like drawing using dashes (`-`) and pipes (`|`). Also, you may use colons to align columns. For example:

    | Head         | of       | Table         |
    | ------------ |:--------:| ------------ :|
    | left-aligned | centered | right-aligned |
    | left-aligned | centered | right-aligned |

The table above will be rendered like this:

| Head         | of       | Table         |
| ------------ |:--------:| ------------ :|
| left-aligned | centered | right-aligned |
| left-aligned | centered | right-aligned |

There are a few important things here:

* There must be at least 3 dashes separating each header cell. Colons to align columns count as dashes.
* The outer pipes (`|`) are optional.
* You can use inline Markdown in cells.

That means you can do something like this:

    Markdown | Less | Pretty
    --- | --- | ---
    *Still* | `renders` | **nicely**

It doesn't looks so nice, but it works as expected:

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**

## THE CHALLENGE

Add a first-level heading that contains the name of this exercise.

Reproduce this table:

| Year | World population |
| :--: | ---------------- |
| 1960 | 3 Billion        |
| 1980 | 4 Billion        |
| 2000 | 6 Billion        |

The _Year_ column should be centered.

---
