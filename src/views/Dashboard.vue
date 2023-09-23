<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="mt-5 mb-3">
          <div class="card shadow-lg mt-n6">
            <div class="card-body p-3">
              <div class="row gx-4 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-xl position-relative">
                    <img id="studentImage" alt="profile_image" class="shadow-sm w-100 border-radius-lg" />
                  </div>
                </div>
                <div class="col my-auto">
                  <div class="h-100">
                    <h5 class="mb-1">Welcome back!</h5>
                    <p class="mb-0 font-weight-bold text-sm">{{ studentResponse && studentResponse.std_name ? studentResponse.std_name
                      : 'Student Name' }}</p>
                  </div>
                </div>
                <div class="col-auto text-end">
                  <!-- <a href="/register"> -->
                  <button class="btn btn-outline-success " @click="signOut">Sign Out</button>

                  <!-- </a> -->

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="registerd">
      <div class="py-4 container-fluid">
        <div class="row">
          <div class="col-lg-8">
            <authors-table />
            <!-- <carousel /> -->
          </div>
          <div class="col-lg-4 mt-3 mt-lg-0">
            <div>
              <profile-card />
            </div>
            <div class="mt-3">
              <invoice-card />
            </div>


          </div>
        </div>

      </div>
    </div>
    <div v-else>
      <div class="mt-4 row">
        <div class="col-12">
          <projects-table />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AuthorsTable from "./components/AuthorsTable.vue";
import InvoiceCard from "./components/InvoiceCard.vue";
import ProfileCard from "./components/ProfileCard.vue";
import ProjectsTable from "./components/ProjectsTable.vue";

// import Carousel from "./components/Carousel.vue";
import apiService from "@/apiservice.js"
export default {
  name: "dashboard-default",
  components: {
    AuthorsTable,
    InvoiceCard,
    ProfileCard,
    ProjectsTable,
    // Carousel
  },
  data() {
    return {
      studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
      studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
      studentPicUrl: '',
      studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
      studentIdentityResponse: JSON.parse(sessionStorage.getItem('student_identity_response')) || {},
      studentInfo: null,
      studentRegInfo: null,
      registerd: false
    }
  },
  methods:
  {
    signOut() {
      var keysToRemove = ['std_cnic', 'student_data_response', 'student_reg_response', 'student_intern_response', 'student_identity_response'];

      for (var i = 0; i < keysToRemove.length; i++) {
        sessionStorage.removeItem(keysToRemove[i]);
      }

      this.$router.push('/signin'); // Redirect to the sign-in page
      sessionStorage.setItem('session_expired', 'true');
      apiService.handleSessionExpiration();
      console.log(this.registerd);
      console.log("Signed out");
    },
    hexToBase64(str) {
      return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    },

  },
  async created() {

    // Retrieve the user's CNIC from sessionStorage
    if (this.studentRegResponse.reg_form_id) {
      console.log("reg data 123", this.studentRegResponse.reg_form_id);
      this.registerd = true;
    }
    else {

      console.log("registration data not found");
      this.registerd = false;
    }


  },
  mounted() {
      // Check if the session storage exists
      this.studentPicUrl = sessionStorage.getItem('student_pic_url');
      const imgElement = document.getElementById('studentImage');
      if (this.studentPicUrl) {
        imgElement.src = `data:image/jpeg;base64,${this.studentPicUrl}`;
        console.log("image is present idk", imgElement.src);
    } else {
      // If session storage does not exist, set the src to the default image URL
      const defaultImageUrl = require('@/assets/img/default.jpeg'); // Adjust the path accordingly
      imgElement.src = defaultImageUrl;
      console.log("no image");
    }



  },
  watch: {
    // Watch for changes in sessionStorage
    '$store.state.sessionExpired': function (newState) {
      if (newState) {
        this.studentPicUrl = ''; // Clear the image URL
      }
    },
  },
}
</script>



<style scoped>
.blink {
  animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>