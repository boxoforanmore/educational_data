import React from 'react';
import ReactDOM from 'react-dom';
import { DataHandler } from './DataHandler.jsx';
//import { ErrorHandler } from './ErrorHandler.jsx';

const API_URL = "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=";

class MainApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {results:  [], 
                      isLoaded: false,
                      error:    null};

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch(API_URL + API_KEY)
            .then(res => res.json())
            .then(
                (response) => {
                    this.setState({
                        isLoaded: true,
                        results: response
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error: error
                    });
                }
            );
    }

    render() {
        if (this.state.error) {
            return <p>There was an error with the API call</p>;
        }
        else if (!this.state.isLoaded) {
            return <p>Loading...</p>;
        }
        else {
            return (
                <DataHandler data={ this.state.results } isLoaded={ this.state.isLoaded } />
            );
        }
        
        /*
        console.log('help me');
        if (this.state.error) {
            return <ErrorHandler />;
        }
        else {
            return (

                <DataHandler data={this.state.data} isLoaded={this.state.isLoaded} />

            );
        }
        */
    }
}

ReactDOM.render(
    <MainApp />,
    document.getElementById('app'));
