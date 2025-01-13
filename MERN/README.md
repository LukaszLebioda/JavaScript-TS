// MERN course -> https://www.youtube.com/watch?v=MDZC8VDZnV8

# EXPRESS

- install: `npm install express`,
- run: `node ./MERN/express.js`,
- or package.json: "express": "node ./MERN/express.js",
- and then run: `npm run express`,
- or run with nodemon: "express": "nodemon ./MERN/express.js",
- and then run: `npm run express`,

# NODEMON

- automatically restarts server if changes are detected,
- install: `npm i nodemon -D`,

# PATH

# DOTENV

- `npm install dotenv --save`,
- to store database credentials, login credentials, API keys etc.,
- create .env file in the root directory of the project,
- within that file create env variable, e.g. HELLO="Universe",
- in the file with code import dotenv:
import dotenv from "dotenv";
dotenv.config();
- call the env in the same file: console.log(process.env.HELLO),

# MONGOOSE

## cloud MongoDB

- https://www.mongodb.com/,
- create free account (or sign up with google),
- create project, create free cluster (create deployment),
- create db user (copy password and store it somewhere),
- choose connection method (e.g. MongoDB driver, such as node.js),
- get connection string,
- go to network access/ add ip address -> allow access from anywhere,

## my node project

- in .env create env variable -> MONGO_URI
- the value of that variable will be the connection string, 
- replace <db_password> with password stored in the previous step,
- and add database name, e.g. "products",
- the whole .env MONGO_URI variable should look like this:
MONGO_URI=mongodb+srv://lukaszleb:i5cVVO9C87Q1MzV4@cluster0.1d1md.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0

## Mongoose

### create config/db.js (db connection) with:

import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

### create models/product.model.js (products schema) with:

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", productSchema);
// mongoose will convert "Product" into "products"

export default Product;

