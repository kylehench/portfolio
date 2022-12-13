// Navbar
const nav = document.querySelector('nav');
const classesScrollToggle = ['border-gray-300']

window.onscroll = () => {
  if (this.scrollY <= 10) {
    nav.classList.remove(...classesScrollToggle)
  } else {
    nav.classList.add(...classesScrollToggle)
  }
}

// Hamburger Menu
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
})