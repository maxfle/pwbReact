import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createField } from '../../store/actions/fieldActions';
import { Redirect } from 'react-router-dom';

class CreateField extends Component {
    state = {
        nameOfField: '',
        address: '',
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
        const { auth } = this.props; 
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Field</h5>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        createField: (field) => dispatch(createField(field))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateField);
