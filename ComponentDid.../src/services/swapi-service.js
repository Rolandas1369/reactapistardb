
// https://swapi.co

//Tools for getting requests
//xmlhttprequest, fetch API
// libraries for api's Axios, seperagent, got, request, reqwest

// 3. moving all code to class
export default class SwapiService {

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
        return res.results.map(this._transformPerson);
    }

    // getPerson(id){
    //     return this.getResource(`/people/${id}`);
    // }

    async getPerson(id){
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    async getAllPlanets(){
        // wait for result
        const res = await this.getResource(`/planets/`);
        // runs all planets and gets all planets data
        return res.results.map(this._transformPlanet);
    }

    // getPlanet(id){
    //     return this.getResource(`/planets/${id}`);
    // }

    // changing upper function to this function (mars -> mars data)
    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    async getAllStarships(){
        // wait for result
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    // getStarship(id){ 
    //     return this.getResource(`/starships/${id}`);
    // }

    async getStarship(id){ 
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }


    _extractId(item) {
        // extracting id from url
        const idRegExp = /\/([0-9]*)\/$/;
        // url is from server swapi server is calling  
        return item.url.match(idRegExp)[1];
        
    }


    // furnction for getting data from server
    _transformPlanet = (planet) => {

        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_Period,
            diameter: planet.diameter
        };
    }

    // same as planet
    _transformStarship = (starship) => {
            return {
                id: this._extractId(starship),
                name: starship.name,
                model: starship.model,
                manufacturer: starship.manufacturer,
                constInCredits: starship.constInCredits,
                length: starship.length,
                crew: starship.crew,
                passengers: starship.passengers,
                cargoCapacity: starship.cargoCapacity
            };
        }

    // same data tranformation
    _transformPerson = (person) => {

        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
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