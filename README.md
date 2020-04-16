# Movie Seat Booking 

## Project Preview
![](exchange-rate.gif)

## Summary
An exchange rate app with TS/Sass that uses local storage to persist data/selection in the browser. 

## How to Install
- `git clone` this repo
- No hard dependencies required to run so no need for `npm/yarn` installs. 
- Just open the `index.html` file or use server of your choice.
- Note: If modifying the file, and you have TS already installed, you can just call `tsc --watch` in the root project directory to compile your js into appropriate dir.
- I'd recommend using the VSCode Sass Plugin as well.  

## Project Insights
> [^**If we are using async/await and we want to parse the request into JSON in the same line, what must we remember to do?**]In turning this into an async operation instead of using promises. it is possible to just .json() on the awaited response, HOWEVER, (and can VSCODE correct this for you), since remember, res.json() would still return a promise you need to wrap everyything and await it as well...

```js {6-11}
async function calculate() {
    const currency_one: string = currencyEl_one.value;
    const currency_two: string = currencyEl_two.value;
    
    console.log(typeof currency_one, currency_two);
    fetch(`https://api.exchangeratesapi.io/latest?base=
    ${currency_one}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
}
```

This would need to be something like this... Paying attention to the wrapped await. 

```js {6-7}
async function calculate() {
    const currency_one: string = currencyEl_one.value;
    const currency_two: string = currencyEl_two.value;
    
    console.log(typeof currency_one, currency_two);
    const data = await (await fetch(`https://api.exchangeratesapi.io/latest?base=
    ${currency_one}`)).json();
}
```
You could of course break this up to two separate assignments. like...
```js
const rawResponse = await fetch(`https://api.exchangeratesapi.io/latest?base=
    ${currency_one}`); 
const parsedResponse = await rawResponse.json();
```
You'd still have to await `rawResponse` to be fufuilled.
 
- Note: Don't manually break lines, especially in your HTTP/API request query, lol. I was getting an error on the API side because I was requesting an endpoint with white-space.
- On Firefox browsers I was getting a red/error box-shadow on the second input, to fix this, I added a pseudo-selector to `input`... 
```scss {7-9}
input {
  border: none;
  background: transparent;
  font-size: 30px;
  text-align: right;

  &:invalid {
      box-shadow: none;
  }
}
```

## Sources
Traversy Media 20 Web Projects