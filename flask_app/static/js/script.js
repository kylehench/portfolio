// Navbar
const nav = document.querySelector('nav');
const classesScrollTop = ['border-white']
const classesScrollDown = ['border-gray-300']

window.onscroll = () => {
  if (this.scrollY <= 10) {
    nav.classList.remove(...classesScrollDown)
    nav.classList.add(...classesScrollTop)
  } else {
    nav.classList.remove(...classesScrollTop)
    nav.classList.add(...classesScrollDown)
  }
}

// Hamburger Menu
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const toggleMenu = () => {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

btn.addEventListener('click', () => toggleMenu())