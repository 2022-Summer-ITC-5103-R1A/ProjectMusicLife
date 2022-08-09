'use strict';

// the event handler for the click event of each h3 element
const toggle = (evt) => {
  console.log(evt);
  const h3Element = evt.currentTarget; // get the clicked h3 element
  const divElement = h3Element.nextElementSibling; // get h3's sibling div

  h3Element.classList.toggle('close');
  divElement.classList.toggle('open');

  evt.preventDefault(); // cancel default action of h3 tag's <a> tag
};

document.addEventListener('DOMContentLoaded', () => {
  // get the h3 tags
  const h3Elements = faqs.querySelectorAll('#faqs h3');

  // attach event handler for each h3 tag
  for (let h3Element of h3Elements) {
    h3Element.addEventListener('click', toggle);
  }
  // set focus on first h3 tag's <a> tag
  h3Elements[0].firstChild.focus();
});