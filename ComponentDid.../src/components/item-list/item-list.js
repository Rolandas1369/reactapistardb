import React, { Component } from 'react';

import './item-list.css'
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {
    
    swapiService = new SwapiService

    state = {
        peopleList : null
    };

    componentDidMount() {
        this.swapiService
        .getAllPeople()
        .then((peopleList) => {
            this.setState({
                peopleList
            });
        });
    }

    renderItems(arr) {
        // runs each id and name in list of returned data
        return arr.map(({id, name}) => {
           return (
                <li className="list-group-item"
                        key={id}
                        onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
           );
        });
    }

    render() {
        //from state
        const { peopleList } = this.state;

        // spinner if loading
        if (!peopleList) {
            return <Spinner />;
        }

        //above
        const items = this.renderItems(peopleList);

        return (
            <div>
                <ul className="item-list list-group">
                    
                    {items}
                </ul>
            </div>
        );
    }
};
