const nav = document.querySelector('nav');
const classesScrollToggle = ['border-b-2','pb-4']

window.onscroll = () => {
  if (this.scrollY <= 10) {
    nav.classList.remove(...classesScrollToggle)
  } else {
    nav.classList.add(...classesScrollToggle)
  }
}