import React, { Component } from 'react';

import './item-details.css'
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button/error-button';


const Record = ({ item, field, label }) => {
    return (
      <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{ item[field] }</span>
      </li>
    );
  };

  export {
    Record
  };



export default class PersonDetails extends Component{

    swapiService = new SwapiService();

    state = {
      item: null,
      image: null
    };
  

    componentDidMount() {
        
        this.updateItem();
       
    }

    // updates state from retrieved data and rerender info
    componentDidUpdate(prevProps){
        console.log("before")
        // update only if state is not updated
        if (this.props.itemId !== prevProps.itemId) {
            //this.setState({loading: true})
            this.updateItem();         
        } 
        console.log("after")      
    }

    // onPersonLoaded = (person) => {
    //     this.setState({
    //         person
            
    //     });
    // }

    // by clicking on person we are updating elements for this good to use is updatePerson()
    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
          return;
        }
    
        getData(itemId)
          .then((item) => {
            this.setState({
              item,
              image: getImageUrl(item)
            });
          });
      }

      render() {

        const { item, image } = this.state;
        if (!item) {
          return <span>Select a item from a list</span>;
        }
    
        const { id, name, gender,
                  birthYear, eyeColor } = item;
    
        return (
          <div className="item-details card">
            <img className="item-image"
              src={image}
              alt="item"/>
    
            <div className="card-body">
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                {
                    // passes children to map 
                  React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, { item });
                  })
                }
              </ul>
              <ErrorButton />
            </div>
          </div>
        );
      }
    }
