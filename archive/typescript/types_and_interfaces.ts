// TYPES

type Customer = {
	firstName: string;
	lastName: string;
	age: number;
	isActive: boolean;
};

// object we want to create should match perfectly
// the type we established above
let firstCustomer: Customer = {
	firstName: "Wookie",
	lastName: "McAllister",
	age: 42,
	isActive: true,
};

//-------------------------------------------------

// INTERFACES

interface User {
	username: string;
	password: string;
}

function returningUserInfo(user: User) {
	console.log(`User name is ${user.username}`);
	console.log(`Password name is ${user.password}`);
}
