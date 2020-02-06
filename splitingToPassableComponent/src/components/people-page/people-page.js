import React, { Component } from 'react';

import './people-page.css'

import ItemList from '../item-list';
import ItemDetails from '../item-details';

import SwapiService from '../../services/swapi-service';
import Row from  '../row';
import ErrorBoundary from '../error-boundary';


export default class PeoplePage extends Component {
    
    swapiService =  new SwapiService();

    state = {
        selectedItem: 3,
    };




    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        });
    };
    
    render() {

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople}>

                {/* chilrens data */}
                {(i) => (
                  `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        );

        const itemDetails = (
            <ErrorBoundary>
                <ItemDetails itemId={this.state.selectedItem}/>
            </ErrorBoundary>
        );

        return (
            <div>
                
                {/* abstracting more */}
                    <Row left={ itemList } right={ itemDetails } />
                {/* wee can pass jsx tocompnent */}
                
                
            </div>
        )
    }
}