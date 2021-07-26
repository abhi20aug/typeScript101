interface Customer {
    accountNo: number;
    getAcctBalance(): void;
    Name: string;
    Address: string
    }

//plain object
let customer: Customer = {
    getAcctBalance():void {
    },
    accountNo: 10,
    Name: "abhishek",
    Address: "addre line 1"
}

//how to read property from plain object created using interface

let acct = customer.accountNo;
let customerName = customer.Name;
let custAddr = customer.Address;

console.log("acct %d Name %s Addr %s",acct,customerName,custAddr)

