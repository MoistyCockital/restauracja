class Restaurant{
    static id: number = 0;
    readonly name: string;
    private pizzaInOrder: string[] = [];
    private maxPizzasInOven: number = 10;
    protected recipes: string[] = [];
    private _manager: string;
    

    get manager(){
        return this._manager;
    }

    set manager(manager){
        this._manager=manager;
    }


    constructor(name: string){
        this.name = name;
        this.id = Restaurant.id++;
    }

    getInformation(){
        console.log(`Id: ${Restaurant.id} Restaurant: ${this.name}, Orders: ${this.pizzaInOrder}`);
    }

    order(pizza:string){
        this.pizzaInOrder.push(pizza);
    }

    isOvenFull(){
        if(this.maxPizzasInOven > 10){
            console.log("Oven is full");
        }else
            console.log("Oven isn't full");
    }
}
const Restauracja2 = new Restaurant("bombola2")
const Restauracja1 = new Restaurant("bombola1")
const Restauracja = new Restaurant("bombola")
Restauracja.order("Hawajska");
Restauracja.order("Peppereonii");
Restauracja.order("Peppperonii");

Restauracja.getInformation();
Restauracja.isOvenFull();
Restauracja.manager = "Bob";
console.log(Restauracja.manager);