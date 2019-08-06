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

    toUpper(str) {
        return (str.charAt(0).toUpperCase() + str.slice(1));
    }

    formatProgram(str) {
        if (str.includes('_')) {
            let new_str = [];
            split_str = str.split('_')
            for (i in split_str) {
                new_str.push(this.toUpper(i));
            }
            return new_str.join(' ');
        }

        return this.toUpper(str);
    }

    processData() {
        if (this.props.data) {
            let programs = [];
            let data = this.props.data;
            for (key in this.props.data) {
                if (data[key] != 0) {
                    programs.push({
                        label: this.formatProgram(key),
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