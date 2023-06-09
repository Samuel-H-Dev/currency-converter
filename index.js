const form = document.querySelector('form');   //grab the form 
form.addEventListener("submit", convertUSDtoWon);   //onsubmit

function convertUSDtoWon(event){ //Coversion
    event.preventDefault(); //stop form from refeshing page
    const usd = Number(event.target.usd.value);//get value from
    const won =usd / 0.00078; //conver to Wom
    //display to page
    document.querySelector('h2').innerText = "$" + usd.toLocaleString() + "USD is equal to " + won.toLocaleString() + "Korean Won";
}

