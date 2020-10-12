const API_KEY = process.env.REACT_APP_API_KEY;


export function getLeagueRecords() {
    console.log(`${API_KEY}`)
    return fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookuptable.php?l=4391&s=2020`)
        .then(res => res.json())
    // return fetch('/api/sportsdb')
    //     .then(res => res.json())
}

// export function getLeagueRecords(leagueID, year) {
//     console.log()
//     return fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookuptable.php?l=${leagueID}&s=${year}`)
//         .then(res => res.json())
// }



