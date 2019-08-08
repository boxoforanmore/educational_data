import React from 'react';
import { SchoolData } from './SchoolData.jsx';
import { ProgramPercentages } from './ProgramPercentages.jsx';
import { RaceEthnicity } from './RaceEthnicity.jsx';
import { RaceEthnicityTime } from './RaceEthnicityTime.jsx';

const styling = {
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'center',
    fontFamily: 'Arial'
};

export class DataHandler extends React.Component {
    constructor(props) {
        super(props);

        this.printPage = this.printPage.bind(this);
        this.saveJSON = this.saveJSON.bind(this);
    }

    printPage() {
        window.print();
    }

    saveJSON() {
        const element = document.getElementById('downloadElement');
        const text = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.props.data));
        const filename = 'school_data_id_' + this.props.data.results[0]['id'] + '.json';

        element.setAttribute('href', text);
        element.setAttribute('download', filename);
        element.click();
    }

    render() {
        let grad_students = this.props.data.results[0]['latest']['student']['grad_students'];//.latest.student.grad_students;
        let enrollment = this.props.data.results[0]['latest']['student']['enrollment']['all'];//.latest.student.enrollment.all;
        return (
            <div style={styling}>
                <button class="hide" onClick={ this.printPage }>Print this page</button>
                <button class="hide" id="download" onClick={ this.saveJSON }>Download this Data (JSON)</button>
                <a id="downloadElement" style={{ display: 'none' }}></a>
                {/* Must pass enrollment and grad students for total student body size; docos say enrollment only covers undergrads */}
                <SchoolData data={ this.props.data.results[0]['school'] } 
                            enrollment={ enrollment ? enrollment : 0} 
                            grad_students={grad_students ? grad_students : 0} />

                <br />
                <br />
                <br />
                <br />

                <ProgramPercentages data={ this.props.data.results[0]['latest']['academics']['program_percentage'] } />

                <br />
                <br />
                <br />
                <div class='show'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <RaceEthnicity data={ this.props.data.results[0]['latest']['student']['demographics']['race_ethnicity'] } />

                <br />
                <br />
                <br />
                
                <RaceEthnicityTime data={ this.props.data.results[0] } />

                <p style={{ color: '#A0A0A0', fontSize: '50%'}}>Data retrieved from <a href="https://api.data.gov">https://api.data.gov</a></p>

            </div>
        );
    }
}