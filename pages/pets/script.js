
document.getElementById("openBurger").onclick = function () {
    open()
};

document.getElementById("burger-fade").onclick = function () {
    open()
}


function open() {
    // document.getElementById("menu").classList.toggle("show");
    document.getElementById("burger-menu-bg").classList.remove("close");
    document.getElementById("burger-fade").classList.remove("close");
    document.getElementById("burger-menu-bg").classList.toggle("show");
    document.getElementById("burger-fade").classList.toggle("show");
    document.getElementById("main-header").classList.toggle("hide")
    console.log('open burger menu')
}