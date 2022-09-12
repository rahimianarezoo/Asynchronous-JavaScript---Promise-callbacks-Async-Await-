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

    } catch(error) {
        console.log("customer left", error)
    } finally {
        console.log("We are close now. Thanks for choosing us! we hope to see you again soon.")
    }
}

kitchen();