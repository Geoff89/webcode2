// inheritance

class car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'i have a' + this.carname;
    }
}

class model extends car{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + 'it is a' + this.model;
    }
}


mycar = new model("Ford", "Mustang");
console.log(mycar.show());