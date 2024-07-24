document.addEventListener('DOMContentLoaded', function () {
    const emailInputContainer = document.getElementById('emailInputContainer');
    const emailInput = document.getElementById('emailInput');
    const emailForm = document.getElementById('emailForm');
  
    emailInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (email && validateEmail(email)) {
          addEmailTag(email);
          emailInput.value = '';
        } else {
          alert('Please enter a valid email address.');
        }
      }
    });
  
    emailForm.addEventListener('submit', function (e) {
      const emailTags = emailInputContainer.querySelectorAll('.email-tag span');
      const emails = Array.from(emailTags).map(tag => tag.textContent);
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = 'receiverEmails';
      hiddenInput.value = emails.join(',');
      emailForm.appendChild(hiddenInput);
    });
  
    function addEmailTag(email) {
      const emailTag = document.createElement('div');
      emailTag.classList.add('email-tag');
  
      const emailSpan = document.createElement('span');
      emailSpan.textContent = email;
      emailTag.appendChild(emailSpan);
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'x';
      removeButton.addEventListener('click', function () {
        emailInputContainer.removeChild(emailTag);
      });
      emailTag.appendChild(removeButton);
  
      emailInputContainer.insertBefore(emailTag, emailInput);
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  