const petsList = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

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
    console.log('open burger menu')
}

// SLIDER MOVING
// const buttons = document.querySelectorAll('.slider-button')
// const slider = document.querySelector('.pets__content__cards')
// const slides = document.querySelectorAll('.card')
// const slide_ = document.querySelector('.card')

//
// let c1 = 4
// let c2 = 0
// let c3 = 2

// !!!!!!!!!!
// function cardDisplay() {
//     document.getElementById('card-img1').src=`${petsList[c1].img}`;
//     document.getElementById('card-img2').src=`${petsList[c2].img}`;
//     document.getElementById('card-img3').src=`${petsList[c3].img}`;
//
//     document.getElementById('card-title1').innerText=`${petsList[c1].name}`
//     document.getElementById('card-title2').innerText=`${petsList[c2].name}`
//     document.getElementById('card-title3').innerText=`${petsList[c3].name}`
// }
// cardDisplay()
//
// function chooseThree() {
//     let max = 7
//     let min = 0
//     let vals = [c1,c2,c3]
//     let newVals = []
//     for (let i = 0; i < 3; i++) {
//         let num = Math.floor(Math.random() * (max+1))
//         while (vals.includes(num) || newVals.includes(num))
//             num = Math.floor(Math.random() * (max+1))
//         newVals.push(num)
//     }
//     c1 = newVals[0]
//     c2 = newVals[1]
//     c3 = newVals[2]
// }

// let mySwiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     slidesPerView: 3,
//     spaceBetween: 45,
//     slidesPerGroup: 3,
//     // loop: true,
//     loopFillGroupWithBlank: true,
//     // If we need pagination
//     // pagination: {
//     //     el: '.swiper-pagination',
//     // },
//
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//
//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// })

// function newSlides () {
//     chooseThree()
//     // c1 = c1+1
//     // c2 = c2+1
//     // c3 = c3+1
// }

// const slide = document.getElementById('card')
// slide.outerHTML

// let index = 1
// let size = -540
// console.log(size)

// update();
// function update(action) {
//     newSlides()
//     cardDisplay()
//     if (action === 'right') {
//
//         slider.insertAdjacentHTML('beforeend', slider.innerHTML)
//
//     }
//     if (action === 'left') {
//
//     }
//     slider.style.transform = "translateX(" + (2 * size * (index - 1)) + "px)"
//
// }
//
// function slide() {
//     slider.style.transition = "transform .5s ease-in-out";
//     update();
// }


// function btnCheck() {
//     slides.forEach(item => {
//         oldChild.push(item.outerHTML)
//     })
//     console.log(oldChild)
//
//     if (this.id === 'btn-right') {
//         index++
//         update('right')
//     } else if (this.id === 'btn-left') {
//         index--
//         update('left')
//     }
//     slide()
// }

// buttons.forEach(btn => btn.addEventListener('click', btnCheck))

// NOT MY CODE

// const cards = document.querySelectorAll(".card");

// function disableLink() {
//     const disableLinksHeader = document.querySelectorAll(".header-menu .disable");
//     disableLinksHeader.forEach((elem) => {
//         elem.addEventListener("click", (e) => {
//             e.preventDefault();
//         });
//     });
// }

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

