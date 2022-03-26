function conversion(){
    // Getting input value from page then conversion of values
    let inputEl = document.getElementById('input-el').value
    let feet = inputEl*3.28084;
    let litres = inputEl*0.2641722;
    let kilograms = inputEl*2.20462
    
    // Rendering calculated values to page

    let feets_value = document.getElementById('meter')
    feets_value.innerText = ` ${inputEl} Meter = ${feet.toFixed(3)} feet | ${feet.toFixed(3)} feet =  ${inputEl} Meter `
    let litres_value = document.getElementById('litres')
    litres_value.innerText = ` ${inputEl} Litres = ${litres.toFixed(3)} Gallons | ${litres.toFixed(3)} Gallons =  ${inputEl} Litres `
    let kilograms_value = document.getElementById('kilograms')
    kilograms_value.innerText = ` ${inputEl} Kilograms = ${kilograms.toFixed(3)} Pounds | ${kilograms.toFixed(3)} Pounds =  ${inputEl} Kilograms `

}
// To block other inputs coming from keyboard

document.querySelector("input").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
})

//  Event listener to run conversion function 

addEventListener("keyup", function (e) {
    conversion()
      
  });


