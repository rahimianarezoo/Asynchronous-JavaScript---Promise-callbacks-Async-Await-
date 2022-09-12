let stocks = {
    meat : ["Beef", "Fish", "Chicken"],
    fries : ["funky fries", "home made", "butter with herbs"],
    bread : ["Ciabatta", "Cornbread", "Baguette"],
    sauce : ["Mayo", "Senf", "Home made ketchup"],
    drink : ["coca", "water", "sprite", "coca-zero"]
};

let is_shop_open = true;

let order = (time, work) => {

    return new Promise( (resolve,promise) => {

        if (is_shop_open) {
            setTimeout( () => {
                resolve(work());
            }, time)
        } else {
            reject( console.log("our shop is closed"))
        }
    })
}

order(2000, () => console.log(`Your order is placed now`))
    .then( ()=> {
        return order(2000, () => console.log(`${stocks.meat[2]} is selected as your meat`));
    })

    .then( () => {
        return order(1000, () => console.log(`Your ${stocks.meat[1]} is grilling.`));
    })

    .then( () => {
        return order(1000, () => console.log(`${stocks.sauce[0]} is added on top.`));
    })

    .then( () => {
        return order(2000, () => console.log(`${stocks.bread[0]} is selected for your bread.`));
    })
    .then( () => {
        return order(3000, () => console.log(`${stocks.fries[2]} and ${stocks.drink[2]} for your drink were selected.`));
    })
    .then( () => {
        return order(3000, () => console.log("Your order is ready to serve! Bon Apetit"));
    })
    .catch( () => {
        console.log("customer left the shop")
    })
    .finally( () => {
        console.log("Thanks for choosing us! we hope to see you again soon.")
    })