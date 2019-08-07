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
                <h1>School Data Report for: <b>{ schoolName }</b>{ schoolAlias }</h1>
                <h3>Website: { schoolTag }</h3>
                <h3>{ schoolCity }, { schoolState }  {schoolZip}</h3>
                <h3>Total Students: {totalStudents} </h3>
                <ul>
                    <li>Undergrads: { this.props.enrollment }</li>
                    <li>Graduate Students { this.props.grad_students }</li>
                </ul>
            </div>
        );
    }
}