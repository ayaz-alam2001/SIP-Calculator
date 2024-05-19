var amountInvested = document.querySelector(".amount");
var rateOfReturn = document.querySelector(".rate");
var time = document.querySelector(".years");

function calculateSIP(){
    var monthlyRate = rateOfReturn.value/12/100;
    var months = time.value*12;
    var futureValue = 0;
    futureValue = amountInvested.value*(Math.pow(1+monthlyRate,months)-1)/monthlyRate;
    var amountTotalInvested = amountInvested.value*months;
    document.getElementById("amount1").innerHTML = "₹" + amountTotalInvested;
    document.getElementById("futureValue").innerHTML = "₹" + Math.round(futureValue>0?futureValue:0);
}