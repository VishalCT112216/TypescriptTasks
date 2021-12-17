class customers 
{
  private Id : number;
  private Name : string;
  private City : string;

  constructor(value1 : number = 1, value2 : string = "vishal" , value3 : string = "Pune")
  {
    this.Id = value1;
    this.Name = value2;
    this.City = value3;
  }

 showdetails() : void
  {
      console.log("Customer Details  ::   Id : " + this.Id + " Name : " + this.Name + " City : " + this.City)
  }
}

let c1:customers = new customers()
let c2:customers = new customers(10256)
let c3:customers = new customers(10256 , "scott")
let c4:customers = new customers(10256 , "scott" , "Hyd")

c1.showdetails();
c2.showdetails();
c3.showdetails();
c4.showdetails();

