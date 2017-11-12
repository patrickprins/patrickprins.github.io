simpleCart({
    checkout: {
      type: "SendForm",
      url: "p.s.prins2@students.uu.nl",
      method: "POST",
      success: "https://patrickprins.github.io/einde-studie2.html",
        extra_data: {
        storename: "study2"
    }
    
    },
    
    cartStyle: "table",
    currency: "EUR",
    
    cartColumns	: [
                { view: "image", attr: "thumb", label: false},
                { attr: "name", label: "Product" },
                { attr: "price", label: "Prijs", view: 'currency' },
                { view: "decrement", label: false },
                { attr: "quantity", label: "Aantal" },
                { view: "increment", label: false },
                { attr: "total", label: "Bedrag", view: 'currency' },
                { view: "remove", text: "Verwijder product", label: false }
				]
});

