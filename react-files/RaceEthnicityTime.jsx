import React from  'react';
import { race_ethnicity } from './RaceEthnicity.jsx';
import { SeriesDataGrapher } from './SeriesDataGrapher.jsx';


let race_ethnicity_flip = {};

for (var key in race_ethnicity) {
    race_ethnicity_flip[race_ethnicity[key]] = key;
}

export class RaceEthnicityTime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series_data: [],
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
        let data = this.props.data;
        let processed = [];
        let dict = {};

        for (var key in race_ethnicity_flip) {
            dict = {};
            dict["name"] = key;
            dict["data"] = {};

            for (var year in data) {
                // Check if value is actually a year
                if (Number(year) > 0) {
                    let num = data[year].student.demographics.race_ethnicity[race_ethnicity_flip[key]];
                    dict["data"][year] = (num > 0 ? (this.numberTrimmer(num * 100)) : null);
                }
            }

            processed.push(dict);
        }
        this.setState({
            series_data: processed,
            processed: true
        });
    }

    render() {
        return (
            <div>
                <h3>Race/Ethnicity Reporting by Year</h3>
                <SeriesDataGrapher processed={ this.state.processed } 
                                   processData={ this.processData } 
                                   data={ this.state.series_data }
                                   name='Race/Ethnicity Reporting by Year' />
            </div>
        );
    }
}