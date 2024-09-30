function loadData2() {
  fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function lodUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => display(data));
}

function display(data) {
  console.log(data);
}
