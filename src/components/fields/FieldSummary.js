import React from 'react';
import moment from 'moment';


const FieldSummary = ({field}) => {
    return (
        <div className="card z-depth-0 field-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{field.nameOfField}</span>
                <p>Posted by {field.authorFirstName} {field.authorLastName}</p>
                <p className="grey-text">{moment(field.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}


export default FieldSummary;