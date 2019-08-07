import React from 'react';
//import DonutChart from 'react-donut-chart';
import { DonutChartGrapher } from './DonutChartGrapher.jsx';


export const race_ethnicity = {
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
    'white':                    'White',
    'white_non_hispanic':       'White (Non-Hispanic)'
};


export class RaceEthnicity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            processed: false
        };

        this.processData = this.processData.bind(this);
        this.numberTrimmer = this.numberTrimmer.bind(this);
    }

    numberTrimmer(num) {
        let str_num = num.toString();
        return Number(str_num.substring(0,4));
    }

    processData() {
        let races = [];
        let data = this.props.data;
        let keys = Object.keys(race_ethnicity);
        let num = null;

        for (var key in data) {
            if ((keys.includes(key)) && (data[key] > 0)) {

                num = this.numberTrimmer((data[key] * 100));

                races.push([
                    (race_ethnicity[key] + ' - ' + num),
                    num
                ]);
            }
        }

        this.setState({
            data: (races.sort(function(a,b){return b[1]-a[1]})),
            processed: true
        });
    }

    render() {
        return (
            <div>
                <h3>Race and Ethnicity:</h3>
                <DonutChartGrapher data={ this.state.data } 
                                   processed={ this.state.processed }
                                   processData={ this.processData }
                                   positionn='right'
                                   name='Latest Race/Ethnicity Report' />
            </div>
        );
    }
}