
const toggleBtn =  document.querySelector(".toggle-btn");
const navBarContainer =  document.querySelector(".navbar-container");

toggleBtn.addEventListener("click",handleClick);

function handleClick(e){
navBarContainer.classList.toggle("active")
navBarContainer.classList.contains("active") ? toggleBtn.innerHTML = "&#10005" : toggleBtn.innerHTML = "&#9776";
}