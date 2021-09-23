const signupFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-signup');
  const passwordEl = document.querySelector('#password-input-signup');
  const firstNameEl = document.querySelector('#firstName-input-signup');
  const lastNameEl = document.querySelector('#lastName-input-signup');
  const emailEl = document.querySelector('#email-input-signup');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      first_name: firstNameEl.value.trim(),
      last_name: lastNameEl.value.trim(),
      username: usernameEl.value.trim(),
      email: emailEl.value.trim(),
      password: passwordEl.value.trim(),
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);