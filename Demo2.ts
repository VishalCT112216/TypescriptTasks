class Product {
    readonly productId : number;
    private productName : string;
    private unitPrice : number;
    private qty : number;


    constructor(value : number) {
        this.productId = value;
        
    }

    get Name():string
    {
        return this.productName;
    }
    set Name(name : string){
        this.productName = name;
    }

    get Price():number
    {
        return this.unitPrice;
    }
    set Price(price : number){
        this.unitPrice = price;
    }

    get qty1():number
    {
        return this.qty;
    }
    set qty1(qtyw : number){
        this.qty = qtyw;
    }

    
}
let p1: Product = new Product(1);
p1.Name="Product one"
p1.Price=1234;
p1.qty1=12;


console.log("Product Details::")
console.log("Id :"+ p1.productId)
console.log("Name :"+p1.Name)
console.log("Price :"+p1.Price)
console.log("Qty :"+p1.qty1)