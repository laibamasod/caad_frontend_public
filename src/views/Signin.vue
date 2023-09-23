<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100" style="margin-top: -45px;">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" @submit.prevent="onSubmit">
                    <div class="mb-3">
                      <input class="form-control mb-3" type="text" placeholder="CNIC" aria-label="CNIC"
                        v-model="formData.cnic" required />
                      <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ? $validateCnic(formData.cnic) :
                        ''
                      }}
                      </p>
                    </div>
                    <div class="mb-3">
                      <input class="form-control mb-3" type="password" placeholder="Password" aria-label="Password"
                        v-model="formData.password" required />
                    </div>
                    <argon-switch id="rememberMe">Remember me</argon-switch>

                    <div class="text-center">
                      <argon-button class="mt-4" variant="gradient" color="success" fullWidth size="lg">Sign
                        in</argon-button>
                    </div>
                  </form>
                  <div v-if="errorMessage" class="message error mt-3">
                    <p class="text-small text-center text-danger">{{ errorMessage }}</p>
                  </div>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <a href="/signup" class="text-success text-gradient font-weight-bold">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column">
              <div
                class="position-relative bg-gradient-success h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                :style="{
                  'background-image': `url(${require('@/assets/img/ncp1.jpg')})`,
                  'background-size': 'cover'
                }">
                <span class="mask bg-gradient-success opacity-4"></span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];
import apiService from "@/apiservice.js"
import axios from 'axios';
export default {
  name: "SigninComp",
  data() {
    return {
      isvalid: false,
      isFormSubmitted: false,
      errorMessage: '',
      showSuccessModal: false,
      formData:
      {
        cnic: '',
        password: ''

      }
    }
  },
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL;

    },
  },
  methods:
  {
    resetForm() {

      this.formData.cnic = '';
      this.formData.password = '';
      this.isFormSubmitted = false;
      this.isvalid = false;
    },
    async onSubmit() {
      console.log("hello")
      this.isFormSubmitted = true
      const cnicError = this.$validateCnic(this.formData.cnic);
      if (cnicError) {
        return;
      }
      this.isvalid = true
      this.errorMessage = '';
      try {
        const response = await axios.post(`${this.apiUrl}/login`, { cnic: this.formData.cnic, password: this.formData.password });
        this.errorMessage = response.data;
        console.log('response:', response);
        const userCnic = sessionStorage.getItem('std_cnic');
        console.log("CNIC:", userCnic)
        this.resetForm()
        this.showSuccessModal = true;
        console.log(response.data);
        sessionStorage.setItem('std_cnic', response.data.cnic);

        await apiService.fetchStudentData()
        setTimeout(() => {
          this.showSuccessModal = false;
          this.$router.push('/dashboard'); // Redirect after modal is closed
        }, 2000); // 2 seconds
      }

      catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data;
        }
      }
    },

  },
  components: {

    ArgonSwitch,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    // this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    // this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  watch:
  {
    isSubmitDisabled() {
      const cnicError = this.$validateCnic(this.formData.cnic);
      this.isvalid = !!cnicError;
      return this.isvalid;
    }
  }
};
</script>