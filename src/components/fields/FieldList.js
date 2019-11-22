import React from 'react';
import FieldSummary from './FieldSummary';


const FieldList = ({fields}) => {
    return (
        
        <div className="field-list section">
            <div>
                <table>
                    <thead className="white">
                        <tr>
                            <th>Name of Field</th>
                            <th>Posted by</th>
                            <th>Posted at</th>
                        </tr>
                    </thead>
                </table>
            </div>
            { fields && fields.map(field => {
                return (
                    <FieldSummary field={field} />
                )
            })}
        </div>
    )
}

export default FieldList;