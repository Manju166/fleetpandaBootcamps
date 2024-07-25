// export async function request(url, method, data) {
//   const options = {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   if (method === "POST") {
//     options.body = JSON.stringify(data);
//   }

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const results = await response.json();
//     switch (method) {
//       case "GET":
//         handleGetRequest(results, data);
//         break;

//       case "POST":
//         handlePostRequest();
//         break;

//       case "PUT":
//         break;

//       case "DELETE":
//         break;

//       default:
//         throw new Error("Unsupported request type");
//     }
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// }

// function handleGetRequest(users, data) {
//   const user = users.find(
//     (user) => user.username === data.name && user.email === data.email
//   );
//   if (user) {
//     alert("Logged in successfully");
//     localStorage.setItem("name", user.username);
//     localStorage.setItem("email", user.email);
//     window.location = "../App/posts.html";
//   } else {
//     alert("Incorrect Username or Email");
//   }
// }

// function handlePostRequest() {
//   alert("User created successfully");
//   window.location = "../App/login.html";
// }

export async function request(url, method, data) {
  switch (method) {
    case "POST":
      return handlePostRequest(url, data);
    case "GET":
      return handleGetRequest(url);
    default:
      console.log("Invalid http method");
      break;
  }
}

async function handlePostRequest(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    console.error("Post request error:", error);
  }
}

// get request for post page
async function handleGetRequest(url) {
  
  let responseData;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    responseData = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return serialize(responseData);
  } catch (error) {
    console.error("Fetch error:", error);
  }
  return responseData;
}
function serialize(data) {
  
    let finalMappedData;
    if (Array.isArray(data)) {
      finalMappedData = data.map((datum) => {
        let mappedData = {};
        mappedData["postId"] = datum["id"];
        mappedData["userId"] = datum["userId"];
        mappedData["blogTitle"] = datum["title"];
        mappedData["blogDescription"] = datum["body"];
        return mappedData;
      });
    } else {
      finalMappedData = {
        userId: data.userId,
        blogTitle: data.title,
        blogDescription: data.body,
      };
    }
    return finalMappedData;
}
