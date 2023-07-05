const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const mode = document.getElementById("mode-icon");
mode.addEventListener("click", () => {
    const form = document.getElementById("form-all")

    if (mode.classList.contains("fa-moon")) {
        mode.classList.remove("fa-moon")
        mode.classList.add("fa-sun")


        form.classList.add("dark")
        return
    }
    mode.classList.add("fa-moon")
    mode.classList.remove("fa-sun")
    form.classList.remove("dark")

});


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const euroToday = 6.2
    const dolarToday = 5.2
    const libraToday = 6.1
    const bitcoinToday = 148755.00


    if (currencySelect.value == "dolar") { // se o select estiver no dolar, faça isso / / 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") // se o select estiver no euro, faça isso
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)


    if (currencySelect.value == "libra") // se o select estiver no libra, faça isso
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    if (currencySelect.value == "bitcoin") // se o select estiver no bitcoin, faça isso
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}





function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")



    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1 (1).png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1 (1).png"
    }


    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1 (1).png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2 (1).png"
    }




    convertValues()
}






currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)














