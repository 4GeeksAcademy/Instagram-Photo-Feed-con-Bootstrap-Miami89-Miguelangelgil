console.log("JavaScript conectado");

// 1️⃣ Agarramos los botones por su ID
const btnGrid = document.getElementById("btnGrid");
const btnList = document.getElementById("btnList");

// 2️⃣ Agarramos todos los posts
const posts = document.querySelectorAll(".post");


// =========================
// MODO LISTA
// =========================
btnList.addEventListener("click", function () {
  console.log("List presionado");

  posts.forEach(function (post) {
    post.classList.remove("col-4");
    post.classList.add("col-12");
  });

  // Activar botón visualmente
  btnList.classList.add("active");
  btnGrid.classList.remove("active");
});


// =========================
// MODO GRID (3 columnas)
// =========================
btnGrid.addEventListener("click", function () {
  console.log("Grid presionado");

  posts.forEach(function (post) {
    post.classList.remove("col-12");
    post.classList.add("col-4");
  });

  // Activar botón visualmente
  btnGrid.classList.add("active");
  btnList.classList.remove("active");
});
