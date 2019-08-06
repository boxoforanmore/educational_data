import React from 'react';
import DonutChart from 'react-donut-chart';

export class ProgramPercentages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {programs: []};
        this.processData = this.processData.bind(this);
    }

    trimNumber(num) {
        num *= 10;
        let str_num = num.toString();
        return Number(str_num.slice(0, 4));
    }

    processData() {
        if (this.props.data) {
            let programs = [];
            let data = this.props.data;
            for (key in this.props.data) {
                if (data[key] != 0) {
                    programs.push({
                        label: key,
                        value: this.trimNumber(data[key])
                    });
                }
            }
            this.setState({programs: programs});
        }
        else {
            return;
        }
    }

    render() {
        if (!this.state.programs) {
            this.processData();
            return (
                <p>Please wait while graph loads...</p>
            );
        }
        else {
            return (
                <div>
                    <h3>Program Percentages:</h3>
                    <DonutChart data={this.state.programs} />
                </div>
            );
        }
    }
}