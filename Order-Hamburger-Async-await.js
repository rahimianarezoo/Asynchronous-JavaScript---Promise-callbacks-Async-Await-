let stocks = {
    meat : ["Beef", "Fish", "Chicken"],
    fries : ["funky fries", "home made", "butter with herbs"],
    bread : ["Ciabatta", "Cornbread", "Baguette"],
    sauce : ["Mayo", "Senf", "Home made ketchup"],
    drink : ["coca", "water", "sprite", "coca-zero"]
};

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("our shop is closed"));
        }
    });
}
async function kitchen() {
    try {
        await time(2000);
        console.log(`Your order is placed now`);
        await time(2000);
        console.log(`${stocks.meat[2]} is selected as your meat`);
        await time(1000);
        console.log(`Your ${stocks.meat[1]} is grilling.`);
        await time(1000);
        console.log(`${stocks.sauce[0]} is added on top.`);
        await time(2000);
        console.log(`${stocks.bread[0]} is selected for your bread.`);
        await time(3000);
        console.log(`${stocks.fries[2]} and ${stocks.drink[2]} for your drink were selected.`);
        await time(2000);
        console.log("Your order is ready to serve! Bon Apetit");
    } catch(error) {
        console.log("customer left", error)
    } finally {
        console.log("We are close now. Thanks for choosing us! we hope to see you again soon.")
    }
}

kitchen();