/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? `error` : ``}`;
    return (
      <div className={className}>
        <label htmlFor={input}>
          {label}
          <input {...input} autoComplete="off" />
        </label>
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    return null;
  };

  render() {
    const { handleSubmit } = this.props;
    const submitMessage = "Submit";
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button type="submit" className="ui button primary">
          {submitMessage}
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
