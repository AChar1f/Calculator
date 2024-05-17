let dataEntry = document.querySelector('[data-entry]') 

function display (value) {
    dataEntry.value += value
}

function allclear() {
    dataEntry.value = ''
}

function lastClear() {
    let currentValue = dataEntry.value
    dataEntry.value = currentValue.slice(0, -1)
}

function result() {
    try {
        let ans = dataEntry.value
        ans = ans.replace(/%/g,'/100')
        let calc1 = eval(ans)
        dataEntry.value = calc1
    } catch (error) {
        dataEntry.value = 'Error'
            
        } 
}

//div has 2 types of content innerText and textContent to target the div we need to select the textContent. When using getById selector we need to make use of the innerText. (when using a div for display)
//replace tells which variable to replace for the item that is between a (//).
//g represents replace globally
//try and catch tests if the code works if  not it will use catch to display the alert if it doesnt work. 