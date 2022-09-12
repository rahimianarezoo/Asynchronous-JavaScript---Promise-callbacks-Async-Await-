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

order(1000, () => console.log(stocks.bread[2]))