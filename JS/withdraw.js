document.getElementById("withdraw").addEventListener("click", ()=>{
    const widthdrawInput = document.getElementById("widthdraw-input");
    const numberWithdrawInput = parseFloat(widthdrawInput.value);

    if(isNaN(numberWithdrawInput) || numberWithdrawInput<=0 ){
        return alert("Invalid ammount. please type a valid ammount")
    }

    let widthdrawDiplay = document.getElementById("widthdraw-display");
    const prevWithdrawValue = parseFloat(widthdrawDiplay.innerText);
    widthdrawDiplay.innerText = numberWithdrawInput + prevWithdrawValue;

    const balance = document.getElementById("balance");
    const prevValance = parseFloat(balance.innerText) ;

   
    if(prevValance < numberWithdrawInput){
        return alert(" Tur Baaper eto Taka nai beda")
    }
    balance.innerText = prevValance - numberWithdrawInput ;
    widthdrawInput.value =" "

    // if (widthdrawInput.value > prevValance ) {
    //     alert(" Bagh Sala !! Ture Baaper eto Taka nai ")
    // }else{
    //     return
    // }
})