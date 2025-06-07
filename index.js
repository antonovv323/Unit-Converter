const meterToFeet = 3.280839895
const literToGallon = 0.264172052
const kiloToPound = 2.2046226218

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const clearAllBtn = document.getElementById("clear-all-btn")
const conversionLengthParagraph = document.getElementById("conversion-length-paragraph")
const conversionVolumeParagraph = document.getElementById("conversion-volume-paragraph")
const conversionMassParagraph = document.getElementById("conversion-mass-paragraph")

inputEl.addEventListener("input", function () {
    // всеки символ, който не е цифра (0–9), се маха веднага:
    this.value = this.value.replace(/\D/g, "")
  })

  convertBtn.addEventListener("click", function() {
    let inputValue = inputEl.value // тук вече е или "" или поредица цифри

    // 1) Ако е празно поле:
    if (inputValue === "") {
        alert("Enter a number between 1 and 1000000 – no more, no less! 🌟🔢🚀");
        conversionLengthParagraph.innerHTML = "0 meters = 0.000 feet | 0 feet = 0.000 meters"
        conversionVolumeParagraph.innerHTML = "0 litres = 0.000 gallons | 0 gallons = 0.000 litres"
        conversionMassParagraph.innerHTML = "0 Kilos = 0.000 pounds | 0 pounds = 0.000 kilos"
        return
    }

    // 2) Превръщаме в число
    inputValue = Number(inputValue)

    // 3) Проверка за диапазон (1–1 000 000)
    if (inputValue < 1 || inputValue > 1000000) {
        alert("Enter a number between 1 and 1000000 – no more, no less! 🌟🔢🚀");
        conversionLengthParagraph.innerHTML = "0 meters = 0.000 feet | 0 feet = 0.000 meters"
        conversionVolumeParagraph.innerHTML = "0 litres = 0.000 gallons | 0 gallons = 0.000 litres"
        conversionMassParagraph.innerHTML = "0 Kilos = 0.000 pounds | 0 pounds = 0.000 kilos"
        inputEl.value = ""
        return
    }

    // 4) Ако стигнем дотук, работим с валиден inputValue:
    conversionLengthParagraph.innerHTML = 
        `${inputValue} meters = ${(inputValue * meterToFeet).toFixed(3)} feet | `
      + `${inputValue} feet = ${(inputValue / meterToFeet).toFixed(3)} meters`

    conversionVolumeParagraph.innerHTML = 
        `${inputValue} liters = ${(inputValue * literToGallon).toFixed(3)} gallons | `
      + `${inputValue} gallons = ${(inputValue / literToGallon).toFixed(3)} liters`

    conversionMassParagraph.innerHTML = 
        `${inputValue} kilos = ${(inputValue * kiloToPound).toFixed(3)} pounds | `
      + `${inputValue} pounds = ${(inputValue / kiloToPound).toFixed(3)} kilos`
})

clearAllBtn.addEventListener("click", function() {
    conversionLengthParagraph.textContent = "0 meters = 0.000 feet | 0 feet = 0.000 meters"
    conversionVolumeParagraph.textContent = "0 litres = 0.000 gallons | 0 gallons = 0.000 litres"
    conversionMassParagraph.textContent = "0 Kilos = 0.000 pounds | 0 pounds = 0.000 kilos"
    inputEl.value = ""
})