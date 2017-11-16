simpleCart.currency({
    code: "ERO" ,
    name: "Euro met decimaal" ,
    symbol: " €" ,
    delimiter: " " , 
    decimal: "," , 
    after: false ,
    accuracy: 2
});

simpleCart({
    checkout: {
        type: "SendForm",
        url: "sendcart.php" ,
        method: "POST" , 
        success: "patrickprins.nl/outro2.html" , 
        cancel: "patrickprins.nl/checkout.html" 
    },
    
    cartStyle: "table",
    currency: "ERO",
    
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

