import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment'; 

const FieldDetails = (props) => {
    const { field } = props;
    if(field) {
        return(
            <div className="container section field-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{field.nameOfField}</span>
                        <p>{ field.address }</p>
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
    return {
        field: field
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'fields' }
    ])
)(FieldDetails)