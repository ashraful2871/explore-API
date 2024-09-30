function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((postData) => displayPost(postData));
}
/**
 * get the container elements where you add the new elements.
 *
 */

function displayPost(postData) {
  const postContainer = document.getElementById("post-container");
  for (const post of postData) {
    console.log(post);

    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `

        <h4>${post.userId}</h4>
    <h5>Post-${post.title}</h5>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(div);
  }
}

loadPost();
