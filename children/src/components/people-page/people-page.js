import React, { Component } from 'react';

import './people-page.css'

import ItemList from '../item-list';
import PersonDetails from '../person-details';

import SwapiService from '../../services/swapi-service';
import Row from  '../row';
import ErrorBoundary from '../error-boundary';


export default class PeoplePage extends Component {
    
    swapiService =  new SwapiService();

    state = {
        selectedPerson: 3,
    };




    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    };
    
    render() {

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {/* chilrens data */}
                {(i) => (
                  `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        );

        const personDetails = (
            <ErrorBoundary>
                <PersonDetails personId={this.state.selectedPerson}/>
            </ErrorBoundary>
        );

        return (
            <div>
                
                {/* abstracting more */}
                    <Row left={ itemList } right={ personDetails } />
                {/* wee can pass jsx tocompnent */}
                
                
            </div>
        )
    }
}