export function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(email)) {
      return null; // Valid email, no error message
    } else {
      return 'Email should be in correct format i.e abc@gmail.com';
    }
  }
  
  export function validateName(name) {
    const namePattern = /^[A-Za-z ]+$/;
    if (namePattern.test(name)) {
      return null; // Valid name, no error message
    } else {
      return 'Name must contain alphabets or spaces only.';
    }
  }
  
  export function validateCnic(cnic) {
    const cnicPattern = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
    if (cnicPattern.test(cnic)) {
      return null; // Valid CNIC, no error message
    } else {
      return 'Cnic should be in format ie:12345-1234567-1';
    }
  }
  