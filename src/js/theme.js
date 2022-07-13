import { WhiteColor } from "./renderFunctions"
import { BlackColor } from "./renderFunctions"

const body = document.querySelector(".theme")
const iconS = document.querySelector(".icon-sun")
const iconN = document.querySelector(".icon-night")

const lightBtn = document.querySelector(".light")
const darkBtn = document.querySelector(".dark")

lightBtn.addEventListener("click", () => {
    
    body.classList.add("light-theme")
    body.classList.remove("dark-theme")
    
    localStorage.removeItem("theme")
    
    BlackColor()

    iconS.style.fill = "#FF6B01"
    iconN.style.fill="#ffffff"
})

darkBtn.addEventListener("click", () => {
  body.classList.add("dark-theme")
  body.classList.remove("light-theme")
    
  iconN.style.fill="#FF6B01" 
  iconS.style.fill = "#ffffff"
   
  WhiteColor()
    
  const settings = "dark"
  localStorage.setItem("theme", JSON.stringify(settings))
})

saveTheme()
function saveTheme() {
    const darkTheme = localStorage.getItem("theme")
    if (darkTheme) {

    iconN.style.fill="#FF6B01"
    iconS.style.fill = "#ffffff"
    
   WhiteColor()  
   
    body.classList.add("dark-theme")
    body.classList.remove("light-theme")
      
  } 
    else if(darkTheme === undefined || darkTheme === null){
        
    iconS.style.fill = "#FF6B01"
    iconN.style.fill = "#ffffff"
       BlackColor() 
    body.classList.add("light-theme")
    body.classList.remove("dark-theme")
  }
 }