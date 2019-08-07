import React from 'react';
import { SchoolData } from './SchoolData.jsx';
import { ProgramPercentages } from './ProgramPercentages.jsx';
import { RaceEthnicity } from './RaceEthnicity.jsx';
import { RaceEthnicityTime } from './RaceEthnicityTime.jsx';

export class DataHandler extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let grad_students = this.props.data.results[0]['latest']['student']['grad_students'];//.latest.student.grad_students;
        let enrollment = this.props.data.results[0]['latest']['student']['enrollment']['all'];//.latest.student.enrollment.all;
        return (
            <div>
                {/* Must pass enrollment and grad students for total student body size; docos say enrollment only covers undergrads */}
                <SchoolData data={ this.props.data.results[0]['school'] } 
                            enrollment={ enrollment ? enrollment : 0} 
                            grad_students={grad_students ? grad_students : 0} />

                <br />
                <br />
                <br />

                <ProgramPercentages data={ this.props.data.results[0]['latest']['academics']['program_percentage'] } />

                <br />
                <br />
                <br />

                <RaceEthnicity data={ this.props.data.results[0]['latest']['student']['demographics']['race_ethnicity'] } />

                <br />
                <br />
                <br />
                
                <RaceEthnicityTime data={ this.props.data.results[0] } />
            </div>
        );

        /*
        return (
            <div>
                // Must pass enrollment and grad students for total student body size; docos say enrollment only covers undergrads
                <SchoolData data={ this.props.data.results[0].school } 
                            enrollment={ enrollment ? enrollment : 0} 
                            grad_students={grad_students ? grad_students : 0} />

                <ProgramPercentages data={ this.props.data.results.latest.academics.program_percentage } />

                <RaceEthnicity data={ this.props.data.results.student.demographics.race_ethnicity } />

            </div>
        );
        */
    }
}