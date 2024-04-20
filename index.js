// index.js
const chuck = require('chucknorris-io');

async function generateJoke() {
  try {
    const joke = await chuck.fetch('random');
    console.log(joke.value);
  } catch (error) {
    console.error('Error fetching Chuck Norris joke:', error.message);
  }
}

generateJoke();
