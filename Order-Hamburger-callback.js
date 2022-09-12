//    #1 Place an order                -> 2
//    #2 Choose the meat               -> 2
//    #3 Grill the meat                -> 1
//    #4 Add prefred sauce on top      -> 1
//    #5 Pick the bread                -> 2
//    #6 pick the fries and drink      -> 3
//    #7 Serve the hamburger           -> 2 


let stocks = {
    meat : ["Beef", "Fish", "Chicken"],
    fries : ["funky fries", "home made", "butter with herbs"],
    bread : ["Ciabatta", "Cornbread", "Baguette"],
    sauce : ["Mayo", "Senf", "Home made ketchup"],
    drink : ["coca", "water", "sprite", "coca-zero"]
}


let order = (meat, call_production) => {
    setTimeout( () => {
        console.log(`${stocks.meat[meat]} was selected`);
        call_production(meat);
    }, 2000)
    
};

let production = (meat) => {
    setTimeout( () => {
        console.log('You just ordered the meat and prepration is started now!');
    
        setTimeout( () => {
            console.log(`Your${stocks.meat[meat]} is grilling.`);

            setTimeout( () => {
                console.log(`${stocks.sauce[0]} is added on top.`);

                setTimeout( () => {
                    console.log(`${stocks.bread[0]} is selected for your bread.`);

                    setTimeout( () => {
                        console.log(`${stocks.fries[2]} and ${stocks.drink[2]} for your drink were selected.`);

                        setTimeout(() => {
                            console.log("Your order is ready to serve! Bon Apetit")
                        }, 2000);

                    },3000);

                }, 2000);

            }, 1000);

        }, 1000);

    },2000);
};

order(0, production);

