import React, { useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment'; 
import { NavLink } from 'react-router-dom';


const FieldDetails = (props) => {
    const { field } = props;
    if(field) {
        return(
            <div className="container section field-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{field.nameOfField}</span>
                        <p>{ field.address }</p>
                        <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${field.address.split(' ').join('+').replace("&","and")}`} class="secondary-content red black-text btn-large"> <span className="valign-wrapper">map<i class="small material-icons">directions</i></span></a>
                        <br/><br/><br/>       
                                         
                        <NavLink to='/edit'><button className="secondary-content btn-large mb100 black-text" >Edit<i class="small material-icons">edit</i></button></NavLink>
                        <br/><br/>
                        <button className="secondary-content btn-large mb100 black-text" >Delete<i class="small material-icons"></i></button>
                        <br/><br/>

                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {field.authorFirstName} {field.authorLastName}</div>
                        <div>{moment(field.createdAt.toDate()).calendar()}</div>
                    </div>
                    
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading Field..</p>
            </div>       
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id
    const fields = state.firestore.data.fields
    const field = fields ? fields[id] : null
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'fields' }
    ])
)(FieldDetails)