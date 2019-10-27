Se sei uno sviluppatore, hai sentito parlare di **GitHub**. GitHub è una parte importante della comunità. Perché ne stiamo parlando? Perché GitHub è un grande utilizzatore di Markdown. Ancora di più, GitHub utilizza una propria sintassi di Markdown che fornisce un set aggiuntivo di funzioni utili. Questa versione di markdown si chiama _GitHub Flavored Markdown_ o semplicemente _GFM_.

Grazie agli esercizi precedenti hai già familiarità con l'evidenziazione della sintassi in blocchi di codice e tabelle. Tuttavia, ci sono alcune altre funzionalità che potrebbero esserti utili.

### Elenchi di attività

Per creare un elenco di attività è necessario creare un elenco ordinato o non ordinato. Quindi è possibile utilizzare parentesi quadre che verranno trasformate in caselle di controllo. Una `x` al loro interno rende l'oggetto contrassegnato come completato. Esempio:

    - [x] [link](#), **formattazione**, e <del>tag</del> supportati
    - [x] sintassi dell'elenco richiesta (qualsiasi elenco non ordinato o ordinato supportato)
    - [x] questo è un item completato
    - [ ] questo è un item non completato

- [x] [link](#), **formattazione**, e <del>tag</del> supportati
- [x] sintassi dell'elenco richiesta (qualsiasi elenco non ordinato o ordinato supportato)
- [x] questo è un item completato
- [ ] questo è un item non completato

### Riferimenti SHA

Qualsiasi riferimento all'hash \_SHA-1 di un commit verrà automaticamente convertito in un link a quel commit su GitHub:

    4ad0c921206dec4d1518f4aeead932e7617f934f
    denysdovhan/how-to-markdowkn@4ad0c921206dec4d1518f4aeead932e7617f934f

### Riferimenti a Issue e Pull request

Qualsiasi numero che si riferisce a Issue o Pull Request verrà automaticamente convertito in un link:

    #1
    denysdovhan/how-to-markdowkn#1

### Username @mentions

Digitando il simbolo `@`, seguito da un _username_, notificherai a quella persona di visualizzare il commento. Ciò viene chiamato **@mention**, perché stai citando la persona. Puoi anche menzionare **@teams** all'interno di un'organizzazione.

### Emoji

È una parte divertente, ma è anche importante. GFM supporta anche _emoji_!

✨ 🐫 💥

Per vedere un elenco di tutte le emoji supportate, dai un'occhiata a [Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/).

## LA SFIDA

Aggiungi un'intestazione di primo livello che contiene`GFM`.

Crea un elenco di cose da fare con queste attività:

- hey
- ho
- let's go

Quindi contrassegnare l'elemento `ho` come completato.

Verifica la soluzione.

---
