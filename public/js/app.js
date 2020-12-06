fetch("http://puzzle.mead.io/puzzle").then(async (resp) => {
  let data = await resp.json();
  console.log(data);
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = '';
messageTwo.textContent = '';

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const location = search.value;
  fetch(`http://localhost:3000/weather?address=${location}`).then(async (resp) => {
    let data = await resp.json();
    if (data.error) {
      messageTwo.textContent = data.error;
      messageOne.textContent = '';
    } else {
      let content = `Location: ${data.location}<br>Forecast: ${data.forecastData}`;
      messageOne.innerHTML = content;
      messageTwo.innerHTML = '';
    }
  });
});
