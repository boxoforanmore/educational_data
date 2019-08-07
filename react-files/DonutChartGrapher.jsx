import React from 'react';
import { PieChart } from 'react-chartkick';
import 'chart.js';

const isMobile = window.innerWidth < 1000;

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
            if (isMobile) {
                return (
                    <PieChart donut={ true }
                              data={ this.props.data }
                              suffix="%"
                              width='98%'
                              height='400px'
                              legend={ this.props.position }
                              name={ this.props.name } />
                );
            }
            else {
                return (
                    <PieChart donut={ true } 
                              data={ this.props.data } 
                              suffix="%" 
                              width='98%'
                              height='500px'
                              legend={ this.props.position }
                              name={ this.props.name } />
                );
            }
        }
        else {
            this.callToUpdate();
            return <p>Loading Graph...</p>;
        }
    }
}