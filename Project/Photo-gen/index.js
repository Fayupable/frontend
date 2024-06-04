const btnEl = document.getElementById('btn');
const  animeContainerEl= document.querySelector('.anime-container');
const animePicEl = document.querySelector('.anime-picture');
const animeNameEl = document.querySelector('.anime-name');


btnEl.addEventListener('click', async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
        animeNameEl.innerText = 'Updating...';
        animePicEl.src = 'photo/spinner.svg';
        const response = await fetch('https://api.catboys.com/img')
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = 'Get Anime Picture';
        animeContainerEl.style.display= 'block';
        animePicEl.src = data.url;
        animeNameEl.innerText = data.artist;
    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = 'Get Anime Picture';
        animeNameEl.innerText = 'Error';
    }

})