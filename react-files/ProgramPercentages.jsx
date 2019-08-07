import React from 'react';
//import DonutChart from 'react-donut-chart';
//import { PieChart } from 'react-chartkick';
import { DonutChartGrapher } from './DonutChartGrapher.jsx';

// Keys from data.gov api docos
const program_key = {
    'agriculture':                          'Agriculture, Agriculture Operations, and Related Sciences',
    'resources':                            'Natural Resources and Conservation',
    'architecture':                         'Architecture and Related Services',
    'ethnic_cultural_gender':               'Area, Ethnic, Cultural, Gender, and Group Studies',
    'communication':                        'Communication, Journalism, and Related Programs',
    'communications_technology':            'Communications Technologies/Technicians and Support Services',
    'computer':                             'Computer and Information Sciences and Support Services',
    'personal_culinary':                    'Personal and Culinary Services',
    'education':                            'Education',
    'engineering':                          'Engineering',
    'engineering_technology':               'Engineering Technologies and Engineering-Related Fields',
    'language':                             'Foreign Languages, Literatures, and Linguistics',
    'family_consumer_science':              'Family and Consumer Sciences/Human Sciences',
    'legal':                                'Legal Professions and Studies',
    'english':                              'English Language and Literature/Letters',
    'humanities':                           'Liberal Arts and Sciences, General Studies and Humanities',
    'library':                              'Library Science',
    'biological':                           'Biological and Biomedical Sciences',
    'mathematics':                          'Mathematics and Statistics',
    'military':                             'Military Technologies and Applied Sciences',
    'multidiscipline':                      'Multi/Interdisciplinary Studies',
    'parks_recreation_fitness':             'Parks, Recreation, Leisure, and Fitness Studies',
    'philosophy_religious':                 'Philosophy And Religious Studies',
    'theology_religious_vocation':          'Theology and Religious Vocations',
    'physical_science':                     'Physical Sciences',
    'science_technology':                   'Science Technologies/Technicians',
    'psychology':                           'Psychology',
    'security_law_enforcement':             'Homeland Security, Law Enforcement, Firefighting and Related Protective Services',
    'public_administration_social_service': 'Public Administration and Social Service Professions',
    'social_science':                       'Social Sciences',
    'construction':                         'Construction Trades',
    'mechanic_repair_technology':           'Mechanic and Repair Technologies/Technicians',
    'precision_production':                 'Precision Production',
    'transportation':                       'Transportation and Materials Moving',
    'visual_performing':                    'Visual and Performing Arts',
    'health':                               'Health Professions and Related Programs',
    'business_marketing':                   'Business, Management, Marketing, and Related Support Services',
    'history':                              'History'
};

export class ProgramPercentages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            processed: false
        };

        this.processData = this.processData.bind(this);
        this.numberTrimmer = this.numberTrimmer.bind(this);
    }

    numberTrimmer(num) {
        let str_num = num.toString();
        return Number(str_num.substring(0,4));
    }

    processData() {
        let programs = [];
        let data = this.props.data;
        
        for (var key in data) {
            if (( data[key] > 0 ) && (data[key] != null)) {
                //alert(program_key[key] + ' ' + data[key]);
                programs.push([
                    program_key[key],
                    this.numberTrimmer((data[key] * 100))
                ]);
            }
        }
        alert('outhere');
        this.setState({
            data: programs,
            processed: true
        });
    }

    render() {
        return (
            <div>
                <h3>Program Percentages:</h3>
                <DonutChartGrapher data={ this.state.data } 
                                   processed={ this.state.processed }
                                   processData={ this.processData } />
            </div>
        );
    }
}