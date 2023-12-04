const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


// scroll shadow effect

window.addEventListener('scroll', () =>{
  nav.classList.toggle('window-scroll-y', window.scrollY > 0)
})


// script for accordion display

let faqs = document.querySelectorAll('.accordion-content');

faqs.forEach(faq => {
    faq.addEventListener('click',  () =>{
        faq.classList.toggle('open');

        let icon = document.querySelector('.header i');  

        if(icon.className === 'fas fa-plus'){
          icon.className = "fas fa-minus";
        }else{
          icon.className = "fas fa-plus";
        }
    });
});