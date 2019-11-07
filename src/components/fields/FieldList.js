import React from 'react';
import FieldSummary from './FieldSummary';
import { Link } from 'react-router-dom';

const FieldList = ({fields}) => {
    return (
        <div className="fieldt-list section">
            { fields && fields.map(field => {
                return (
                    <Link to={'/field/' + field.id} >
                        <FieldSummary field={field} key={field.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default FieldList;