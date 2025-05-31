const formData = { email: '', message: '' };
const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('All form fields must be filled in');
  }
  console.log(formData);
  form.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(storageKey);
});

form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(storageKey, JSON.stringify(formData));
});

function populateLocalStorage() {
  const getObj = JSON.parse(localStorage.getItem(storageKey));
  if (!getObj) return;

  if (getObj.email) {
    input.value = getObj.email;
    formData.email = getObj.email;
  }

  if (getObj.message) {
    textarea.value = getObj.message;
    formData.message = getObj.message;
  }
}
populateLocalStorage();
