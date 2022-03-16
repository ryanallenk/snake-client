const { connect, } = require("./client");
const { setupInput, } = require("./input");
const net = require("net");


console.log("Connecting ...");
const connectObj = connect();
setupInput(connectObj);
