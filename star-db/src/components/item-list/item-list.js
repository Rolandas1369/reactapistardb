import React, { Component } from 'react';

import './item-list.css'

export default class ItemList extends Component {
    
    render() {
        return (
            <div>
                <ul className="item-list list-group">
                    <li className="list-group-item">
                        Luke
                    </li>
                    <li className="list-group-item">
                        Darth
                    </li>
                    <li className="list-group-item">
                        R2D2
                    </li>
                </ul>
            </div>
        );
    }
};
