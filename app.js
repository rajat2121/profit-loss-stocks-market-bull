var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#qty-stock");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#sbmt-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click",submitHandler);

function submitHandler(){
    var inprice = Number(initialPrice.value) ;
    var totalStocks = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    
 if(inprice&&totalStocks&&curr)
 {
    if( (inprice >0 && totalStocks > 0 && curr > 0 ) ) {
    profitAndLossCalculator(inprice,totalStocks,curr);
} else {
    showMessage("Please input positive value");
}
 }else {
     showMessage("Please Input Fields");
 }

}

function profitAndLossCalculator(inpr,stqty,crnt){
    if(inpr > crnt) {
       var loss = (inpr-crnt)*stqty;
       var lossPer = ((inpr-crnt)/inpr)*100;
        showMessage(`Your loss is ${loss}Rs and Loss Percentage is ${lossPer}%`);
        
    } else if (crnt > inpr){
        var profit = (crnt-inpr)*stqty;
        var profitPer = ((crnt-inpr)/inpr)*100;
        showMessage(`Your Profit is ${profit}Rs and Percentage is ${profitPer}%`);
    }else {
       showMessage("No Pain No Gain");
    }
}

function showMessage (msg){
    outputBox.innerHTML = msg;
}