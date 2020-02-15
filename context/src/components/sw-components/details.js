import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';

// as context is present now we dont need swapiservice

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            itemId={11}
                            getData={getPerson}
                            getImageUrl={getPersonImage} >
                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );

};
const PlanetDetails = ( {itemId}) => {
    return (
        // provides swapi service
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails
                            itemId={5}
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}>
                    
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation Period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
          
};
const StarshipDetails = (itemId) => {
    return (
            <SwapiServiceConsumer>
                {
                    ({getStarship, getStarshipImage}) => {
                        <ItemDetails
                            itemId={5}
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>
                    
                            <Record field="model" label="Model" />
                            <Record field="length" label="Length" />
                            <Record field="constInCredits" label="Cost" />
                        </ItemDetails>
                    }
                }
            </SwapiServiceConsumer>
    );
          
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
};