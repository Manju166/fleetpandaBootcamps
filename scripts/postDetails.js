function getPostIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}
const postId = getPostIdFromUrl();
const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((postDetails) => {
    console.log(postDetails);
    document.getElementById("post-title").innerText = postDetails.title;
    document.getElementById("post-body").innerText = postDetails.body;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  function logout() {
    // localStorage.clear();   ->clear all the key values
    localStorage.removeItem("email");
    alert("Loged out");
    window.location.href = "../index.html";
  }
  






