var Restaurant = /** @class */ (function () {
    function Restaurant(name) {
        this.pizzaInOrder = [];
        this.maxPizzasInOven = 10;
        this.recipes = [];
        this.name = name;
        this.id = Restaurant.id++;
    }
    Object.defineProperty(Restaurant.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (manager) {
            this._manager = manager;
        },
        enumerable: false,
        configurable: true
    });
    Restaurant.prototype.getInformation = function () {
        console.log("Id: ".concat(Restaurant.id, " Restaurant: ").concat(this.name, ", Orders: ").concat(this.pizzaInOrder));
    };
    Restaurant.prototype.order = function (pizza) {
        this.pizzaInOrder.push(pizza);
    };
    Restaurant.prototype.isOvenFull = function () {
        if (this.maxPizzasInOven > 10) {
            console.log("Oven is full");
        }
        else
            console.log("Oven isn't full");
    };
    Restaurant.id = 0;
    return Restaurant;
}());
var Restauracja2 = new Restaurant("bombola2");
var Restauracja1 = new Restaurant("bombola1");
var Restauracja = new Restaurant("bombola");
Restauracja.order("Hawajska");
Restauracja.order("Peppereonii");
Restauracja.order("Peppperonii");
Restauracja.getInformation();
Restauracja.isOvenFull();
Restauracja.manager = "Bob";
console.log(Restauracja.manager);
