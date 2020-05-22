class car{
    constructor(brand){
        this.carname = brand;
    }
    get cname(){
        return this.carname;
    }
    set cname(x){
        this.carname = x;
    }
}


mycar = new car("Ford");
console.log(mycar.cname);