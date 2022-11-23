const cowsay = require("cowsay");
const gyan = require("inspirational-quotes");

console.log(
  cowsay.say({
    text: gyan.getQuote().text,
    e: "xx",
    T: "Bhagjaa",
  })
);
