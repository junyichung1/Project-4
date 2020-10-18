const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require('axios');
const leagueLookup = {
    nfl: 4391,
    nhl: 4380,
    nba: 4387,
    mlb: 4424
}

module.exports = {
    getLeagueRecords,
    leagueDetail,
    getTeamSchedule
}
// axios.get(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsnext.php?id=${req.params.id}`)


function getTeamSchedule(req, res) {
    // console.log(`test 2`, req.params.id)
    axios.get(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventslast.php?id=${req.params.id}`)
    .then(function (response) {
    // handle success
        // console.log(response.data);
        res.json(response.data)
    })
    .catch(function (error) {
    // handle error
        console.log(error);
    })
}

function leagueDetail(req, res) {
    axios.get(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookup_all_teams.php?id=4391`)
    .then(function (response) {
    // handle success
        // console.log(response);
        res.json(response.data)
    })
    .catch(function (error) {
    // handle error
        console.log(error);
    })
}

function getLeagueRecords(req, res) {
    console.log(`${API_KEY}`)
    axios.get(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsseason.php?id=4391&s=2020`)
    .then(function (response) {
    // handle success
        console.log(response);
        res.json(response.data)
    })
    .catch(function (error) {
    // handle error
        console.log(error);
    })
    }

  