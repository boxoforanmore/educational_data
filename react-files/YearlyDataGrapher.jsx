import React from 'react';
import { LineChart } from 'react-chartkick';
import { race_ethnicity } from './RaceEthnicity.jsx';



export class YearlyDataGrapher extends React.Component {
    constructor(props) {
        super(props);
        this.callToUpdate = this.callToUpdate.bind(this);
    }

    callToUpdate() {
        this.props.processData()
    }

    render() {
        if ( this.props.processed ) {
            return (
                <LineChart data={ this.props.data } />
            );
        }

        this.callToUpdate();
    }
}