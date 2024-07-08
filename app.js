document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Create a new FormData object from the form
    var formData = new FormData(this);
  
    // Send the form data using fetch
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response) {
      if (response.ok) {
        // Clear the form fields
        document.getElementById('contact-form').reset();
  
        // Show success modal
        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
      } else {
        // Show error modal
        var errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
      }
    }).catch(function(error) {
      // Show error modal in case of network error
      var errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
      errorModal.show();
    });
  });