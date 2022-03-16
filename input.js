const { stdin } = require("process");
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
  if (data === '\u0077') {
    connection.write("Move: up");
  }
  if (data === '\u0073') {
    connection.write("Move: down");
  }
  if (data === '\u0061') {
    connection.write("Move: left");
  }
  if (data === '\u0064') {
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