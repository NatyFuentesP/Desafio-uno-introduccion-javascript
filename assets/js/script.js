let productPrice = 49000

let productQuantity = document.querySelector("#productAmount")
let choosenColor = document.querySelector("#productColor")

let button = document.querySelector("#total")

button.addEventListener("click", () => {
    document.querySelector("#totalPrice").innerHTML = productQuantity.value * productPrice
    document.querySelector("#totalAmount").innerHTML = productQuantity.value
    document.querySelector("#colorChanger").style.backgroundColor = choosenColor.value

})