import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createField } from '../../store/actions/fieldActions';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class editField extends Component {
    state = {
        nameOfField: '',
        address: '',
        city: '',
        description: ''
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createField(this.state)
        this.props.history.push('/');
    }


    render() {
        const { auth, field } = this.props; 
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Edit Field</h5>
                    <div className="input-field">
                        <label htmlFor="nameOfField">Name of Field</label>
                        <input type="text" id="nameOfField" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn teal z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id
    const fields = state.firestore.data.fields
    const field = fields ? fields[id] : null
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        editField: (field) => dispatch(editField(field))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'fields' }
    ])
)(editField)
