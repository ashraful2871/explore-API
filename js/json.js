const user = { id: 1, name: "Amir Gorib", job: "avtor" };
// JavaScript Object Notation (JSON)
// const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

//Output
/*
{ id: 1, name: 'Amir Gorib', job: 'avtor' }
{"id":1,"name":"Amir Gorib","job":"avtor"}*/

const shop = {
  owner: "alia",
  address: {
    street: "kochukhet vuter goli",
    city: "ranbir",
    country: "BD",
  },
  products: ["laptop", "mic", "keyboard", "monitor"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);

const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
