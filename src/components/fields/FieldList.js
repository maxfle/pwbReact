import React from 'react';
import FieldSummary from './FieldSummary';


const FieldList = ({fields}) => {
    return (
        
        <div className="field-list section">
            <div>
                <table>
                    <thead className="white responsive">
                        <tr>
                            <th>Name of Field</th>
                            <th>City</th>
                            <th>Posted by</th>
                            <th>Posted at</th>
                            <th className="center-align fDetails">Field details</th>
                            <th className="right-align">Map to field</th>
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