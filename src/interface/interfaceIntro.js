"use strict";
//plain object
var customer = {
    getAcctBalance: function () {
    },
    accountNo: 10,
    Name: "abhishek",
    Address: "addre line 1"
};
//how to read property from plain object created using interface
var acct = customer.accountNo;
var customerName = customer.Name;
var custAddr = customer.Address;
console.log("acct %d Name %s Addr %s", acct, customerName, custAddr);
