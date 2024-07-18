import { Customer } from "./Customer";

let myCustomer = new Customer("Martin", "Dixon");

myCustomer.firstName = "Susan";
myCustomer.lastName = "Public";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
