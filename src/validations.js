export function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(email)) {
      return null; // Valid email, no error message
    } else {
      return 'Email should be in correct format i.e abc@gmail.com\n';
    }
  }
  
  export function validateName(name) {
 
    const namePattern = /^[A-Za-z ]+$/;
    if (namePattern.test(name)) {
      return null; // Valid name, no error message
    } 
    else {
     // console.log('validateName function called with:', name);
      return 'Name must contain alphabets or spaces only.\n';
      
    }
  }
  
  export function validateCnic(cnic) {
    const cnicPattern = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
    if (cnicPattern.test(cnic)) {
      return null; // Valid CNIC, no error message
    } else {
      return 'Cnic should be in format ie:12345-1234567-1\n';
    }
  }
  export function validateNumber(number) {
    const numPattern = /^[0-9]+$/;
    if (numPattern.test(number)) {
      return null; // Valid CNIC, no error message
    } else {
      return 'It should contains only numbers.';
    }
  }

  export function isValidInput(input) {
 
    // Use a regular expression to match the allowed characters
    const regex = /^[a-zA-Z0-9.,-\s]+$/;
    if(regex.test(input)){
      
      return null;
    }
    else{
      console.log("error displayed");
    return 'Input must contain alphabets/spaces/dashes only.\n';
    }
  }
  export function isValidPhoneNumber(phoneNumber) {
    // Use a regular expression to match the Pakistani phone number format
    const regex = /^03[0-9]{9}$/;
    if (regex.test(phoneNumber)) {
      return null; // Valid phone number
    } else {
      return 'Invalid Phone number. Please enter a valid number in the format 03XXXXXXXXX.';
    }
  }
  