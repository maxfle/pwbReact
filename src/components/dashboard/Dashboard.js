import React, { Component } from 'react';
import FieldList from '../fields/FieldList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
// import { Redirect} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { fields, auth } = this.props;
        // if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 responsive">
                        <FieldList fields={fields}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        fields: state.firestore.ordered.fields,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'fields', orderBy: ['createdAt', 'desc'] }
    ])
)(Dashboard)