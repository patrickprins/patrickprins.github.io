simpleCart({
    checkout: {
      type: "SendForm",
      url: "p.s.prins2@students.uu.nl"
    },
    
    cartStyle: "table"
    currency: "EUR"
    
    cartColumns: [
    { view: "image" , attr: "thumb" , label: false }
    { attr: "name" , label: "Productnaam" } ,
    { attr: "price" , label: "Prijs", view: 'currency' } ,
    { view: "decrement" , label: false , text: "-" } ,
    { attr: "quantity" , label: "Aantal" } ,
    { view: "increment" , label: false , text: "+" } ,
    { attr: "total" , label: "Totaalbedrag", view: 'currency' } ,
    { view: "remove" , text: "Verwijder" , label: false }
    ]
    
});

