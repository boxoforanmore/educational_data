import React from 'react';
import { PieChart } from 'react-chartkick';
import 'chart.js';


export class DonutChartGrapher extends React.Component {
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
                <PieChart donut={ true } 
                          data={ this.props.data } 
                          suffix="%" 
                          width='800px'
                          height='800px' />
            );
        }
        else {
            this.callToUpdate();
            return <p>Loading Graph...</p>;
        }
    }
}