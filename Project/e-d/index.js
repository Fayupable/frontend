const inputEl = document.getElementById('input');
const infoTextEl = document.getElementById('info-text');
const meaningContainerEl = document.getElementById('meaning-container');
const titleEl = document.getElementById('title');
const meainingEl = document.getElementById('meaning');
const audioEl = document.getElementById('audio');


async function fetchApi(word) {
    try {
        infoTextEl.style.display = 'block';
        meaningContainerEl.style.display = 'block';
        infoTextEl.innerText = `Searching the meaining of '${word}'...`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json());

        if (result.title) {
            meainingEl.style.display = 'block';
            infoTextEl.style.display = 'none';
            titleEl.innerText = word;
            meainingEl.innerText = 'N/A';
            audioEl.style.display = 'none';

        } else {
            infoTextEl.style.display = 'none';
            meainingEl.style.display = 'block';
            audioEl.style.display = 'inline-flex';
            titleEl.innerText = result[0].word;
            meainingEl.innerText = result[0].meanings[0].definitions[0].definition;
            audioEl.src = result[0].phonetics[0].audio;
        }



    } catch (error) {
        console.log(error);
        infoTextEl.innerText = `Cannot find the meaning of '${word}'. Please try another word.`;


    }



}

inputEl.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === 'Enter') {
        fetchApi(e.target.value)

    }
})