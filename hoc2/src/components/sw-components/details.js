import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;


const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >


                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
          
        </ItemDetails>
    );

};
const PlanetDetails = ( {itemId}) => {
    return (
    <ItemDetails
                itemId={5}
                getData={getPlanet}
                getImageUrl={getPlanetImage}>
          
                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="Rotation Period" />
                <Record field="diameter" label="Diameter" />
            </ItemDetails>
    );
          
};
const StarshipDetails = (itemId) => {
    return (
    <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
          
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="constInCredits" label="Cost" />
            </ItemDetails>
    );
          
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
};