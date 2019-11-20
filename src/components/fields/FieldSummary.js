import React from 'react';
import moment from 'moment';




const FieldSummary = ({field}) => {
    return (
        // <table className="table striped grey-text darken-4 z-depth-0 field-summary">
        //     <tbody>
        //         <tr>
        //             <td>{field.nameOfField}</td>
        //             <td>Posted by {field.authorFirstName} {field.authorLastName}</td>
        //             <td>{moment(field.createdAt.toDate()).calendar()}</td>
        //         </tr>
        //     </tbody>
        // </table>
        <div>
        <ul className="collection z-depth-5 black-text">
            <li className="collection-item field-summary">
                <p>Name of the wall: {field.nameOfField} <a href={'/field/' + field.id} key={field.id} className="secondary-content white black-text btn"><span className="valign-wrapper">details<i class="black-text small material-icons">details</i></span></a> <br/>
                Address of wall: { field.address } <br/>
                Posted by: {field.authorFirstName} {field.authorLastName} <br/>
                <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${field.address.split(' ').join('+').replace("&","and")}`} class="secondary-content red black-text btn"> <span className="valign-wrapper">map<i class=" small material-icons">directions</i></span></a>
                    When it was created: {moment(field.createdAt.toDate()).calendar()}
                    </p>
            </li>
        
        </ul>
        </div>
        
    )
}


export default FieldSummary;