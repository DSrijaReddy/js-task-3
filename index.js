// questions-1

class book{
    title;
    author;
    ISBN;

    constructor(title,author,ISBN){
        this.title=title;
        this.author=author;
        this.ISBN=ISBN;
    }

    chekout(){
        console.log(this.title,"has been taken");
    }
    returnbook(){
        console.log(this.title,"has been returned");
    }
    updatetitle(newtitle){
        this.title=newtitle;
        console.log(this.title,"new title")
    }
    
}
var b1=new book("The Book","MAarkus Zusak","300") 
console.log(b1);
b1. chekout();
b1. returnbook();
b1.updatetitle("the book thief")
console.log(b1);

// question-2

class product{
    name;
    price;
    category;

    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    ApplyDiscount(amount){
        console.log(this.price,"Discountamount")
    }
    AfterDiscount(){
        console.log(this.price-80,"AfterDiscount")
    }
}
var p1=new product("adidasbackpack","400","bag & accesssories")
p1.ApplyDiscount(80);
p1.AfterDiscount(320);
console.log(p1);

// question-3

class bankaccount{
      accountholdername;
      accountnumber;
      balance;
      
      constructor(accountholdername,accountnumber,balance){
        this.accountholdername=accountholdername;
        this.accountnumber=accountnumber;
        this.balance=balance;
      }
      deposite(amount){
        this.balance=this.balance +amount;
        console.log(this.balance,"amount deposited")
      }
      withdraw(amount){
        this.balance=this.balance-amount;
        console.log(this.balance,"amount withdrawed")
      }
      getcurrentbalance(){
        console.log(this.balance,"current balance")
      }
}
var c1=new bankaccount("siri","xxx9876","1000");
c1.deposite(2000);
c1.withdraw(500);
c1.getcurrentbalance();
console.log(c1)

// question-4

   class vehicle{
     model;
     licenseplate;
     mileage;
     
     constructor(model,licenseplate,mileage){
        this.model=model;
        this.licenseplate=licenseplate;
        this.mileage=mileage;
     }
     drive(miles){
        this.mileage=miles + this.mileage;
        console.log(this.mileage," after increasing mileage");
     }
     getmileage(){
        console.log(this.mileage,"current mileage");
     }
   }
   var v1=new vehicle("Royal Enfield","reb-2951","50");
   v1.drive(30);
   v1.getmileage();
   console.log(v1);


//  question-5
   
   class student{
    name;
    grade;
        
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setgrade(newgrade){
        this.grade=newgrade;
        console.log( this.grade," grade updated")
    }
    getgrade(){
        console.log(this.grade,"this are total students current grades")
    }
   }
   var s1=new student("sukku","90");
   s1.setgrade(90);
   s1.getgrade();
   console.log(s1);