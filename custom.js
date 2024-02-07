"strict mode";

const navOptnsElement = document.querySelectorAll(".dropOptn");

navOptnsElement.forEach((optn) => {
    optn.addEventListener("click", function () {
        // Remover la clase 'active' de todos los elementos
        navOptnsElement.forEach((optn) => {
        optn.classList.remove("active");
        });

        // Añadir o quitar la clase 'active' al elemento clicado
        optn.classList.add("active");
    });
});

const myModal = new bootstrap.Modal(
    document.getElementById("modalId"),
    options,
);