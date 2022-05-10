window.onscroll = function () {
    
    myFunction()
    myFunction1() 

};

var navbar = document.getElementById("upp");
var sticky = navbar.offsetTop;

let mstatus = 0;

function myFunction() {
    if (window.pageYOffset > 1) {
        
            navbar.classList.add("sticky");
        

    } else {
        if(mstatus==0)
        {
            navbar.classList.remove("sticky");
        }
    }
}




let mbutton;
let menucard;



    mbutton = document.getElementById("menubutton");
    menucard = document.getElementById("menu");
    mbutton.addEventListener("click", openmenu);
    upele = document.getElementById("down");


function openmenu() {

    if (mstatus == 0) {
        navbar.classList.add("sticky");
        menucard.classList.add("openMenu");
        menucard.style.display = "flex";
        menucard.style.animation = "openani 0.5s linear forwards";
        mstatus = 1;
        mbutton.children[0].classList.value = "fa fa-close";
        console.log(mbutton.children[0].classList.value)
        upele.style.width = "81.3%"
    }
    else {
        menucard.style.display = "none";
        menucard.style.animation = "closeani 1s linear forwards";
        mbutton.children[0].classList.value = "fa fa-bars";
        upele.style.width = "100%"
        
            menucard.classList.remove("openMenu");
        
            if (window.pageYOffset < 1)
            {
                navbar.classList.remove("sticky");
            }
            mstatus = 0;



    }

}

