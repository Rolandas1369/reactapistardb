import React, { Component } from 'react';

import './app.css'
import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boundary';
import ItemDetails from '../item-details';
import ItemList from '../item-list';
import Row from '../row';


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

        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService
        
        // spliting containers -> 
        const personDetails = (
            <ItemDetails 
                itemId={11} 
                getData={getPerson} 
                getImageUrl={getPersonImage}/>
        )

        const starshipDetails = (
            <ItemDetails 
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}/>
        )
        return (
            <ErrorBoundary>
                <div className="stardb-app">
                    <Header />
                    <Row left={personDetails} right={starshipDetails}/>
                </div>
            </ErrorBoundary>
        )
    }
};

