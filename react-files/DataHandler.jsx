import React from 'react';
import { SchoolData } from './SchoolData.jsx';
import { ProgramPercentages } from './ProgramPercentages.jsx';

export class DataHandler extends React.Component {
    render() {
        if (!this.props.data) {
            return (
                <p>Please wait while the data loads...</p>
            );
        }
        else {
            let grad_students = this.props.data.resutls.latest.student.grad_students;
            let enrollment = this.props.data.results.latest.student.size;

            return (
                <div>
                    // Must pass enrollment and grad students for total student body size; docos say enrollment only covers undergrads
                    <SchoolData data={ this.props.data.results.school } 
                                enrollment={ enrollment ? enrollment : 0} 
                                grad_students={grad_students ? grad_students : 0} />

                    <ProgramPercentages data={ this.props.data.results.latest.academics.program_percentage } />

                    <RaceEthnicity data={ this.props.data.results.student.demographics.race_ethnicity } />

                    <OtherGraph />

                    <SaveAsPDF />

                    <DownloadData />

                    <PrintPage />
                </div>
            );
        }
    }
}