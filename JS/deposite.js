document.getElementById("btn-deposite").addEventListener("click", ()=>{
 const depositeInput = document.getElementById("deposite-input");
 let depositePrevValue = parseFloat(depositeInput.value) ;
 if (isNaN(depositePrevValue) || depositePrevValue <= 0  ) {
    return alert(" Invalid number ! Please Type a valid number ")
 }
  
 let depositeDisplay = document.getElementById("deposite-display");
 const depositeDisplayNumber = parseFloat(depositeDisplay.innerText)

 console.log(depositeDisplayNumber);
 let depositCurrentValue = depositeDisplay.innerText = depositeDisplayNumber + depositePrevValue;


 const balance = document.getElementById("balance");
 const prevValance = parseFloat(balance.innerText) ;

 balance.innerText = prevValance + depositePrevValue;
 depositeInput.value =" "
})