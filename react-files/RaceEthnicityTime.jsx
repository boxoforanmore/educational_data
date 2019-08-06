import React from  'react';
import { race_ethnicity } from './RaceEthnicity.jsx';
import { YearlyDataGrapher } from './YearlyDataGrapher.jsx';


let race_ethnicity_flip = {};

for (key in race_ethnicity) {
    race_ethnicity_flip[race_ethnicity[key]] = key;
}

export class RaceEthnicityTime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series_data: [],
            preprocessed: false 
        };
        this.processData = this.processData.bind(this);
    }

    processData() {
        let data = this.props.data;
        let processed = [];

        for (key in race_ethnicity_flip) {
            let dict = {};
            dict["name"] = key;
            dict["data"] = {};

            for (year in data) {
                // Check if value is actually a year
                if (Number(year)) {
                    let num = data[year].student.demographics.race_ethnicity[race_ethnicity_flip[key]]
                    dict["data"][year] = (num > 0 ? num : 0);
                }
            }

            processed.push(dict);
        }
        this.setState({
            series_data: processed,
            preprocessed: false
        });
    }

    return() {
        <YearlyDataGrapher processed={ this.state.preprocessed } 
                           processData={ this.processData } 
                           data={ this.state.series_data } />
    }
}