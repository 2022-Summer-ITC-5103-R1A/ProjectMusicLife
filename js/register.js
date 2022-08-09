'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  // get form controls to check for validity
  const email = $('#email_address');

  // check user entries for validity
  let isValid = true;
  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    email.nextElementSibling.textContent = '';
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
  $('#register').addEventListener('click', processEntries);
  $('#reset_form').addEventListener('click', resetForm);
  $('#email_address').focus();
});