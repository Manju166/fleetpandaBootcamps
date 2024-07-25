export async function request(url, method, data) {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    if (method === "POST") {
      options.body = JSON.stringify(data);
    }
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const results = await response.json();
      switch (method) {
        case "GET":
          handleGetRequest(results, data);
          break;
  
        case "POST":
          handlePostRequest();
          break;
  
        case "PUT":
          break;
  
        case "DELETE":
          break;
  
        default:
          throw new Error("Unsupported request type");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  
  function handleGetRequest(users, data) {
    const user = users.find(
      (user) => user.username === data.name && user.email === data.email
    );
    if (user) {
      alert("Logged in successfully");
      localStorage.setItem("name", user.username);
      localStorage.setItem("email", user.email);
      window.location = "../App/posts.html";
    } else {
      alert("Incorrect Username or Email");
    }
  }
  
  
  function handlePostRequest() {
    alert("User created successfully");
    window.location = "../App/login.html";
  }
  
  
  // function serialize(data) {
  //   let finalMappedData = data.map(datum =>  {
  //     let mappedData = {}
  //     mappedData['userId'] = datum['userId']
  //     mappedData['blogTitle'] = datum['title']
  //     mappedData['blogDescription'] = datum['body']
  //     return mappedData
  //   })
  //   console.log("mapp",mappedData)
  //   return finalMappedData;
  //  }
  