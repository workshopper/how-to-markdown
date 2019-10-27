Il codice fa parte delle specifiche Markdown. Esistono due modi per aggiungere codice nel documento: codice inline e blocchi di codice.

### Codice Inline

Per contrassegnare una parte del testo come codice, basta racchiuderlo con i back-ticks ( `` ` ``). Ecco un esempio:

    Il codice inline si trasforma nel tag html `<code>`.

**|>** Il codice inline si trasforma nel tag html `<code>`.

### Blocchi di codice

I blocchi di codice sono racchiusi in tre back-ticks ( `` ```), o sono rientrati con quattro spazi.

L'evidenziazione della sintassi non fa parte delle specifiche di Markdown. Tuttavia, molti renderer supportano l'evidenziazione della sintassi. Quali lingue sono supportate e come devono essere scritti quei nomi delle lingue varieranno da renderer a renderer.

    ```js
    console.log('Questa è l\'evidenziazione della sintassi JavaScript!');
    ```

    ```
    Nessun linguaggio indicato, quindi nessuna evidenziazione della sintassi.
    ```

        Blocco di codice con rientro.

Questi due blocchi saranno resi in questo modo:

```js
console.log("Questa è l'evidenziazione della sintassi JavaScript!");
```

```
Nessun linguaggio indicato, quindi nessuna evidenziazione della sintassi.
```

    Blocco di codice con rientro.

Si consiglia di utilizzare i blocchi di codice racchiusi nei back-ticks anziché i blocchi con rientro, poiché supportano l'evidenziazione della sintassi.

## LA SFIDA

Aggiungi `Code` come intestazione di primo livello nel tuo file.

Aggiungi questo codice JavaScript con l'evidenziazione della sintassi pertinente:

```js
const add = (a, b) => a + b;
```

Non dimenticare di verificare la tua soluzione.

---
