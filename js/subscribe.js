'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  // get form controls to check for validity
  const email = $('#email_address');

  // check user entries for validity
  let isValid = true;
  if (email.value == '') { //if the email value is empty
    email.nextElementSibling.textContent = 'This field is required.'; //The <span>*</span> would be changed to this statement.
    isValid = false;
  }

  // submit the form if all fields are valid
  if (isValid == true) {
    $('form').submit();
  }
};

const resetForm = () => {
  $('form').reset();
  $('#email_address').nextElementSibling.textContent = '*';
  $('#email_address').focus();
};

document.addEventListener('DOMContentLoaded', () => {
  $('#subscribe').addEventListener('click', processEntries); //click the subscribe button (#subscribe) will run the processEntries function
  $('#reset_form').addEventListener('click', resetForm); //click the reset button (#reset_form) will run the resetForm function
});