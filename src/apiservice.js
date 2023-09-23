import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Your API base URL

export default {
  async sendVerificationEmail(email) {
    try {
      const response = await axios.post(`${BASE_URL}/send-verification-email`, {
        email: email,
      });
      return response.data; // Assuming the server responds with some data
    } catch (error) {
      // console.error('Error sending verification email:', error);
      // throw error;
    }
  },

  async handleSessionExpiration() {
    const isSessionExpired = sessionStorage.getItem('session_expired') === 'true';
    console.log("session is expired:", isSessionExpired);
    if (isSessionExpired) {
      // Session has expired, clear the image source
      const imgElement = document.getElementById('studentImage');
      if (imgElement) {

        imgElement.src = '';
        console.log("img src is cleared", imgElement);   // Set the src attribute to an empty string
      }
      sessionStorage.clear();
    }
  },

  async fetchStudentData() {
    const cnic = sessionStorage.getItem('std_cnic');
    // const cnic = '3740530943812'
    try {
      const response_std = await axios.get(`${BASE_URL}/student/${cnic}`);
      sessionStorage.setItem('student_data_response', JSON.stringify(response_std.data));
    } catch (error) {
      // console.error('Error fetching student data:', error);
      // throw error; // Rethrow the error to handle it in the calling function
    }
    try {
      const response_std_reg = await axios.get(`${BASE_URL}/studentreg/${cnic}`);
      sessionStorage.setItem('student_reg_response', JSON.stringify(response_std_reg.data));
    } catch (error) {
      // console.error('Error fetching student data:', error);
      // throw error; // Rethrow the error to handle it in the calling function
    }
    try {
      const response_intern = await axios.get(`${BASE_URL}/internships/${cnic}`);
      sessionStorage.setItem('student_intern_response', JSON.stringify(response_intern.data));
    } catch (error) {
      // console.error('Error fetching student data:', error);
      // throw error; // Rethrow the error to handle it in the calling function
    }
    try {
      const response_identity = await axios.get(`${BASE_URL}/identity/${cnic}`);
      sessionStorage.setItem('student_identity_response', JSON.stringify(response_identity.data));
    } catch (error) {
      // console.error('Error fetching student data:', error);
      //throw error; // Rethrow the error to handle it in the calling function
    }
    try {
      const response_pic = await axios.get(`${BASE_URL}/studentpic/${cnic}`, {
        responseType: 'arraybuffer',  // Specify responseType as 'blob'
      });
      if (response_pic.data) {
        sessionStorage.setItem('student_pic_url', response_pic.data);

     
      }
    } catch (error) {
      //console.error('Error fetching student picture data:', error);
      //throw error; // Rethrow the error to handle it in the calling function
      // throw error; // Rethrow the error to handle it in the calling function
    }
    try {
      const response_acc = await axios.get(`${BASE_URL}/accomodation/${cnic}`);
      sessionStorage.setItem('student_acc_response', JSON.stringify(response_acc.data));
      console.log(response_acc.data)
    } catch (error) {
      // console.error('Error fetching student data:', error);
      // throw error; // Rethrow the error to handle it in the calling function
    }


  },

  formatDate(date) {
    const datepart=date.toISOString().split('T')[0];
    return datepart;
  }

}


