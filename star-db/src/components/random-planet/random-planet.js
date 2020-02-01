import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.css'
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';

// need to separate components ones for logic in app anothers for representation

export default class RandomPlanet extends Component {

    // initialization of planet
    swapiService = new SwapiService();

    // to get what is extracted from server we need to make element null
    state = {
        planet: {},
        // setting loading 
        loading: true,
        
    };

    // constructor call function imidiatly as code starts
    constructor() {
        super();
        this.updatePlanet();
    }

    // this function is passed to another function this is the case for arrow function becouse it stores data
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            // after planet is loaded loading is false now
            loading: false,
            // adding state value inside function
            error: false
            
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updatePlanet() {
        const id = 1000 //Math.floor(Math.random() * 25) + 2;
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        // handling errors
        .catch(this.onError);
    }
   

    render() {

        // first it looks at state planet when it is calling updatePlanet() from constructor updates state and return planet with data
        const { planet, loading, error } = this.state;

        // if it has data it loads planet in below
        const hasData = !(loading || error);

        // if it has error display indicator
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        
        // // checking to see if image is loading
        // if (loading) {
        //     return <Spinner />
        // }

        return (
                <div className="random-planet jumbotron rounded">
                    {/* i can only see spinner if loading */}
                    {errorMessage}
                    {spinner}
                    {content}
                    
                </div>
        )

    }
};

// moving react component inside component
const PlanetView = ( { planet }) => {

     // from state
    // then it call updatePlanet it returns planet object with this values
    const { id, name, population, rotationPeriod,
        diameter } = planet;

    return (
        // fragment doest create dom elements it makes posible of returning few elements
        <React.Fragment>
            <img className="planet-image"
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                 </ul>
            </div>
        </React.Fragment>
    )
};