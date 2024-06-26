// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  if (!form) {
    return;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const delay = parseInt(formData.get('delay'), 10);
    const state = formData.get('state');

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(delay => {
        iziToast.success({
          title: '✅ Success',
          message: `✅ Fulfilled promise in ${delay}ms`, 
          position: 'topRight',
        });
      })
      .catch(delay => {
        iziToast.error({
          title: '❌ Error',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });
  });
});
