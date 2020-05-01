import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='beer'
          placeholder='Beer Name' />
        <input
          type='text'
          name='dateTapped'
          placeholder='Date Keg was Tapped' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='text'
          name='style'
          placeholder='Style of Beer' />
        <input
          type='text'
          name='pricePerPint'
          placeholder='Price per Pint' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <input
          type='int'
          name='pintsLeft'  
          placeholder='Pints Left in this Keg' />  
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;