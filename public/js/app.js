const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = '';
messageTwo.textContent = '';

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const location = search.value;
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = '';
  fetch(`http://localhost:3000/weather?address=${location}`).then(async (resp) => {
    let data = await resp.json();
    if (data.error) {
      messageTwo.innerHTML = data.error;
      messageOne.innerHTML = '';
    } else {
      let content = `Location: ${data.location}<br>Forecast: ${data.forecastData}`;
      messageOne.innerHTML = content;
      messageTwo.innerHTML = '';
    }
  });
});
