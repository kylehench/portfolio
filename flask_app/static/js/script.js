const nav = document.querySelector('nav');
const classesScrollToggle = ['border-gray-400']

window.onscroll = () => {
  if (this.scrollY <= 10) {
    nav.classList.remove(...classesScrollToggle)
  } else {
    nav.classList.add(...classesScrollToggle)
  }
}