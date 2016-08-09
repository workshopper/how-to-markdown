If you are a developer, then you have heard about **GitHub**. GitHub is an important part of the community. Why are we talking about it? That's because GitHub is a big customer of Markdown. Even more, GitHub uses its own version of the Markdown syntax that provides an additional set of useful features. This version of markdown is called _GitHub Flavored Markdown_ or simply _GFM_.

From previous exercises you are already familiar with syntax highlighting in blocks of code and tables. However, there are some other features which may be helpful for you.

### Task lists

To create a task list you should create an ordered or unordered list. Then you can use squared brackets that will be turned into checkboxes. An `x` between them makes the item marked as completed. Example:

    - [x] [links](#), **formatting**, and <del>tags</del> supported
    - [x] list syntax required (any unordered or ordered list supported)
    - [x] this is a complete item
    - [ ] this is an incomplete item

- [x] [links](#), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

### SHA references

Any reference to a commit’s _SHA-1 hash_ will be automatically converted into a link to that commit on GitHub:

    4ad0c921206dec4d1518f4aeead932e7617f934f
    denysdovhan/how-to-markdowkn@4ad0c921206dec4d1518f4aeead932e7617f934f

### Issue and Pull request references

Any number that refers to an Issue or Pull Request will be automatically converted into a link:

    #1
    denysdovhan/how-to-markdowkn#1

### Username @mentions

Typing an `@` symbol, followed by a _username_, will notify that person to come and view the comment. This is called a **@mention**, because you’re mentioning the individual. You can also mention **@teams** within an organization.

### Emoji

It's a funny part, but it's still important. GFM also supports _emoji_!

✨ 🐫 💥

To see a list of every emoji that is supported, check out the [Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/).

## THE CHALLENGE

Add a first-level heading that contains `GFM`.

Please create a to-do list with these tasks:

- hey
- ho
- let's go

Then mark item `ho` as completed.

Verify your solution.

---
