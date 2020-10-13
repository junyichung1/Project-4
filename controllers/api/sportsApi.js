const fetch = require('node-fetch');
const API_KEY = process.env.REACT_APP_API_KEY;

module.exports = {
    getLeagueRecords,
}

async function getLeagueRecords() {
    console.log(`${API_KEY}`)
    fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookuptable.php?l=4391&s=2020`)
        .then(res => res.json())
        .then((data) => data)
  }