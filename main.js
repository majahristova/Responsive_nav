const navbar_responsive = document.getElementsByClassName('navbar_responsive')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

navbar_responsive.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})