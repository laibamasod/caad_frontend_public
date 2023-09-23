<template>
  <main>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-4 ">
          <CompleteProfile :activeSection="activeSection" :hoveredSection="hoveredSection"
            @sectionClicked="handleSectionClick" @hoveredSectionChange="handleHoveredSectionChange" />
        </div>
        <div class="col-md-8 mt-sm-3">
          <div class="card " v-if="activeSection === 'personal'">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Edit Personal Information</p>
                <button @click="toggleEditing"
                  :class="['btn', 'btn-sm', 'ms-auto', isEditing ? 'btn-success' : 'btn-primary']">
                  <i class="fas fa-edit mr-2" style="color:white"></i>
                  {{ isCheckingInputs ? 'Loading...' : (isEditing ? 'Save' : 'Edit') }}
                </button>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">Personal Information</p>
              <div class="row">
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Name</label>
                  <div ref="inputContainer">
                    <input class="form-control" type="isEditing ? 'date' : 'text'" v-model="studentResponse.std_name"
                      readonly />
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Date of Birth</label>
                  <input class="form-control" type="date" v-model="studentRegResponse.dob" :readonly="!isEditing"
                    ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">CNIC</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'" v-model="studentResponse.std_cnic"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Current Status</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentRegResponse.present_status" :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Designation</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'" v-model="studentRegResponse.designation"
                    :readonly="!isEditing" ref="editInput" />
                </div>
              </div>

            </div>
          </div>
          <div class="card p-4 mt-2" v-if="activeSection === 'contact'">
            <div class="d-flex align-items-center">
              <p class="mb-0">Edit Contact Information</p>
              <button @click="toggleEditing"
                  :class="['btn', 'btn-sm', 'ms-auto', isEditing ? 'btn-success' : 'btn-primary']">
                  <i class="fas fa-edit mr-2" style="color:white"></i>
                  {{ isCheckingInputs ? 'Loading...' : (isEditing ? 'Save' : 'Edit') }}
                </button>
            </div>
            <div class="card-body">
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Contact Information</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">Permanent Address</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentRegResponse.permanent_address" :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">Temporary Address</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentRegResponse.mailing_address" :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Landline No</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'" v-model="studentRegResponse.landline_no"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Cell No</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'" v-model="studentResponse.std_phone_no"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Email</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'" v-model="studentResponse.std_email"
                    :readonly="!isEditing" ref="editInput" />
                </div>
              </div>
            </div>
          </div>

          <div class="card p-4 mt-2" v-if="activeSection === 'education'">
            <div class="d-flex align-items-center">
              <p class="mb-0">Edit Education Information</p>
              <button @click="toggleEditing"
                  :class="['btn', 'btn-sm', 'ms-auto', isEditing ? 'btn-success' : 'btn-primary']">
                  <i class="fas fa-edit mr-2" style="color:white"></i>
                  {{ isCheckingInputs ? 'Loading...' : (isEditing ? 'Save' : 'Edit') }}
                </button>
            </div>
            <div class="card-body">
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Educational Information</p>
              <div class="row">
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Highest Qualificattion</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentRegResponse.highest_qualification" :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Academic Record</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentRegResponse.academic_record" :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-8">
                  <label for="example-text-input" class="form-control-label">Present Organization/
                    University/Department:</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentRegResponse.present_university_name" :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-8">
                  <label for="example-text-input" class="form-control-label">University/College Enrollment-Registration
                    Number</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentRegResponse.university_reg_no" :readonly="!isEditing" ref="editInput" />
                </div>

              </div>
            </div>
          </div>

          <div class="card p-4 mt-2" v-if="activeSection === 'internship'">
            <div class="d-flex align-items-center">
              <p class="mb-0">Edit Internship Information</p>
              <button @click="toggleEditing"
                  :class="['btn', 'btn-sm', 'ms-auto', isEditing ? 'btn-success' : 'btn-primary']">
                  <i class="fas fa-edit mr-2" style="color:white"></i>
                  {{ isCheckingInputs ? 'Loading...' : (isEditing ? 'Save' : 'Edit') }}
                </button>
            </div>
            <div class="card-body">
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Internship Information</p>
              <div class="row">
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Proposed Research Area</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentInternResponse.proposed_research_area" :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">NCP Registration Number</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentInternResponse.ncp_assigned_regno" :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-8">
                  <label for="example-text-input" class="form-control-label">NCP Supervisor</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentInternResponse.ncp_employee_id" :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-8">
                  <label for="example-text-input" class="form-control-label">Research Start Date</label>
                  <input class="form-control" :type="isEditing ? 'text' : 'text'"
                    v-model="studentInternResponse.proposed_research_start_time" :readonly="!isEditing" ref="editInput" />
                </div>

              </div>
            </div>
          </div>
          <div class="card p-4 mt-2" v-if="activeSection === 'document'">
            <hr class="horizontal dark" />
            <p class="text-uppercase text-sm">Document Information</p>
            <p class="text text-xs">All files must be in jpg/jpeg. File names must be in format: 'Name_DocumentName.jpeg'
              For example: Amna_CV.jpg
            </p>
            <div class="section mt-2">
              <div class="table-responsive  text-center">
                <table class="table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 70%;">Document Name</th>
                      <th style="width: 30%;">Upload Document</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Attested Copy of Last Degree</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <label class="btn btn-xs btn-success m-2">
                          Change
                          <input type="file" accept=".jpg, .jpeg" style="display: none;" ref="fileInput0"
                            @change="handleFileChange($event, 0)" />
                        </label>
                        <span v-if="uploadedImageNames[0]">{{ uploadedImageNames[0] }}</span>
                        <!-- button 0 -->
                      </td>


                    </tr>
                    <tr>
                      <td>Updated Brief CV (including list of publications during last three years)</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <label class="btn btn-xs btn-success m-2">
                          Change
                          <input type="file" accept=".jpg, .jpeg" style="display: none;" ref="fileInput1"
                            @change="handleFileChange($event, 1)" />
                        </label>
                        <span v-if="uploadedImageNames[1]">{{ uploadedImageNames[1] }}</span>
                        <!-- button 1 -->
                      </td>
                    </tr>
                    <tr>
                      <td>Attested Copy of CNIC/Passport</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <label class="btn btn-xs btn-success m-2">
                          Change
                          <input type="file" accept=".jpg, .jpeg" style="display: none;" ref="fileInput2"
                            @change="handleFileChange($event, 2)" />
                        </label>
                        <span v-if="uploadedImageNames[2]">{{ uploadedImageNames[2] }}</span>
                        <!-- button 2 -->
                      </td>
                    </tr>

                    <tr>
                      <td>Referral Letter from parent Department/University/Organization</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <label class="btn btn-xs btn-success m-2">
                          Change
                          <input type="file" accept=".jpg, .jpeg" style="display: none;" ref="fileInput3"
                            @change="handleFileChange($event, 3)" />
                        </label>
                        <span v-if="uploadedImageNames[3]">{{ uploadedImageNames[3] }}</span>
                        <!-- button 3 -->
                      </td>

                    </tr>
                    <tr>
                      <td>Police Verification Proforma</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <label class="btn btn-xs btn-success m-2">
                          Change
                          <input type="file" accept=".jpg, .jpeg" style="display: none;" ref="fileInput4"
                            @change="handleFileChange($event, 4)" />
                        </label>
                        <span v-if="uploadedImageNames[4]">{{ uploadedImageNames[4] }}</span>
                        <!-- button 5 -->
                      </td>

                    </tr>

                    <tr>
                      <td>Immunization Certificate (COVID-19)</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <label class="btn btn-xs btn-success m-2">
                          Change
                          <input type="file" accept=".jpg, .jpeg" style="display: none;" ref="fileInput5"
                            @change="handleFileChange($event, 5)" />
                        </label>
                        <span v-if="uploadedImageNames[5]">{{ uploadedImageNames[5] }}</span>
                        <!-- button 6 -->
                      </td>

                    </tr>
                    <tr>
                      <td>Passport Size Picture(Blue or White Background)</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <label class="btn btn-xs btn-success m-2">
                          Change
                          <input type="file" accept=".jpg, .jpeg" style="display: none;" ref="fileInput6"
                            @change="handleFileChange($event, 6)" />
                        </label>
                        <span v-if="uploadedImageNames[6]">{{ uploadedImageNames[6] }}</span>
                        <!-- Use index 4 for button number 5 -->
                        <!-- button 4 -->
                      </td>

                    </tr>
                  </tbody>
                </table>
                <button class="btn  btn-success m-4" @click="saveImage">Save</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import CompleteProfile from "./components/CompleteProfile.vue";
import axios from 'axios';
// import ArgonInput from "@/components/ArgonInput.vue";
// import apiService from "@/apiservice.js"

const body = document.getElementsByTagName("body")[0];

export default {
  name: "MyprofileComp",
  data() {
    return {
      studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
      studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
      studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
      activeSection: 'personal',
      hoveredSection: '',
      showMenu: false,
      uploadedImageNames: {}, // Use an object to store image names for different buttons
      selectedFiles: {},
      isCheckingInputs: false,


    };
  },
  async created() {
    console.log(this.studentRegResponse.landline_no);
    console.log(this.studentRegResponse.mailing_address);
  },
  components: { CompleteProfile },
  watch: {
    isEditing(newIsEditing) {
      if (newIsEditing) {
        this.shouldBlink = true;
        this.$nextTick(() => {
          const inputElement = this.$refs.inputContainer.querySelector('input');
          if (inputElement) {
            inputElement.focus();
          }
        });
      } else {
        this.shouldBlink = false;
      }
    },
  },

  methods: {
    toggleEditing() {
    this.isCheckingInputs = true; // Set loading state to true

    // Simulate checking inputs (you should replace this with your actual logic)
    setTimeout(() => {
      // Perform input checks here (replace this with your actual input validation logic)

      // Toggle the editing state when input checks are complete
      this.isEditing = !this.isEditing;

      // Set loading state back to false
      this.isCheckingInputs = false;
    }, 2000); // Simulate a 2-second delay (adjust as needed)
  },
    saveImage() {
      // Check if there are selected files to save
      //const selectedFiles = Object.values(this.selectedFiles);

      //if (selectedFiles.some((file) => file)) {
      // Loop through the selected files and send them to the server
      // selectedFiles.forEach((file, buttonNumber) => {
      //  if (file) {
      // Create a FormData object to send the image data
      const formData = new FormData();
      //formData.append('image', this.selectedFiles[6]); // 'image' is the field name for the image data

      if (this.selectedFiles[6]) {
        formData.append('image', this.selectedFiles[6]);
        axios
          .put(`${this.apiUrl}/studentpic/${this.studentResponse.std_cnic}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Important: Set the content type to 'multipart/form-data'
            },
          })
          .then((response) => {
            console.log(`Image 7 saved:`, response.data);
            // Handle a successful response from the server, e.g., show a success message
            // console.log(`Image ${buttonNumber + 1} saved:`, response.data);
            //  alert(`Image ${buttonNumber + 1} saved successfully!`);
          })
          .catch((error) => {
            console.error(`Error saving image 7:`, error);
            // Handle errors, e.g., show an error message
            // console.error(`Error saving image ${buttonNumber + 1}:`, error);
            // alert(`Error saving image ${buttonNumber + 1}. Please try again.`);
          });
      }
      // } else {
      //   formData.append('doc', buttonNumber + 1);
      //   formData.append('std_cnic', this.studentResponse.std_cnic);

      //   // Make an Axios POST request to your server to save the image
      //   axios
      //     .post(`${this.apiUrl}/docs`, formData, {
      //       headers: {
      //         'Content-Type': 'multipart/form-data', // Important: Set the content type to 'multipart/form-data'
      //       },
      //     })
      //     .then((response) => {
      //       // Handle a successful response from the server, e.g., show a success message
      //       console.log(`Image ${buttonNumber + 1} saved:`, response.data);
      //       alert(`Image ${buttonNumber + 1} saved successfully!`);
      //     })
      //     .catch((error) => {
      //       // Handle errors, e.g., show an error message
      //       console.error(`Error saving image ${buttonNumber + 1}:`, error);
      //       alert(`Error saving image ${buttonNumber + 1}. Please try again.`);
      //     });
      // }
      //     }
      //   });
      // } else {
      //   // Handle the case where no files have been selected
      //   alert('No images have been selected. Please select images before saving.');
      // }
    },



    handleFileChange(event, buttonIndex) {
      const fileInputRef = this.$refs[`fileInput${buttonIndex}`];
      const selectedFile = event.target.files[0];

      if (selectedFile) {
        // Check if the selected file is a JPG/JPEG file
        if (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/jpg') {
          // Set the uploaded image name for the specific button
          this.uploadedImageNames[buttonIndex] = selectedFile.name;
          // Store the selected file for the specific button
          this.selectedFiles[buttonIndex] = selectedFile;
          // Here, you can handle the selected file as needed, e.g., upload it to the database.
          // You can access the selected file using this.selectedFiles[buttonIndex].
          console.log(`Selected file for button ${buttonIndex + 1}:`, this.selectedFiles[buttonIndex]);
        } else {
          // Display an error message or alert if the file type is not supported
          alert('Please select a JPG or JPEG file.');
          // Clear the file input value to allow selecting another file
          fileInputRef.value = null;
          // Clear the uploaded image name and selected file for the specific button
          this.uploadedImageNames[buttonIndex] = null;
          this.selectedFiles[buttonIndex] = null;
        }
      } else {
        // Clear the uploaded image name and selected file for the specific button if no file is selected
        this.uploadedImageNames[buttonIndex] = null;
        this.selectedFiles[buttonIndex] = null;
      }
    },
    handleSectionClick(section) {
      this.activeSection = section;
    },
    handleHoveredSectionChange(section) {
      this.hoveredSection = section;
    },

  },
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL;

    },

  },
  async mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();

    // Fetch student data when the component is mounted

  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  },

};
</script>
<style>
table th,
td {
  font-size: 14px;
}
</style>