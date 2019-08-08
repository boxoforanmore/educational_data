import React from 'react';
import { SchoolData } from './SchoolData.jsx';
import { ProgramPercentages } from './ProgramPercentages.jsx';
import { RaceEthnicity } from './RaceEthnicity.jsx';
import { RaceEthnicityTime } from './RaceEthnicityTime.jsx';
// import { Buttons } from './Buttons.jsx';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { Preview, print } from 'react-html2pdf';
// import printJS from 'print-js';
// import domtoimage from 'dom-to-image';

const styling = {
    marginLeft: '10%',
    marginRight: '10%',
    textAlign: 'center',
    fontFamily: 'Arial'
};

export class DataHandler extends React.Component {
    constructor(props) {
        super(props);

        this.downloadPDF = this.downloadPDF.bind(this);
    }

    downloadPDF() {
        //const input = document.querySelectorAll('#school', '#program', '#race', '#race-time');
        //let node = 
        /*domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
        
        */
        //printJS({
        //    printable: ['#school', '#program', '#race', '#race-time'], 
        //    type: 'html'
        //});


        // html2canvas(input, {scale: 1})
        //     .then(
        //         (canvas) => {
        //             const imgData = canvas.toDataURL('image/png');
        //             alert('all the way here');
        //             let pdf = new jsPDF('p', 'mm', [216, 280]);
        //             pdf.addImage(imgData, 'PNG', 0, 0, 216, 280);
        //             pdf.save('UW_School_Report.pdf');
        //         }
        //     );

    }

    render() {
        let grad_students = this.props.data.results[0]['latest']['student']['grad_students'];//.latest.student.grad_students;
        let enrollment = this.props.data.results[0]['latest']['student']['enrollment']['all'];//.latest.student.enrollment.all;
        return (
            <div style={styling} id="info2print">
                {/* Must pass enrollment and grad students for total student body size; docos say enrollment only covers undergrads */}
                <div id='school'>
                    <SchoolData data={ this.props.data.results[0]['school'] } 
                                enrollment={ enrollment ? enrollment : 0} 
                                grad_students={grad_students ? grad_students : 0} />
                </div>


                <br />
                <br />
                <br />

                <div id='program'>
                    <ProgramPercentages data={ this.props.data.results[0]['latest']['academics']['program_percentage'] } 
                                        style={{ marginLeft: '5%', marginRight: '5%'}} />
                </div>

                <br />
                <br />
                <br />

                <div id='race'>
                    <RaceEthnicity data={ this.props.data.results[0]['latest']['student']['demographics']['race_ethnicity'] } 
                                   style={{ marginLeft: '5%', marginRight: '5%'}}/>
                </div>


                <br />
                <br />
                <br />
                
                <div id='race-time'>
                    <RaceEthnicityTime data={ this.props.data.results[0] } />
                </div>

                <br />
                <br />
                <br />

                {/* <Buttons downloadPDF={ this.downloadPDF } /> */}
            </div>
        );
    }
}