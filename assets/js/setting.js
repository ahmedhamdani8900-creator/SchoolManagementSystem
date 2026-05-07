
    $(document).ready(function() {
      $('#logoInput').on('change', function(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            $('#logoPreview').html(`<img src="${e.target.result}" class="preview-logo mt-2" alt="logo preview">`);
          };
          reader.readAsDataURL(file);
        }
      });
    });
  