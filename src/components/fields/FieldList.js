import React from 'react';
import FieldSummary from './FieldSummary';
import { Link } from 'react-router-dom';

const FieldList = ({fields}) => {
    return (
        <div className="field-list section">
            { fields && fields.map(field => {
                return (
                    <Link to={'/field/' + field.id} key={field.id} >
                        <FieldSummary field={field} />
                    </Link>
                )
            })}
        </div>
    )
}

export default FieldList;