
// BURGER MENU
document.getElementById("openBurger").onclick = function () {
    open()
};

document.getElementById("burger-fade").onclick = function () {
    open()
}

function open() {
    document.getElementById("burger-menu-bg").classList.remove("close");
    document.getElementById("burger-fade").classList.remove("close");
    document.getElementById("burger-menu-bg").classList.toggle("show");
    document.getElementById("burger-fade").classList.toggle("show");
    document.getElementById("main-header").classList.toggle("hide")
    document.querySelectorAll(".card").forEach(item => item.classList.toggle('hide'))
    console.log('open burger menu')
}

const cards = document.querySelectorAll(".card");

function addPopup(pets) {
    const content = document.createElement("div");
    const popupCard = document.querySelector(".popup-card");
    content.classList.add("content");
    content.style.opacity = "0";
    content.innerHTML = `
        <img class="img-pets" src=${pets.img} alt=${pets.name}>
        <div class="block-text">
            <div class="control close">
                <img src="../../assets/icons/close.svg" alt="close" />
            </div>
            <h3>${pets.name}</h3>
            <h4>${pets.type} - ${pets.breed}</h4>
            <p>${pets.description}</p>
            <ul>
                <li><strong>Age: </strong><span>${pets.age}</span></li>
                <li><strong>Inoculations: </strong><span>${pets.inoculations}</span></li>
                <li><strong>Diseases: </strong><span>${pets.diseases}</span></li>
                <li><strong>Parasites: </strong><span>${pets.parasites}</span></li>
            </ul>
        </div>
  `;
    popupCard.append(content);

    function openPopup() {
        if (window.innerWidth !== document.documentElement.clientWidth) {
            let paddingRight =
                window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${paddingRight}px`;
        }
        popupCard.style.display = "flex";
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            popupCard.style.opacity = "1";
            content.style.opacity = "1";
        }, 0);
    }

    function closePopup() {
        const close = document.querySelector(".control.close");
        close.addEventListener("click", () => {
            popupCard.style.opacity = "0";
            content.style.opacity = "0";
            setTimeout(() => {
                content.remove();
                popupCard.style.display = "none";
                document.body.style.overflow = "visible";
                document.body.style.paddingRight = "0px";
            }, 400);
        });
        popupCard.addEventListener("click", (event) => {
            if (event.target.className === "popup-card") {
                popupCard.style.opacity = "0";
                content.style.opacity = "0";
                setTimeout(() => {
                    content.remove();
                    popupCard.style.display = "none";
                    document.body.style.overflow = "visible";
                    document.body.style.paddingRight = "0px";
                }, 400);
            }
        });
        popupCard.addEventListener("mouseover", (event) => {
            const close = document.querySelector(".control.close");
            if (event.target.className === "popup-card") {
                close.classList.add("active");
            }
        });
        popupCard.addEventListener("mouseout", (event) => {
            if (event.target.className === "popup-card") {
                close.classList.remove("active");
            }
        });
    }

    openPopup();
    closePopup();
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// disableLink();

