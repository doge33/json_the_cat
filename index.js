const {fetchBreedDescription} = require('./breedFetcher');

const breedName =  process.argv[2];

fetchBreedDescription(breedName, (error, description) => {

  if (error) {
    console.log("   WE'VE GOT ERROR~~~\n", error);

  } else {
    console.log(description);
  }
});
