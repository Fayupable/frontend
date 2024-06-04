const currencyFirstEl = document.getElementById('currency-first');
const currencySecondEl = document.getElementById('currency-second');
const worthFirstEl = document.getElementById('worth-first');
const worthSecondEl = document.getElementById('worth-second');
const exchangeRateEl = document.getElementById('exchange-rate');
// 94076503b598b1575a6988a0

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/94076503b598b1575a6988a0/latest/${currencyFirstEl.value}`).then((res) => res.json()).then((data) => {
        const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
          rate + " " + currencySecondEl.value
        }`;
  
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
      });
  }
currencyFirstEl.addEventListener('change', updateRate);
currencySecondEl.addEventListener('change', updateRate);

worthFirstEl.addEventListener('input', updateRate);