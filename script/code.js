let dataEntry = document.querySelector('[data-entry]') 

function display (value) {
    dataEntry.value += value
}
//div has 2 types of content innerText and textContent to target the div we need to select the textContent. When using getById selector we need to make use of the innerText. (when using a div for display)