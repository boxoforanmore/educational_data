import React from 'react';
import ReactDOM from 'react-dom';

const API_URL = "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key="

class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:     null, 
                      isLoaded: true,
                      error:    null};
    }

    componentDidMount() {
        fetch(API_URL + API_KEY)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items:    result,
                });
            },
            // Handle errors here
            (error) => {
                this.setState({
                    isLoaded: true,
                    error:    error
                });
            }
        )
    }

    render() {
        if error:
            return <ErrorHandler />;
        else:
            return (

                <DataHandler data={this.state.data} isLoaded={this.state.isLoaded} />

                   );
    }
}

ReactDOM.render(
    <MainApp />,
    document.getElementById('app'));
