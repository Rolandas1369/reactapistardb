import React, { Component } from 'react';

import './people-page.css'

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';


export default class PeoplePage extends Component {
   
    state = {
        selectedPerson: 3,
        hasError: false
    };

    // separately looks for errors in app and crashes only this part of app
    componentDidCatch(error, info) {
        debugger;
        this.setState({
            hasError: true
        });
    }


    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    };
    
    render() {

        // looks for error
        if (this.state.hasError) {
            return <ErrorIndicator />
        }


        return (
            <div className="row mb2">
                <div className="col-md-6">
                    {/* function */}
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    {/* from state */}
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}