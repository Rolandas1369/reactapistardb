import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helper/with-data';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

// hoc function accepts components as args
// and function to children
const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({ model })</span>;

// adding this fuctions
// const ListWithChildren = withChildFunction(
//     ItemList,
//     renderName
// );

// to this componnets hoc are passed it accepts component with render fnction
const PersonList = withData(
                        withChildFunction(ItemList, renderName), 
                        getAllPeople);
const PlanetList = withData(
                        withChildFunction(ItemList, renderName), 
                        getAllPlanets);
const StarshipList = withData(
                        withChildFunction(ItemList, renderModelAndName), 
                        getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};
// component passes to component
// const comp = (x) => f(g(x));