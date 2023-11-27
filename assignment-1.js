function BankAccount(AccountNumber,name,type,balance){
   this.AccountNumber=AccountNumber;
   this.name=name;
   this.type=type;
   this.balance=balance;
   this.deposite=function(amount){
    
        this.balance+=amount
    
   }
   this.withDraw=function(amount){
      if(amount<=this.balance){
      this.balance-=amount
      console.log("successfully withDraw",amount);
      }else{
         console.log("unsufficiant balance");
      }
   }
   this.getTotalBalance=function(){
      this.balance
   }

   

}

let ac1=new BankAccount(404059494030303,"priyanshu","active",500)
let ac2=new BankAccount(503059303040303,"Rahul","active",1000)
let ac3=new BankAccount(403053004030330,"priya","active",0)
let ac4=new BankAccount(205924029495932,"anshu","active",6000)
// ac1.getTotalBalance()
ac1.deposite(100)
ac1.withDraw(200);
console.log(ac1);

ac2.getTotalBalance()
ac2.withDraw(100);
console.log(ac2);

ac3.getTotalBalance()
ac3.withDraw(100);
console.log(ac3);

ac4.getTotalBalance()
ac4.withDraw(100);
console.log(ac4);




let arr=[ac1,ac2,ac3,ac4]
function totalBalance(){
   let total=0
   for(i=0;i<arr.length;i++){
    total+=arr[i].balance
   }
   console.log(total);
}
totalBalance()