import { request } from "./register.js";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

document.addEventListener("DOMContentLoaded", function () {
  request(POST_URL, "GET")
    .then((data) => {
      console.log(data);
      let userdata = "";
      data.forEach((post) => {
        userdata += `<div id="card">
          <h3 id="title">${post.blogTitle}</h3>
          <p id="desc">${post.blogDescription}</p>
          <button id="readPost" onclick="readPost(${post.postId})">Read More</button>
               </div>`;
      });
      document.getElementById("postcontainer").innerHTML = userdata;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
function readPost(id) {
  window.location = `postDetails.html?id=${id}`;
}

window.readPost = readPost;

function logout() {
  localStorage.clear();
  alert("Loged out");
  window.location.href = "../index.html";
}
window.logout = logout;
