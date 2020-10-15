const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = '/api/sportsApi';

export default {
    getSchedule,
    getTeams,
    getTeamSchedule
}


export function getTeamSchedule(id) {
  // console.log(`we in here`, id)
    return fetch(`${BASE_URL}/schedule/${id}`)
    .then(res => res.json());
  }

export function getSchedule() {
    return fetch(`${BASE_URL}/schedule`)
    .then(res => res.json());
  }

export function getTeams() {
    return fetch(`${BASE_URL}/teams`)
    .then(res => res.json());
  }





