import React, { Component } from 'react';

import './item-list.css'
//import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {
    
    // removing swapi service to props
    // replacing peoplelist to itemlist as more abstarct aproch

    state = {
        itemList : null
    };

    componentDidMount() {

        const { getData } = this.props;

        // we are getting data from props
        getData()
        .then((itemList) => {
            this.setState({
                itemList
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
        const { itemList } = this.state;

        // spinner if loading
        if (!itemList) {
            return <Spinner />;
        }

        //above
        const items = this.renderItems(itemList);

        return (
            <div>
                <ul className="item-list list-group">
                    
                    {items}
                </ul>
            </div>
        );
    }
};
