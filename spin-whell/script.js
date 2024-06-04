// script.js
const wheel = document.getElementById('wheel');
const nameInput = document.getElementById('nameInput');
const addNameButton = document.getElementById('addNameButton');
const wheelList = document.getElementById('wheelList');

const names = [];

addNameButton.addEventListener('click', () => {
  const newName = nameInput.value;
  if (newName) {
    names.push(newName);
    updateWheel();
    updateNamesList();
    nameInput.value = '';
  }
});

function updateWheel() {
  wheelList.innerHTML = '';
  const numSlices = names.length;
  const sliceAngle = 360 / numSlices;

  names.forEach((name, index) => {
    const li = document.createElement('li');
    li.textContent = name;
    li.style.transform = `rotate(${index * sliceAngle}deg)`;
    wheelList.appendChild(li);
  });
}

function updateNamesList() {
  // Update names list if needed
}

// Additional logic to make the wheel spin, you can implement this part if needed
