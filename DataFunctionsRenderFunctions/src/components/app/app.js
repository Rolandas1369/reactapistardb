import React, { Component } from 'react';

import './app.css'
import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';


// functions ca pass data extracting functions
// render function is function that is passed as function to display elements

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    // hides planet from view
    toggleRandomPlanet = () => {
        this.setState((state) => {
          return {
            showRandomPlanet: !state.showRandomPlanet
          }
        });
      };



    // this displays errors
    componentDidCatch() {
        console.log('componen');
        this.setState({hasError: true})
    }


    render() {

        // and displays it in main window or component root element works similar as try catch works on rendering or components life cycles
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div className="stardb-app">
                <Header />
                { planet }

                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle
                    </button>
                    <ErrorButton />
                </div>
                {/* moving component to people-page */}
                <PeoplePage />

                {/* now as refactoring is done we can man it more simple */}
                
                <div className="row mb2">
                    <div className="col-md-6">
                        {/* function */}
                        <ItemList onItemSelected={this.onPersonSelected}
                        // passing swapi service as function call to swapi
                        getData={this.swapiService.getAllPlanets}
                        // makes choices available
                        renderItem={(item) => (<span>{item.name} <button> !</button></span>)}/>
                    </div>
                    <div className="col-md-6">
                        {/* from state */}
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        {/* function */}
                        <ItemList onItemSelected={this.onPersonSelected}
                        // passing swapi service as function call to swapi
                        getData={this.swapiService.getAllStarships}
                        
                        renderItem={(item) => item.name} />
                    </div>
                    <div className="col-md-6">
                        {/* from state */}
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>



            </div>
        )
    }
};

