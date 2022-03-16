const { stdin } = require("process");
const { moveUpKey, moveDownKey, moveLeftKey, moveRightKey } = require("./constants")
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  // process.stdout.write("test ");
  if (data === moveUpKey) {
    connection.write("Move: up");
  }
  if (data === moveDownKey) {
    connection.write("Move: down");
  }
  if (data === moveLeftKey) {
    connection.write("Move: left");
  }
  if (data === moveRightKey) {
    connection.write("Move: right");
  }
  if (data === '\u0069') {
    connection.write("Say: snek zoom");
  }
  if (data === '\u006f') {
    connection.write("Say: I am #1");
  }
  if (data === '\u0070') {
    connection.write("Say: Gotta go fast");
  }

  if (data === '\u0003') {
    process.exit();
  }
};

module.exports = { 
  setupInput,
 };