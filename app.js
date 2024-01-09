// class Vehicle {
//     honk(){
//         return "Beep."
//     }
//     toString(){
//         return `The vehicle is a ${make}${model} from ${year}.`
//     }
//     make(){

//     }
//     model(){

//     }
//     year(){

//     }
// }

// class Car extends Vehicle {
//     numWheels : 4
// };

// class Motorcycle extends Vehicle {
//     numWheels : 2
//     revEngine(){
//         return "VROOM!!!"
//     }
// }

// class Garage {
//     vehicles(capacity){
//         vehicleArr = []
//         add(Vehicle){
//             if(Vehicle.has(names) !== true) {
//                 return "Only the vehicles are allowed in here!"
//             }
//             if(Vehicle.capacity === vehicleArr.length + 1){
//                 return "Sorry, we're full."
//             }
//            vehicleArr.push() 

//         }
//         capacity : 
//     }
// }

class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
};

class Motorcycle extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numWheels = 2;
        }
    
    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
        add(newVehicle) {
            if (!(newVehicle instanceof Vehicle)) {
                return "Only the vehicles are allowed in here!";
            }
            if(this.vehicles.length >= this.capacity) {
                return "Sorry, we're full.";
            }
           this.vehicles.push(newVehicle);
           return "Vehicle added!";
        }
    }