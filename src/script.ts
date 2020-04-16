const currencyEl_one: any = document.getElementById('currency-one');
const amountEl_one: any = document.getElementById('amount-one');
const currencyEl_two: any = document.getElementById('currency-two');
const amountEl_two: any = document.getElementById('amount-two');
const rateEl: any = document.getElementById('rate');
const swap: any = document.getElementById('swap');

// Fetch Exchange rates and update the DOM
async function calculate() {
    const currency_one: string = currencyEl_one.value;
    const currency_two: string = currencyEl_two.value;
    
    const data = await (await fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)).json();
    const rate = await data.rates[currency_two];

    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

    amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
}

calculate(); 

/*--- EVENT LISTENERS ---*/
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    // Using destructuring instead to swap...
    [currencyEl_one.value, currencyEl_two.value] = 
    [currencyEl_two.value, currencyEl_one.value]
    calculate();
});