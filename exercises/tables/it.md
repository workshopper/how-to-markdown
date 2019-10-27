Le tabelle non fanno parte delle specifiche Markdown, ma molti parser le supportano. Soprattutto **GFM** utilizzato su GitHub.

La creazione di tabelle in Markdown assomiglia esattamente al disegno usando trattini (`-`) e pipe (` | `). Inoltre, è possibile utilizzare due punti per allineare le colonne. Per esempio:

    | Head         | of       | Table         |
    | ------------ |:--------:| ------------ :|
    | left-aligned | centered | right-aligned |
    | left-aligned | centered | right-aligned |

La tabella sopra sarà resa in questo modo:

| Head         | of       | Table         |
| ------------ |:--------:| ------------ :|
| left-aligned | centered | right-aligned |
| left-aligned | centered | right-aligned |

Presta attenzione ai seguenti punti:

* Devono essere presenti almeno 3 trattini che separano ciascuna cella di intestazione. I due punti per allineare le colonne contano come trattini.
* Le pipe esterne (`|`) sono opzionali.
* Puoi utilizzare Markdown in linea nelle celle.

Ciò significa che puoi fare qualcosa del genere:

    Markdown | Less | Pretty
    --- | --- | ---
    *Still* | `renders` | **nicely**

Non sembra così bello, ma funziona come previsto:

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**

## LA SFIDA

Aggiungi un'intestazione di primo livello che contenga il nome di questo esercizio.

Riproduci questa tabella:

| Year | World population |
| :--: | ---------------- |
| 1960 | 3 Billion        |
| 1980 | 4 Billion        |
| 2000 | 6 Billion        |

La colonna _Year_ dovrebbe essere centrata.

---
