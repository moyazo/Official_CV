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

const aboutMeTxtHeader = document.querySelector(".aboutMeTxtHeader");
const star1 = document.querySelector(".iStar1");
const star2 = document.querySelector(".iStar2");
let isCollapse = false;

star1.addEventListener("click", () => {
    if (isCollapse) {
            setTimeout(() => {
                aboutMeTxtHeader.classList.add("h3AnimationExtend");
                aboutMeTxtHeader.classList.remove("h3AnimationCollapse");
                aboutMeTxtHeader.style.width = "30%";
                aboutMeTxtHeader.style.opacity = "100";
                star2.style.opacity = "100";
                star2.classList.add("defuseStars");
                star2.classList.remove("mixStars");
                star1.style.transform = "scale(1)";
                star1.style.transition = ".5s ease-in";
            },30)
            star1.classList.add("defuseStarsAnimation");
            star1.classList.remove("mixStarsAnimation");
        
    } else {
        star1.classList.add("mixStarsAnimation");
        star1.classList.remove("defuseStarsAnimation");
        setTimeout(() => {
            aboutMeTxtHeader.classList.add("h3AnimationCollapse");
            aboutMeTxtHeader.classList.remove("h3AnimationExtend");
            aboutMeTxtHeader.style.opacity = "0";
            aboutMeTxtHeader.style.width = "0%";
            star2.style.opacity = "0";
            star2.classList.add("mixStars");
            star2.classList.remove("defuseStars");
            star1.style.transition = ".5s ease-out";
            star1.style.transform = "scale(1.25)";
        },550);
    }
    isCollapse = !isCollapse;
});
star2.addEventListener("click", () => {
    if (isCollapse) {
        star1.classList.add("defuseStarsAnimation");
        setTimeout(() => {
            aboutMeTxtHeader.classList.add("h3AnimationExtend");
            aboutMeTxtHeader.classList.remove("h3AnimationCollapse");
            aboutMeTxtHeader.style.width = "30%";
            aboutMeTxtHeader.style.opacity = "100";
            star2.style.opacity = "100"; 
            star1.classList.remove("mixStarsAnimation");
        },550);
        
    } else {
        aboutMeTxtHeader.classList.add("h3AnimationCollapse");
        aboutMeTxtHeader.classList.remove("h3AnimationExtend");
        aboutMeTxtHeader.style.opacity = "0";
        aboutMeTxtHeader.style.width = "0%"; 
        star2.style.opacity = "0";
        star1.classList.remove("defuseStarsAnimation");
        setTimeout(() => {
            star1.classList.add("mixStarsAnimation");
            star1.style.transform = "scale(1.25)";
        },550)
    }
    isCollapse = !isCollapse;
});
