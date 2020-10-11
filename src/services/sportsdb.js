const API_KEY = process.env.API_KEY;


export function getLeagueRecords() {
    console.log(`is this working?`)
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4391&s=2020`)
        .then(res => res.json())
        
}

// export function getLeagueRecords(leagueID, year) {
//     console.log()
//     return fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookuptable.php?l=${leagueID}&s=${year}`)
//         .then(res => res.json())
// }



