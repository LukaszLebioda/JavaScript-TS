// create TYPE
type Customer = {
  firstName: string;
  lastName: string;
  age: number;
  isActive: boolean;
};

// create variable and assigned type 'Customer' to this variable
// let firstCustomer: Customer

// there is an error, if the value doesn't match the TYPE 'Customer':
// let firstCustomer: Customer = 110;

// there is an error, if the object is different than the TYPE:
// let secondCustomer: Customer = {
//   firstName: "Wookie",
//   lastName: "Lebioda",
//   age: 25,
//   isActive: "true",
//   favMeal: burger
// };

// no errors:
let thirdCustomer: Customer = {
  firstName: "Wookie",
  lastName: "Lebioda",
  age: 25,
  isActive: true,
};
