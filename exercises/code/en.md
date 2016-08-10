Code is a part of Markdown spec. There are two ways to add code in your document: inline code and blocks of code.

### Inline code

To mark a part of text as code, just wrap it in back-ticks ( ``` ` ```). Here is an example:

    Inline code transforms into `<code>` html-tag.

**|>** Inline code transforms into `<code>` html-tag.

### Blocks of code

Blocks of code are either fenced by lines with three back-ticks ( ``` ``` ```), or are indented with four spaces.

Syntax highlighting isn't part Markdown's spec. However, many renderers support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer.

    ```js
    console.log('This is JavaScript syntax highlighting!');
    ```

    ```
    No language indicated, so no syntax highlighting.
    ```

        Block of code with indentation.

These two blocks will be rendered like so:

```js
console.log('This is JavaScript syntax highlighting!');
```

```
No language indicated, so no syntax highlighting.
```

    Block of code with indentation.

We recommend to use the fenced code blocks instead of blocks with indentation, because they support syntax highlighting.

## THE CHALLENGE

Add  `Code` as the first-level heading in your file.

Add this JavaScript code with relevant syntax highlighting:

```js
const add = (a, b) => a + b;
```

Don't forget to verify your solution.

---
