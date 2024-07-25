document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        let userdata = "";
        data.forEach((post) => {
          userdata += `<div id="card">
          <h3 id="title">${post.title}</h3>
          <p id="desc">${post.body}</p>
          <button onclick="readPost(${post.id})">Read More</button>
               </div>`;
        });
        document.getElementById("postcontainer").innerHTML = userdata;
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
  
  function readPost(id) {
    window.location = `postDetails.html?id=${id}`;
  }
  
  function logout() {
    // localStorage.clear();   ->clear all the key values
    localStorage.removeItem("email");
    alert("Loged out");
    window.location.href = "../index.html";
  }
  