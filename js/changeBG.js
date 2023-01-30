/*=====================Change Background======================*/
function scrollHeader(){
    const nav = document.getElementById("header");

    if(this.scrollY >= 80){
        nav.classList.add("scroll-header");
    }
    else{
        nav.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll" , scrollHeader)
