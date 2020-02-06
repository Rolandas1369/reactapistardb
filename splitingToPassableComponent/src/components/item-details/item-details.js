import React, { Component } from 'react';

import './item-details.css'
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button/error-button';

export default class ItemDetails extends Component{

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        // new state
        image: null
    }

    componentDidMount() {
        
        this.updateItem();
       
    }

    // updates state from retrieved data and rerender info
    componentDidUpdate(prevProps){
        console.log("before")
        // update only if state is not updated
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({loading: true})
            this.updateItem();          
        } 
        console.log("after")      
    }

    onItemLoaded = (item) => {
        this.setState({
            item
        });
    }

    // by clicking on item we are updating elements for this good to use is updateItem()
    updateItem = () => {

        // getting data as getData function
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        
        getData(itemId)
            .then((item) => {
            this.setState({ 
                loading:false, 
                item,
                // updating image from app props 
                image: getImageUrl(item) });
      });
    }

    render() {

        const { item, loading, image } = this.state;

        const spinner = loading ? <Spinner /> : null;
        // passing state to compnent
        const content = !loading ? <ItemView item={item} image={image}/> : null;

        if (!this.state.item) {
            return <span>Select a perosn from  alist</span>;
        }

        return (
            <div className="item-details card">
                {spinner}
                {content}
            </div>
        )
    }
};

// state is passable
const ItemView = ({item, image}) => {

      

    const {
        id, name, gender, birthYear, eyeColor
    } = item;

    

    return (
        <React.Fragment>
            <img className="item-image"
                    src={image} 
                    alt="item"/>
                <div className="card-body">
                    <h4>{name} {id} </h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>    
        </React.Fragment>
    )
};

