import React, {Component} from 'react';
import Spinner from '../spinner';
import ErroIndicator from '../error-indicator';

// can return class or component in functions
// separate component with pasing class as argument this component returns view(or can return any component)
const withData = (View, getData) => {
    return class extends Component {

        // moving logic to new class function
        state = {
            data : null
        };
    
        componentDidMount() {
    
    
            // we are getting data from props
            getData()
            .then((data) => {
                this.setState({
                    data
                });
            });
        }

        render() {

             

            //from state
            const { data } = this.state;

            // spinner if loading
            if (!data) {
                return <Spinner />;
        }

            return <View {...this.props} data={data} />
        }
    };
};

export {
    withData
};