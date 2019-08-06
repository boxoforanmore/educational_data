import React from 'react';
import DonutChart from 'react-donut-chart';

export const race_ethnicity = [{
    'aian':                     'American Indian/Alaskan Native',
    'asian':                    'Asian',
    'asian_pacific_islander':   'Asian/Pacific Islander',
    'black':                    'Black',
    'black_non_hispanic':       'Black Non-Hispanic',
    'hispanic':                 'Hispanic',
    'nhpi':                     'Native Hawaiian/Pacific Islander',
    'non_resident_alien':       'Non-Resident Alien',
    'two_or_more':              'Two or More Races',
    'unknown':                  'Unknown',
    'white':                    'White'
}];


export class RaceEthnicity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {race_ethnicity: []};
        this.processData = this.processData.bind(this);
    }

    processData() {
        if (this.props.data) {
            let races = [];
            let data = this.props.data;

            for (key in data) {
                if ((Object.keys(data).includes(key)) && (data[key] > 0)) {
                    let percent = data[key] * 10;
                    races.push({
                       label: race_ethnicity[key],
                       value: percent
                    });
                }
            }

            this.setState({race_ethnicity: races});
        }
    }

    render() {
        if (!this.state.race_ethnicity) {
            this.processData();
            return (
                <p>Please wait while graph loads...</p>
            );
        }
        else {
            return (
                <div>
                    <h3>Race/Ethnicity Breakdown:</h3>
                    <DonutChart data={ this.state.race_ethnicity } />
                </div>
            );
        }
    }
}