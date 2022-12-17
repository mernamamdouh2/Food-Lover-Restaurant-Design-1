/* NavBar */
let menubar = document.querySelector('#menu-bar');
let nav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

/*Search*/
document.getElementById("searchBtn").onclick=function(){
  document.querySelector("[type=search]").classList.toggle("search");
}
/* NavBar */


/*Animation for all page*/
const sr = ScrollReveal ({
  distance : '45px',
  duration : 2700,
  reset : true,
})

sr.reveal('.home-image',{ delay:350, origin:'left' })
sr.reveal('.home-text-content',{ delay:350, origin:'right' })

sr.reveal('.myimageabout',{ delay:350, origin:'left' })
sr.reveal('.about-text-content',{ delay:350, origin:'right' })

sr.reveal('.quality-content',{ delay:350, origin:'left' })
sr.reveal('.qulity-image',{ delay:350, origin:'top' })

sr.reveal('.gallery-image',{ delay:350, origin:'top' })

sr.reveal('.food-main-content',{ delay:350, origin:'bottom' })

sr.reveal('.menu-food-content',{ delay:350, origin:'top' })
sr.reveal('.menu-food-text',{ delay:350, origin:'bottom' })

sr.reveal('.review_card',{ delay:350, origin:'top' })

sr.reveal('.team_box',{ delay:350, origin:'bottom' })

sr.reveal('.box',{ delay:350, origin:'top' })

sr.reveal('.before',{ delay:250, origin:'bottom' })

sr.reveal('.footer-logo',{ delay:250, origin:'bottom' })
/*Animation for all page*/


/* header sticky & back to top*/
const backTopBtn = document.querySelector(".linkUp");

backTopBtn.addEventListener("click", e=> {
  window.scrollTo(
    {
      top:0 ,
      left:0 ,
      behavior: "smooth"
    }
  );
});

window.addEventListener("scroll", e=> {
    backTopBtn.style.display = window.screenY > 120 ? 'none' : 'block';
});
/* header sticky & back to top*/