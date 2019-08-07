import React from 'react';

export class SchoolData extends React.Component {
    render() {
        let schoolName = (this.props.data.name ? this.props.data.name : '(No school name provided)');
        let schoolAlias = (this.props.data.alias ? (' (' + this.props.data.alias + ')') : '');
        let schoolWebsite = (this.props.data.school_url ? this.props.data.school_url : '');
        let schoolTag = (schoolWebsite ? (<a href={'https://' + schoolWebsite }>{ schoolWebsite }</a>) : 'No school website found');
        let schoolCity = (this.props.data.city ? this.props.data.city : 'City Unknown');
        let schoolState = (this.props.data.state ? this.props.data.state : 'State Unknown');
        let schoolZip = (this.props.data.zip ? this.props.data.zip : 'Zipcode unknown');
        let total = this.props.enrollment + this.props.grad_students;
        let totalStudents = ((total != 0) ? total : 'Total number of students unknown');


        return (
            <div>
                <h1> <b>{ schoolName }</b>{ schoolAlias }</h1>
                <h3>School Data Report</h3>
                <div style={{ border: '3px solid black' }}>
                    <h4>Website: { schoolTag }</h4>
                    <h4>Location: { schoolCity }, { schoolState }  { schoolZip }</h4>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-block', textAlign: 'left' }}>
                            <ul>
                                <li><b>Undergraduate Students:</b> { this.props.enrollment }</li>
                                <li><b>Graduate Students:</b> { this.props.grad_students }</li>
                                <li><b>Total Students:</b> { totalStudents }</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}