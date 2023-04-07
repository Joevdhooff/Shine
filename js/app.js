let circleOne = document.getElementById("circleOne");
let circleTwo = document.getElementById("circleTwo");
let circleThree = document.getElementById("circleThree");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    circleOne.style.marginTop = value * -1.2 + "px";
    circleTwo.style.marginLeft = value * 1.2 + "px";
    circleThree.style.marginTop = value * 1.2 + "px";
    circleThree.style.marginLeft = value * 1.2 + "px";

})

var pointer = document.querySelector(".pointer");
const offsetCharacter = 25;
document.addEventListener("mousemove", function(e){
    pointer.style.top = e.pageY - offsetCharacter + "px";
    pointer.style.left = e.pageX - offsetCharacter + "px";
})

function cursorClick(){
    pointer.style.background = "#d11d69";
}
function cursorClick2(){
    pointer.style.background = "#d40edc";
}


window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop< windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        // delete if wag1 doesnt want it to reapear when you scroll back up//
        else{
            reveals[i].classList.remove('active');
        }
        
    }

    var reveals = document.querySelectorAll('.reveal2');

    for (var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop< windowheight - revealpoint){
            reveals[i].classList.add('active2');
        }
        // delete if wag1 doesnt want it to reapear when you scroll back up//
        else{
            reveals[i].classList.remove('active2');
        }
        
    }
}