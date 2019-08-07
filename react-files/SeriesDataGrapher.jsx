import React from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';

const width = Math.max(window.screen.width, window.innerWidth);
const isMobile = width < 1000;

export class SeriesDataGrapher extends React.Component {
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
                alert('mobile render');
                return (
                    <LineChart data={ this.props.data }
                               suffix='%'
                               width='90%'
                               height='600px'
                               legend='top'
                               min='0'
                               max='100'
                               xtitle='Year'
                               ytitle='Percent Enrolled'
                               name={ this.props.name } />
                );
            }
            else {
                return (
                    <LineChart data={ this.props.data }
                               suffix='%'
                               width='95%'
                               height='600px'
                               legend='left'
                               min='0'
                               max='100'
                               xtitle='Year'
                               ytitle='Percent Enrolled'
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