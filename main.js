const fillGasTank = (gallons) => {
    if (gallons < 15) {
        console.log(`I filled the tank with ${gallons} of gas`)
    } else {
        console.log("You cannot add this much gas to the tank")
    }
    
}

fillGasTank(26)

//this function begins with the varible fillFasTank that takes the parameter gallons
//inside the function body there is an if else statment that states
//if gallons is more that 15 log to the console `I filled the tank with ${gallons} of gas`
//else log to the console "You cannot add this much gas to the tank"