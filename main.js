var price = 0;

menu_list_array = [
    pizza0 = {
        name: "Not a very good pizza",
        price: "$10",
        description: "Made of the worst ingredients we have."
    },
    pizza1 = {
        name: "Decent pizza",
        price: "$50",
        description: "To be honest, it's a good pizza for the price."
    },
    pizza2 = {
        name: "The best ever pizza",
        price: "$500",
        description: "Only the people who want perfection out of their pizzas order this one."
    }
];

topping_list_array = [
    topping0 = {
        name: "Cheese",
        price: "$5 per topping"
    },
    topping1 = {
        name: "Chicken",
        price: "$5 per topping"
    },
    topping2 = {
        name: "Chillies/Spice",
        price: "$5 per topping"
    },
    topping3 = {
        name: "Mustard Sauce",
        price: "$5 per topping"
    },
    topping4 = {
        name: "Jalapeno",
        price: "$5 per topping"
    },
    topping5 = {
        name: "Pepperoni",
        price: "$5 per topping"
    },
    topping6 = {
        name: "Sausage",
        price: "$5 per topping"
    }
]

var cart = [
    item1 = {
        name: "Nothing"
    },
]


function getmenu() {
    var container = document.getElementById("display_menu");
    var item = document.createElement("div");
    var lineBreak = document.createElement("br");

    container.appendChild(lineBreak);

    for (var i = 0; i < menu_list_array.length; i++) {
        var name = document.createElement("h3");
        var description = document.createElement("p");
        var purchaseButton = document.createElement("button");

        purchaseButton.innerHTML = "Purchase";
        purchaseButton.id = "purchaseIndex" + i;

        // document.getElementById("purchaseIndex" + i).onclick = function(event){
        //     console.log(menu_list_array[i], i);
        //     // addpizza(menu_list_array[i].name);
        // };

        console.log(document.getElementById("purchaseIndex"));

        name.innerHTML = menu_list_array[i].name + " - " + menu_list_array[i].price;
        description.innerHTML = menu_list_array[i].description;
        item.classList.add("menu")
        item.appendChild(name);
        item.appendChild(description);
        item.appendChild(purchaseButton);
        item.appendChild(lineBreak);
        container.appendChild(item);
    }
}

function addpizza(pizzaName) {
    console.log(pizzaName);
    for (var i = 0; i < topping_list_array.length; i++) {
        if (pizzaName == topping_list_array[i].name) {
            price += parseInt(topping_list_array[i].price.split(" ")[0].split("$")[1]);
            cart.push(topping_list_array[i]);
        
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("price", "Price: $" + price.toString());
            document.getElementById("cartPrice").innerHTML = localStorage.getItem("price");
        }
    }
}

function addtoppings() {
    var item = document.getElementById("add_item").value;
    for (var i = 0; i < topping_list_array.length; i++) {
        if (item == topping_list_array[i].name) {
            price += parseInt(topping_list_array[i].price.split(" ")[0].split("$")[1]);
            cart.push(topping_list_array[i]);
            
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("price", "Price: $" + price.toString());
            document.getElementById("cartPrice").innerHTML = localStorage.getItem("price");
        }
    }
}


function showtoppings() {
    var container = document.getElementById("display_toppings");
    var item = document.createElement("div");
    var lineBreak = document.createElement("br");

    container.appendChild(lineBreak);

    for (var i = 0; i < topping_list_array.length; i++) {
        var name = document.createElement("h3");

        name.innerHTML = topping_list_array[i].name + " - " + topping_list_array[i].price;
        item.classList.add("menu")
        item.style.height = "auto";
        item.appendChild(name);
        item.appendChild(lineBreak);
        container.appendChild(item);
    }
}


function load() {
    if(localStorage.getItem("price") != null){
        document.getElementById("cartPrice").innerHTML = localStorage.getItem("price")
    } else {
        console.log("First Visit - Or Price has been removed from LS - For security measures, clearing cart");
        localStorage.removeItem("cart");
    }
    if(localStorage.getItem("cart") != null){
        cart = JSON.parse(localStorage.getItem("cart"));
    } else {
        console.log("First Visit - Or Cart has been removed from LS - For security measures, clearing price");
        localStorage.removeItem("price");
    }
}

function clearCart(){
    localStorage.removeItem("price");
    localStorage.removeItem("cart");
}