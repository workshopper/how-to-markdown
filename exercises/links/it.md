Spesso abbiamo bisogno di fare un riferimento a qualcosa. Esistono due modi per creare collegamenti: _stile-in-linea_ e _stile-di-riferimento_.

A tal proposito, il modo più semplice per creare un collegamento è semplicemente incollare il collegamento in un file Markdown. Gli URL e gli URL tra parentesi angolari verranno automaticamente trasformati in collegamenti:

    http://www.example.com o <http://www.example.com>

**|>** http://www.example.com o <http://www.example.com>

### Stile in linea

I collegamenti in Markdown hanno questo formato:

    [text](href "alt")

Sopra, `text` è un testo che sarà un link,` href` è il tuo riferimento alla risorsa (simile all'attributo `href` in HTML),` alt` è un testo alternativo per il link (simile all'attributo `alt` in HTML). Il testo in un collegamento può avere qualsiasi formattazione, il che significa che puoi usare i tag per evidenziare il testo in Markdown nei tuoi collegamenti, se necessario.

Ecco altri esempi:

    [Google](https://www.google.com)
    [Google Homepage](https://www.google.com "Google Homepage")

## Stile di riferimento

A volte devi usare lo stesso link in luoghi diversi, quindi sarebbe conveniente usare un riferimento per tutti questi link. Quindi puoi farlo in questo modo:

    [NodeSchool Site][ref]
    [GitHub][1]
    [Remark parser]

    A seguire ecco come utilizzare gli stessi riferimenti:

    [ref]: http://www.nodeschool.io
    [1]: https://github.com/
    [Remark parser]: http://remark.js.org/

Come puoi notare sopra, i riferimenti non fanno distinzione tra maiuscole e minuscole e sei libero di usare numeri per creare riferimenti o utilizzare il testo del link stesso come riferimento.

## LA SFIDA

Nella parte superiore del file, aggiungi un'intestazione di primo livello con il testo `Links`.

Ecco qualche testo:

    how-to-markdown is a workshopper that teaches you how to write Markdown.

Copia questo testo nel nuovo file e contrassegna la frase **'how-to-markdown'** come link di riferimento con riferimento a se stesso. Di seguito nel tuo file, aggiungi un riferimento pertinente che farà riferimento a `//git.io/how-to-markdown`.

Al termine, verifica la soluzione.

---
