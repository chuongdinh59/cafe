



/* ==================Header================== */
const header = document.querySelector(".header"),
    menu = document.querySelectorAll(".bar-icon"),
    nav = document.querySelector("nav.nav"),
    time = document.querySelector(".time-icon"),
    caption = document.querySelector(".hero-caption")
  

window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
})

// toggle menu
function toggleMenu() {
    nav.classList.add("active")
    document.body.classList.add("overflow")
}
menu[0].addEventListener("click", (e) => {
    toggleMenu()
})
menu[1].addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
   setTimeout(toggleMenu, 500)
})
time.addEventListener("click", (e) => {
    nav.classList.remove("active")
    document.body.classList.remove("overflow")
})


/* ==================Hero================== */
const img = document.querySelector(".hero-img")


window.addEventListener("load", (e) => {
    img.classList.add("active")
})

/* ==================Share================== */
/* ==================Banner================== */
/* ==================Menu================== */
let share = document.querySelector("section.share")
let banner = document.querySelector("section.banner")
let about = document.querySelector("section.about")
var arraySection = [share,banner, about];
const triggerBottom = window.innerHeight * 2 / 5;
window.addEventListener('scroll', checkImg)

function checkImg() {
    arraySection.forEach(section => {
        let point = section.getBoundingClientRect().top;
        if (point < triggerBottom)
            section.classList.add("active");
    })

}

/* ==================Validate form ================== */

function getValue(id) {
    return document.getElementById(id).value.trim();
}
function showEror(key, message) {
    document.getElementById(key + "_error").innerHTML = message;
}
function removeError(key) {
    document.getElementById(key + "_error").innerHTML = "";
}
var inputColection = document.querySelectorAll(".contact-input")


var flag = true;
const validation = {

    testName: function () {
        let value = getValue("name");
        if (value == "" || value.length < 5) {
            flag = false;
            showEror("name", "Vui lòng kiểm tra lại ")
        }
        else {
            flag = true;
        }
    },
    testEmail: function () {
        let value = getValue("email");
        const form = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!form.test(value)) {
            flag = false;
            showEror("email", "Vui lòng kiểm tra lại")
        }
        else {
            flag = true;
        }
    },
    start: function () {
        this.testName();
        this.testEmail();
    }
       
}

const sentbtn = document.querySelector(".send-btn")

sentbtn.addEventListener("click", () => {
    validation.start()
})
inputColection.forEach(input => {
    input.addEventListener("keyup" ,() => {
        removeError(input.id)
    })
})
const inputName = document.getElementById("name")
const inputEmail = document.getElementById("email")
inputName.addEventListener("blur", () => {
    validation.testName()
})
inputEmail.addEventListener("blur", () => {
    validation.testEmail()
})


var cards = [...document.querySelectorAll(".card-item")]
let dots = document.querySelectorAll(".card-dots span")
var temp = undefined
function handle() {
    const activeElement = document.querySelector(".card-item.active")
    let index = cards.indexOf(activeElement)
    if (temp != undefined)
        dots[temp].classList.remove("active");
    temp = index
    let next = index + 1;
    let pre = index - 1;
    if (next > cards.length - 1)
    next = 0;
    if (pre < 0)
    pre = cards.length - 1;
    if (window.innerWidth > 1024) {
        cards[pre].style.left = 0
        cards[next].style.left = `100%`
    }
    else {
        cards[pre].style.left = '-50%'
        cards[next].style.left = `150%`
    }
    dots[index].classList.add("active");
}
handle()
cards.forEach((card,index) => {
    card.addEventListener("click", (e) => {
        document.querySelector(".card-item.active").classList.remove("active");
        e.currentTarget.classList.add("active")
        handle();
        
    } )
})

dots.forEach( (dot,index) => {
    dot.addEventListener("click", () => {
        document.querySelector(".card-item.active").classList.remove("active");
        cards[index].classList.add("active")
        handle()
    })
})