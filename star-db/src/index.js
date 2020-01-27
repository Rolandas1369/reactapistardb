
// https://swapi.co

//Tools for getting requests
//xmlhttprequest, fetch API
// libraries for api's Axios, seperagent, got, request, reqwest

// 3. moving all code to class
class SwapiService {

    _apiBase = 'https://swapi.co/api';

   async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        // checking if return status is okay
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        
        return await res.json();
    };

    async getAllPeople(){
        // wait for result
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id){
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets(){
        // wait for result
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id){
        return this.getResource(`/planets/${id}`);
    }

    async getAllStarships(){
        // wait for result
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id){ 
        return this.getResource(`/starships/${id}`);
    }

}


//const swapi = new SwapiService();
// swapi.getAllPeople().then((people) => {
//     people.forEach(element => {
//         console.log(element.name)
//     });
// });

// more nicer way
// const getResource = async (url) => {
//     const res = await fetch(url);

//     // checking if return status is okay
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
//     }
//     const body = await res.json();
//     return body;
// };

// getResource('https://swapi.co/api/people/1333/')
//     .then((body) => {
//         console.log(body)
//     })
//     .catch((err) => {
//         console.log('Could not fetch', err);
//     });

// returns promise
// res has few methods

// fetch('https://swapi.co/api/people/1/')
//     .then((res) => {
//         return res.json();
//     })
//     // res returns body
//     .then((body) => {
//         console.log(body);
//     });