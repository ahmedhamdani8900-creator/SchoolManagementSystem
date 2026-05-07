
    $(document).ready(function() {

      // Password show/hide toggle
      $('#togglePassword').on('click', function() {
        const passwordField = $('#password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        // Toggle the eye icon
        $(this).find('i').toggleClass('bi-eye-slash bi-eye');
      });

      // Form validation on submit
      $('#loginForm').on('submit', function(e) {
        e.preventDefault();  // prevent actual form submission

        let isValid = true;

        // Get field values
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();

        // Reset errors
        $('.error-message').text('');
        $('#username').removeClass('is-invalid');
        $('#password').removeClass('is-invalid');

        // Validate username
        if (username === '') {
          $('#username').addClass('is-invalid');
          $('#usernameError').text('Username / email is required.');
          isValid = false;
        }

        // Validate password
        if (password === '') {
          $('#password').addClass('is-invalid');
          $('#passwordError').text('Password cannot be empty.');
          isValid = false;
        }

        // If valid, show success message (simulate login)
        if (isValid) {
          const role = $('#role').val();
          alert(`Login successful! (demo)\nWelcome ${username}, you are logged in as ${role}.`);
          // In a real app, you'd redirect or proceed.
        } else {
          // optional: highlight first error
        }
      });

      // Optional: remove red border on input focus
      $('#username, #password').on('input', function() {
        $(this).removeClass('is-invalid');
        $(this).siblings('.error-message').text('');
      });
    });
  