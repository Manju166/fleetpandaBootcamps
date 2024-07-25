import { request } from "./register.js";


function getPostIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}
const postId = getPostIdFromUrl();
const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

request(apiUrl,"GET")
  .then((response) => {
    if (!response) {
      throw new Error("Network response was not ok");
    }
    return response;
  })
  .then((postDetails) => {
    console.log(postDetails);
    document.getElementById("post-title").innerText = postDetails.blogTitle;
    document.getElementById("post-body").innerText = postDetails.blogDescription;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  function logout() {
    localStorage.clear();  
    alert("Loged out");
    window.location.href = "../index.html";
  }
  window.logout = logout;