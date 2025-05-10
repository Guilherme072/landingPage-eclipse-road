window.scroll({
    top: 15,
    behavior: 'smooth',
})

class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerText = this.txt

        var that = this;
        var delta = 100;

        if (this.isDeleting) { delta /= 2; }


        document.querySelector(".typingcursor")?.classList.remove("typingcursor__typing");

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;

            document.querySelector(".typingcursor")?.classList.add("typingcursor__typing");
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;

            document.querySelector(".typingcursor")?.classList.remove("typingcursor__typing");
        }


        setTimeout(function () {
            that.tick();
        }, delta);
    }
}


var elements = document.querySelectorAll('#typingtext');
for (var i = 0; i < elements.length; i++) {
    var toRotate = ["fitness", "influenciador", "maromba"]
    var period = 3000;
    if (toRotate) {
        new TxtType(elements[i], toRotate, period);
    }
}
// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "#typingtext > .wrap { border-right: 0.08em solid #fff}";
document.body.appendChild(css);


//Reveal

function reveal() {

    const reveals = document.querySelectorAll(".Home_appear__I_hx6");
    let windowHeight = null;
    let elementTop = null;
    let elementBottom = null;
    let elementVisible = null;

    for (let i = 0; i < reveals.length; i++) {
        windowHeight = window.innerHeight;
        elementTop = reveals[i].getBoundingClientRect().top;
        elementBottom = elementTop + reveals[i].getBoundingClientRect().height;
        elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.remove("Home_disabled__jP87C");
        } else {
            reveals[i].classList.add("Home_disabled__jP87C");
        }
        if (elementBottom < windowHeight - 450) {
            reveals[i].classList.add("Home_disabled__jP87C");
        }
    }
}

window.addEventListener("scroll", reveal);