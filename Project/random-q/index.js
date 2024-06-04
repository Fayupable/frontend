const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const apiURL = 'https://api.quotable.io/random';

async function getQuote() {

    try {
        btnEl.innerText = 'Loading...';
        btnEl.disabled = true;
        quoteEl.innerText = 'Updating...';
        authorEl.innerText = 'Updating...';

        await new Promise(resolve => setTimeout(resolve, 500));
        const response = await fetch(apiURL)
        const data = await response.json()
        const quoteContent = data.content;
        const quoteAuthor = '~' + data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = quoteAuthor;
        btnEl.innerText = 'New Quote';
        btnEl.disabled = false;
    } catch (error) {
        console.log(error);
        quoteEl.innerText = 'Oops! Something went wrong. Please try again later.';
        authorEl.innerText = 'Oops! Something went wrong. Please try again later.';
        btnEl.innerText = 'Error';
    }


}
getQuote();

btnEl.addEventListener('click', getQuote);