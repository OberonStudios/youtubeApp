import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

class Search extends Component {
    onSubmit = (text) => {
        this.props.fetchVideoList(text.search);
        console.log(text);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="pure-form" onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <Field
                        name="search"
                        type="text"
                        className="pure-input-rounded"
                        component="input"
                        placeholder="Search Videos"
                    />
                    <button type="submit" className="pure-button pure-button-primary">Search</button>
                </fieldset>
            </form>
        );
    }
}

export default compose(
    connect(null, actions),
    reduxForm({ form: 'search' })
  )(Search);