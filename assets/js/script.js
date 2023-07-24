let bntMobile = document.querySelector('.mobile_bnt')
let navBar = document.querySelector('.nav-bar')

const display = ['block', 'none']
let dCount = 0
bntMobile.addEventListener('click', () => {
  navBar.style.display = display[dCount];
  dCount ++;
  if (dCount > 1) dCount = 0;
})