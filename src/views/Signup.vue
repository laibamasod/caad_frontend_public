<template>
  <!-- <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div> -->
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100" style="margin-top: -45px;">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain mt-n5">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder ">Sign Up</h4>
                </div>
                <div class="card-body mt-n3">
              <form v-if="!showVerificationCodeSentMessage" @submit.prevent="onSubmit">
                <input class="form-control mb-3" type="text" placeholder="Name" aria-label="Name" v-model="formData.name"
                  required />

                <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ? $validateName(formData.name) : '' }}
                </p>
                <!-- Display name validation error message -->

                <input class="form-control mb-3" type="text" placeholder="Email" aria-label="Email"
                  v-model="formData.email" required />
                <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ? $validateEmail(formData.email) : '' }}
                </p>
                <!-- Display email validation error message -->

                <input class="form-control mb-3" type="text" placeholder="CNIC" aria-label="CNIC" v-model="formData.cnic"
                  required />
                <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ? $validateCnic(formData.cnic) : '' }}
                </p>
                <input class="form-control mb-3" type="password" placeholder="Password" aria-label="Password"
                  v-model="formData.password" required />
                <input class="form-control mb-3" type="password" placeholder="Confirm Password"
                  aria-label="Confirm password" v-model="formData.cpassword" required />
                <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ?
                  validatePasswordsMatch(formData.password, formData.cpassword) : '' }}</p>

                <!-- Display CNIC validation error message -->

                <argon-checkbox checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    I agree to the
                    <a href="javascript" class="text-dark font-weight-bolder">Terms and Conditions</a>
                  </label>
                </argon-checkbox>
                <div class="text-center">
                  <argon-button fullWidth color="success" variant="gradient" class="my-4 mb-2" :disabled="isvalid">
                    <span v-if="isvalid">
                      <i class="fas fa-spinner fa-spin"></i> Sending Email...
                    </span>
                    <span v-else>Sign up</span>
                  </argon-button>
                </div>
                <p class="text-sm mt-3 mb-0">
                  Already have an account?
                  <a href="/signin" class="text-dark font-weight-bolder">Sign in</a>
                </p>
              </form>
              <form v-else class="mt-2" @submit.prevent="verifyCode">
                <p class="message text-success" style="font-size: 14px;">
                  Verification code has been sent to your email.Please enter below.</p>
                <input class="form-control" v-model="formData.verificationCode" type="text"
                  placeholder="Verification Code" aria-label="Verification Code" />
                <argon-button fullWidth color="dark" variant="gradient" class="my-4 mb-2">Verify
                  Code</argon-button>
              </form>



              <div v-if="errorMessage" class="message error mt-3">
                <p class="text-small text-center text-danger">{{ errorMessage }}</p>
              </div>
            </div>
                
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column">
              <div
                class="position-relative bg-gradient-success h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                :style="{'background-image' : `url(${require('@/assets/img/ncp1.jpg')})`,
                'background-size' : 'cover'}">
                <span class="mask bg-gradient-success opacity-4"></span>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import axios from 'axios';

// import apiService from "@/apiservice.js"

const body = document.getElementsByTagName("body")[0];

export default {
  name: "SigninComp",
  components: {
    AppFooter,
    ArgonCheckbox,
    ArgonButton,

  },
  data() {
    return {
      showVerificationCodeSentMessage: false,
      inputerror: '',
      isvalid: false,
      isFormSubmitted: false,
      errorMessage: '',
      showSuccessModal: false,
   
      formData: {
        name: '',
        cnic: '',
        email: '',
        verificationCode: '',
           password: '',
      cpassword: '',

      },
    };
  },
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL;

    },

  },
  methods: {
    resetForm() {
      this.showVerificationCodeSentMessage = false;
      this.isFormSubmitted = false;
      this.isvalid = false;
      this.formData.name = '';
      this.formData.email = '';
      this.formData.cnic = '';
      this.formData.verificationCode = '';
    },
    async sendEmail() {
      console.log('API URL:', process.env.VUE_APP_API_URL);
      console.log('Sign Up button clicked');
      console.log('Email to be sent:', this.formData.email);


      try {
        console.log(`${this.apiUrl}/send-verification-email`)
        const response = await axios.post(`${this.apiUrl}/send-verification-email`, {
          email: this.formData.email, cnic: this.formData.cnic, std_name: this.formData.name,password:this.formData.password
        });
        // If the request is successful, you can handle it here
        console.log('Verification email sent:', response.data);
        this.showVerificationCodeSentMessage = true,
          this.errorMessage = ''

        // You can also show a success message to the user if needed

      } catch (error) {
        console.log('Error sending verification email:', error.data);
        this.showVerificationCodeSentMessage = false
        this.errorMessage = error.response.data
        this.resetForm()
        // Handle the error, show an error message to the user, etc.
      }
    },

    async onSubmit() {
      console.log("kkj")
      this.isFormSubmitted = true
      // Validate each input field
      const nameError = this.$validateName(this.formData.name);
      const emailError = this.$validateEmail(this.formData.email);
      const cnicError = this.$validateCnic(this.formData.cnic);
      const passwordError = this.validatePasswordsMatch(this.formData.password, this.formData.cpassword);
      // If any validation fails, display error messages and prevent form submission
      if (nameError || emailError || cnicError || passwordError) {
        return;
      }
      this.isvalid = true
      this.errorMessage = '';
      await this.sendEmail();
    },

    validatePasswordsMatch(password, confirmPassword) {
      if (password === confirmPassword) {
        return null; // Passwords match, no error message
      } else {
        return 'Passwords do not match.';
      }
    },

  
    async verifyCode() {
      console.log("lll", this.formData.cnic)
      console.log("lll", this.formData.verificationCode)
      try {
        const response = await axios.post(`${this.apiUrl}/verify-code`, { code: this.formData.verificationCode, cnic: this.formData.cnic });
        this.errorMessage = response.data;
        console.log('Verification email sent:', response);
        this.resetForm()
        this.showSuccessModal = true;

        // Redirect to login page after a certain time
        setTimeout(() => {
          this.showSuccessModal = false;
          this.$router.push('/signin'); // Replace with your login route
        }, 5000); // 5000 milliseconds (5 seconds) timeout
      }

      catch (error) {
        // Handle API request error, e.g., display an error message to the user
        this.errorMessage = error.response.data;
        this.formData.verificationCode = ''
      }
    }

  },

  created() {
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {

    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  // watch: {
  //   'formData.email'(value) {
  //     this.$validateEmail(value);
  //   },
  //   'formData.name'(value) {
  //     this.$validateName(value);
  //   },
  //   'formData.cnic'(value) {
  //     this.$validateCnic(value);
  //   },
  
  // }
};
</script> 
<style>
.alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: 80%;
  max-width: 400px;
  text-align: center;
}</style>