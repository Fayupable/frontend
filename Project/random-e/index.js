const btnElement = document.getElementById('btn');
const emojiNameElement = document.getElementById('emoji-name');


// 0d6da51a7ebdf10fbfcfcfb2796b0ae7f3f52bcb

const emoji = [];
async function getEmoji() {
    let response = await fetch('https://emoji-api.com/emojis?access_key=0d6da51a7ebdf10fbfcfcfb2796b0ae7f3f52bcb');
    data = await response.json();


    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,


        });
    }
}
getEmoji();

btnElement.addEventListener('click', (e) => {
    const randomNumber= Math.floor(Math.random()*emoji.length);
    btnElement.innerText = emoji[randomNumber].emojiName;
    emojiNameElement.innerText = emoji[randomNumber].emojiCode;

})