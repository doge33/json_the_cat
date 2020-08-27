const request = require('request');

const url = process.argv.slice(2).join("");

request(`https://api.thecatapi.com/v1/breeds/search?q=${url}`, (error, response, body) => {

  if (error) {
    console.log("    Oops! We've got an ERRORRRR~~~~~ \n", error);

  } else {

    const data = JSON.parse(body);
    if (!data[0]) {
      console.log(`failed to find breed: ${url}`);

    } else {
      console.log(data[0].description);
    }
  }
});
