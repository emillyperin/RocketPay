import "./css/index.css"
import IMask from 'imask'


const bgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path");
const bgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path");
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
    
    
function setCardType(type) {
    const colors = {
        visa: ["#436D99","#2D57F2"],
        mastercard: ["#DF6F29","#C69347"],
        default: ["black","gray"]
    }

    bgColor01.setAttribute("fill", colors[type][0])
    bgColor02.setAttribute("fill", colors[type][1])
    ccLogo.setAttribute("src", `cc-${type}.svg`)
        
}

// Security code
const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
    mask: "0000",
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)
