{
    class Car {
        constructor(public make: string, public model: string, public year: number) { }; // Constructor with public access modifier
        getCarYear() {
            return new Date().getFullYear() - this.year;
        }  // Method to get the age of the car
    }
    const hondaCar = new Car('Honda', 'Civic', 2010);
    const hondaCarAge = hondaCar.getCarYear();
    console.log(hondaCarAge);

    const toyotaCar = new Car('Toyota', 'Corolla', 2015);
    const toyotaCarAge = toyotaCar.getCarYear();
    console.log(toyotaCarAge);
}
