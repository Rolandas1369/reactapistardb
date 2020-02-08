import React, { Component } from 'react';

import './app.css'
import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import ErrorBoundary from '../error-boundary';

import Row from "../row/row";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from '../../services/swapi-service';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';


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
            <ErrorBoundary>
              <div className="stardb-app">
                <Header />

                <PersonDetails itemId={11} />

                <PlanetDetails itemId={3} />

                <StarshipDetails itemId={5} />


                {/* hc-helpers contains functions with this components it is easier to read */}
                <PersonList>
                  { ({name}) => <span>{name}</span> }
                </PersonList>

                <StarshipList>
                  { ({name}) => <span>{name}</span> }
                </StarshipList>

                <PlanetList>
                  { ({name}) => <span>{name}</span> }
                </PlanetList>

                

                
      
                
              </div>
            </ErrorBoundary>
          );
        }
      }
