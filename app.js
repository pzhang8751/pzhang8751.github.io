
const navItems = document.querySelectorAll(".nav"); 

const homeEle = document.getElementById('home').offsetTop;
const aboutEle = document.getElementById('about').offsetTop;
const projectEle = document.getElementById('projects').offsetTop;

navItems[0].addEventListener("click", ()=>{window.scrollTo({top: homeEle});});
navItems[1].addEventListener("click", ()=>{window.scrollTo({top: aboutEle});});
navItems[2].addEventListener("click", ()=>{window.scrollTo({top: projectEle});});