import React, { Component } from 'react';

import './app.css'
import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

export default class App extends Component {

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
                <PeoplePage />
                <PeoplePage />


            </div>
        )
    }
};

