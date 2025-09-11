
/*
- GET: Obtener datos
- POST: Enviar datos
- PUT: Actualizar datos
- DELETE: Eliminar datos

*/ 


const listElement = document.getElementById("posts-container");
const fetchButton = document.querySelector("#available-posts button");
const form = document.querySelector("#new-post form");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

async function sendHttpRequest(method, url, data) {
  const options = { method, headers: {} };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  return await response.json();
}

// 🔹 Obtener posts
async function fetchPosts() {
  listElement.innerHTML = ""; // Limpiar antes de cargar

  const responseData = await sendHttpRequest(
    "GET", // Obtener posts
    "https://jsonplaceholder.typicode.com/posts" // Fake API (no guarda los posts creados)
  );

  for (const post of responseData.slice(0, 10)) { // Limitar a 10 posts

    const postContainer = document.createElement("article");
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "Borrar";
    button.addEventListener("click", () => {
      postContainer.remove();
    });

    postContainer.appendChild(title);
    postContainer.appendChild(body);
    postContainer.appendChild(button);

    listElement.append(postContainer);
  }
}

// post
async function createPost(title, content) {
  const userId = Math.random(); 
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const responseData = await sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    post
  );

  console.log("Post creado:", responseData);
}


fetchButton.addEventListener("click", fetchPosts);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar recarga de la página
  createPost(titleInput.value, contentInput.value);
  form.reset();
});
