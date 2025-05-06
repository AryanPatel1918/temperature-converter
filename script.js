const tempInput = document.getElementById("temp-el")
const ftocRadio = document.getElementById("ftoc")
const ctofRadio = document.getElementById("ctof")
const convertBtn = document.getElementById("convert-btn")
const displayTemp = document.getElementById("display-temp")

convertBtn.addEventListener("click", convert)

function convert() {

    const inputValue = parseFloat(tempInput.value)

    if (ftocRadio.checked) {
        const celsius = ((inputValue - 32) * 5/9).toFixed(2)
        displayTemp.textContent = `${celsius} °C`;
    } else if (ctofRadio.checked) {
        const fahrenheit = ((inputValue * 9/5) + 32).toFixed(2)
        displayTemp.textContent = `${fahrenheit} °F`
    } else {
        displayTemp.textContent = "Please select a conversion type."
    }
}

