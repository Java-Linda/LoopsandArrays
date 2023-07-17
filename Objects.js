const customer = {
    firstName: "Jake",
    lastName: "Smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zip: 631,
    favFlavors: 32,
    cupSize: "medium",
    store: "Target",
    firstVisit: false,
}

customer.email = "Jak3Smith1992@email.com",
customer.phone = 3195551234,
customer.zip = 63132,
customer.favFlavors = ("coffee", "strawberry", "matcha"),
customer.toppings = ("chocolate sprinkles", "wafer straws", "gummy bears"),
customer.futureFlavs = "mango",
customer.todaysPurchaseCost = 5.32,

let info = [];

    for(const in customer){
        info += customer[obj];

        delete customer.zip, customer.store;
        info.push(customer.toppings, customer.futureFlavs, customer.todaysPurchaseCost);
    }

    console.log(info);


//const shoe = {
//    brand: "Nike",
//    laces: true,
//    velcro: false,
//    color: "Black",
//    price: 100,
//    acticityType: ("running", "walking", "sport"),
//    storeLocation: {
//        address: "123 Main St",
//        city: "NYC",
//        state: "NY",
//    }
//};


//shoe.material = "Suede",

//for(const property in shoe){
//    console.log(shoe[property]);
//    delete shoe [property];
//}


//console.log(Object.keys(shoe));
//console.log(Object.values(shoe));

//const dinner = {
//    friends: ("Linda", "Patsy", "Jonah", "Amy", "Mateo", "Cheyenne")
//    individualMeal: {
//        Cheeseburger: 12,
//        Steak: 20,
//        Soup: 8,
//        MacnCheese: 14,
//        Combo: 16,
//    }
//}
    
//    let totalCost = 0;

//    for(const individualMeal in dinner){
//        totalCost += dinner[individualMeal];
//    }

//    console.log(totalCost);