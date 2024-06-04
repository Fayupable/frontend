const monthlyPaymentEl =document.getElementById('payment')
const monthToPayEl = document.getElementById('months-to-pay')
function calculateLoan(){
    loanAmountValue = document.getElementById('loan-amount').value;

    interestRateValue = document.getElementById('interest-rate').value;

    monthsToPayValue = document.getElementById('months-to-pay').value;

    interest= (loanAmountValue* (interestRateValue*0.01))/ monthsToPayValue;

    monthlyPayment = (loanAmountValue/monthsToPayValue + interest).toFixed(2);


    if(monthToPayEl.value <=6){
        alert('You can only pay for 6 months')

    }
    else{
        monthlyPaymentEl.innerHTML = `Your monthly payment is $${monthlyPayment}`

    }
}