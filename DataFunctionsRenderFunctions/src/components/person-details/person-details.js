import React, { Component } from 'react';

import './person-details.css'
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button/error-button';

export default class PersonDetails extends Component{

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        
        this.updatePerson();
       
    }

    // updates state from retrieved data and rerender info
    componentDidUpdate(prevProps){
        console.log("before")
        // update only if state is not updated
        if (this.props.personId !== prevProps.personId) {
            this.setState({loading: true})
            this.updatePerson();          
        } 
        console.log("after")      
    }

    onPersonLoaded = (person) => {
        this.setState({
            person
            
        });
    }

    // by clicking on person we are updating elements for this good to use is updatePerson()
    updatePerson = () => {

        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ loading:false, person });
      });
    }

    render() {

        const { person, loading } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PersonView person={person}/> : null;

        if (!this.state.person) {
            return <span>Select a perosn from  alist</span>;
        }

        return (
            <div className="person-details card">
                {spinner}
                {content}
            </div>
        )
    }
};

const PersonView = ({person}) => {
    const {
        id, name, gender, birthYear, eyeColor
    } = person;

    return (
        <React.Fragment>
            <img className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
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

