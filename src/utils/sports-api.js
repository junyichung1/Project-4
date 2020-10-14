const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = '/api/sportsApi';

export default {
    getSchedule,
    getTeams,
}


export function getSchedule() {
    return fetch(`${BASE_URL}/schedule`)
    .then(res => res.json());
  }

export function getTeams() {
    return fetch(`${BASE_URL}/teams`)
    .then(res => res.json());
  }





