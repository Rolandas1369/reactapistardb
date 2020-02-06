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
        // item get id from props
        return arr.map((item) => {
            const { id } = item;
            // children can have any sort of data
            const label = this.props.children(item);
           return (
                <li className="list-group-item"
                        key={id}
                        onClick={() => this.props.onItemSelected(id)}>
                    {label}
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
                <ul className="item-list list-group">
                    {items}
                </ul>
        );
    }
};
