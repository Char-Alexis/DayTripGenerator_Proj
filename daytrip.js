"user strict"
//As a user, I want a destination to be randomly selected for my day trip.

function generateRandomDestination() {
    for (let i = 0; i < generateRandomDestination.length; i++){
    console.log[i]
    }
    let allDestinations = ["Cebu", "Bohol", "Samar"]
    let newDestinations = allDestinations [Math.floor(Math.random() * allDestinations.length)]
}

generateRandomDestination()

//As a user, I want a restaurant to be randomly selected for my day trip.
function generateRandomRestaurant() {
    for (let i = 0; i < generateRandomRestaurant.length; i++){
    console.log[i];
    }
    let allRestaurants = ["Cafe", "Buffet", "Fast-food"]
    let newRestaurants = allRestaurants [Math.floor(Math.random() * allRestaurants.length)]
}

generateRandomRestaurant()

function randomTransportation  (choice){
    return choice[Math.floor(Math.random() * choice.length)];
}

let modeOfTransportation = ["Car", "Taxi", "Bike"];

console.log(randomTransportation(modeOfTransportation));

//As a user, I want to be able to confirm that my day trip is "complete"
function completeTrip (){
    return "Complete"
}

console.log("Complete")