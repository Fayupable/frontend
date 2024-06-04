const apiKey = 'lnt4uNaXowVdBQz0rqBkcQ==pmE8zFRjKuvpI98J';
const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey
    },

}
const btnElement = document.getElementById('btn');
const jokeElement = document.getElementById('joke');


 async function getJoke() {
    try {
        jokeElement.innerText = 'Updating...';
        btnElement.disabled = true;
        btnElement.innerText = 'Loading...';
        const response = await fetch(url, options);
        const data = await response.json();
        btnElement.disabled = false;
        btnElement.innerText = 'Get Joke';
        jokeElement.innerText = data[0].joke;
        
    } catch (error) {
        jokeElement.innerText = 'Something went wrong, try again later';
        console.log(error);        
    }

}


btnElement.addEventListener('click', getJoke);