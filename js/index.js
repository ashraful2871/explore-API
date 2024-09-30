function lodUsers2(data) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => displayUsers2(users));
}

function displayUsers2(users) {
  const ul = document.getElementById("users-list");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
