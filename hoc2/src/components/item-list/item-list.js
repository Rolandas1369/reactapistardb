import React, { Component } from 'react';

import './item-list.css'
//import SwapiService from '../../services/swapi-service';

import {withData} from '../hoc-helper/with-data';
import SwapiService from '../../services/swapi-service';

const ItemList = (props) => {
    
    // removing swapi service to props
    // replacing peoplelist to itemlist as more abstarct aproch

        // interacts with lower 
        const { data, onItemSelected, children: renderLabel } = props;

        //above
        const items = data.map((item) => {
            const { id } = item;
            // children can have any sort of data
            const label = renderLabel(item);
           return (
                <li className="list-group-item"
                        key={id}
                        onClick={() => onItemSelected(id)}>
                    {label}
                </li>
           );
        });

        return (
                <ul className="item-list list-group">
                    {items}
                </ul>
        );
};


export default ItemList;