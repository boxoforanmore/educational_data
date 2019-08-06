import React from 'react';

export class SchoolData extends React.Component {
    render() {
        let schoolName = (this.props.name ? this.props.name : '(No school name provided)');
        let schoolAlias = (this.props.alias ? (' (' + this.props.alias + ')') : '');
        let schoolWebsite = (this.props.school_url ? this.props.school_url : '');
        let schoolTag = (schoolWebsite ? (<a href={ schoolWebsite }>{ schoolWebsite }</a>) : 'No school website found');
        let schoolCity = (this.props.city ? this.props.city : 'City Unknown');
        let schoolState = (this.props.state ? this.props.state : 'State Unknown');
        let schoolZip = (this.props.zip ? this.props.zip : 'Zipcode unknown');
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