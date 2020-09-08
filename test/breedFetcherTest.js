const {fetchBreedDescription} = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) =>{
    //use done() when testing for asynchronous functions.
    fetchBreedDescription('Siberian', (error, description) => {

      assert.equal(error, null); //no error so error is equal to null here!!!

      const expectedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      assert.equal(expectedDescription, description);

      done();
    });
  });

  it('returns a not-found message when breed is invalid string or nonexistence', (done) => {

    fetchBreedDescription('abcdefg', (error, description) => {

      assert.equal(error, null);

      const expectedDescription = "Can't find 🐱breed!";

      assert.equal(expectedDescription, description);

      done();
    });
  });
});