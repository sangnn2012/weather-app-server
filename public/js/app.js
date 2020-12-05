fetch("http://puzzle.mead.io/puzzle").then(async (resp) => {
  let data = await resp.json();
  console.log(data);
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const location = search.value;
  console.log({ location });

  fetch(`http://localhost:3000/weather?address=${location}`).then(async (resp) => {
    let data = await resp.json();
    if (data.error) {
      return console.log(err);
    }
    console.log(data.location);
    console.log(data.forecastData);
  });
});
