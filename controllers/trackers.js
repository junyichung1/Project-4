const API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env.REACT_APP_API_KEY)

module.exports = {
    getLeagueRecords,
  };

function getLeagueRecords() {
    console.log(`boobz`)
    return fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookuptable.php?l=4391&s=2020`)
        // .then(res => res.json())
        // .catch(err => console.log(err))
}