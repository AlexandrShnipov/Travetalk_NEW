let burgerBtn = document.querySelector('.burger-btn');
let menuOpen = document.querySelector('.menu')

function menuMobile() {
  burgerBtn.addEventListener('click' , toggleMobileMenu)
}

menuMobile()

function toggleMobileMenu() {
  console.log("active")
  burgerBtn.classList.toggle('active');
  menuOpen.classList.toggle('active');
}

let anchors = document.querySelectorAll('a[href*="#"]')

// for (let i = 0; i < anchors.length; i++){
//   anchors[i]
// }

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    let blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// ! goTop

const goTop = document.querySelector('.go-top__link')
window.addEventListener('scroll', function (){
  if (window.scrollY > 0){
goTop.style.display = 'flex'
  }
  else {
    goTop.style.display = 'none'
  }
})
