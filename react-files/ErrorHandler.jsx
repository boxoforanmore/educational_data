import React from 'react';

const ADMIN_CONTACT = 'admin@boxoforanmore.com';

export class ErrorHandler extends React.Component {
    render() {
        return (
            <div>
                <h1>Unfortunately there has been an error with the API used</h1>
                <a href={'mailto:' + ADMIN_CONTACT}>
                    <h2>
                        admin@boxoforanmore.com
                    </h2>
                </a>
            </div>
        );
    }
}