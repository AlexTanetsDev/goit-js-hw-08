import throttle from 'lodash.throttle';

const refs = {
  feedBackForm: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textArea: document.querySelector('.feedback-form  textarea'),
};

const dataForSave = {};
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData) {
  if (savedData.email) {
    refs.input.value = savedData.email;
  }
  if (savedData.message) {
    refs.textArea.value = savedData.message;
  }
}

refs.feedBackForm.addEventListener(
  'input',
  throttle(evt => {
    if (evt.target.name === 'email') {
      dataForSave.email = evt.target.value;
      dataForSave.message = refs.textArea.value;
    } else {
      dataForSave.message = evt.target.value;
      dataForSave.email = refs.input.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForSave));
  }, 500)
);

refs.feedBackForm.addEventListener('submit', evt => {
  evt.preventDefault();

  console.log(dataForSave);
  refs.feedBackForm.reset();
  localStorage.removeItem('feedback-form-state');
});
