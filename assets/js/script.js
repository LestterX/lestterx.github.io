window.location.replace('https://my-site-two-zeta.vercel.app');
let bntMobile = document.querySelector('.mobile_bnt')
let navBar = document.querySelector('.nav-bar')

const display = ['block', 'none']
let dCount = 0
function changeDisplay(){
  navBar.style.display = display[dCount];
  dCount ++;
  if (dCount > 1) dCount = 0;
}

bntMobile.addEventListener('click', changeDisplay)

document.addEventListener('click', e => {
  let target = e.target.classList.value
  if(
    (target !== 'social' && dCount === 1) &&
    (target !== 'nav-bar' && dCount === 1) &&
    (target !== 'nav-bar-time' && dCount === 1) &&
    (target !== 'nav-bar-li' && dCount === 1) &&
    (target !== 'top-bar' && dCount === 1) &&
    (target !== 'line1' && dCount === 1) &&
    (target !== 'line2' && dCount === 1) &&
    (target !== 'line3' && dCount === 1) &&
  (target !== 'mobile_bnt' && dCount) === 1
    ) changeDisplay();
});
