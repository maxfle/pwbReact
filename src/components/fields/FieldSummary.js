import React from 'react';


const FieldSummary = ({field}) => {
    return (
        <div className="card z-depth-0 field-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{field.nameOfField}</span>
                <p>Posted by MF</p>
                <p className="grey-text">Date</p>
            </div>
        </div>
    )
}


export default FieldSummary;