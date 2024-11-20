//your JS code here. If required.
  function submitForm() {
      // Get form values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const emailId = document.getElementById('emailId').value;

      // Generate alert message
      const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
      alert(message);
    }