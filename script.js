const tempInput = document.getElementById("temp-el")
const ftocRadio = document.getElementById("ftoc")
const ctofRadio = document.getElementById("ctof")
const convertBtn = document.getElementById("convert-btn")
const displayTemp = document.getElementById("display-temp")

convertBtn.addEventListener("click", convert)

function convert() {

    displayTemp.style.display = "block"
    
    if (!tempInput.value) {
        displayTemp.style.color = "red"
        displayTemp.textContent = "Please enter a temperature."
        return
    }

    const inputValue = parseFloat(tempInput.value)

    if (ftocRadio.checked) {
        const celsius = ((inputValue - 32) * 5/9).toFixed(2)
        displayTemp.style.color = "black";
        displayTemp.textContent = `${celsius}°C`;
    } else if (ctofRadio.checked) {
        const fahrenheit = ((inputValue * 9/5) + 32).toFixed(2)
        displayTemp.style.color = "black";
        displayTemp.textContent = `${fahrenheit}°F`
    } else {
        displayTemp.style.color = "red"
        displayTemp.textContent = "Please select a conversion type."
    }
}

// Hide display message when input or radio changes
tempInput.addEventListener("input", () => {
    displayTemp.style.display= "none"
})

ftocRadio.addEventListener("change", () => {
    displayTemp.style.display = "none"
})

ctofRadio.addEventListener("change", () => {
    displayTemp.style.display = "none"
})
