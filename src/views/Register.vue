<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Register Now</h4>
        </div>
        <form @submit.prevent="RsubmitForm">
            <div class="card p-3 mb-4">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-8 mb-sm-3 mx-auto evaluation-report mt-2">
                        <h5 class="mb-3 text-center">Instructions:</h5>
                        <p><b><i>Applicants are required to read the NCP Hosted Researchers Policy available at
                                    www.ncp.edu.pk/hr.php
                                    carefully before filling the form.</i></b></p>
                        <p><b><i>Applicant must have first division or equivalent grade in final/last degree and no more
                                    than one second
                                    division in entire academic career.</i></b></p>
                        <p><b><i>Apply at least 30 days before initiation of proposed research work at NCP Campus.</i></b>
                        </p>
                        <p><b><i>Outstation Hosted Researcher means whose University/College/R&D Institute is outside
                                    municipal jurisdiction of Rawalpindi/ Islamabad
                                    and accommodation to Outstation Hosted Researcher will only be provided “SUBJECT TO
                                    AVAILABILITY”</i></b>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card p-3">

                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center">
                        Completed by Applicant Hosted Researcher:
                        <div
                            class="passport-picture-area bg-light rounded-circle d-flex align-items-center justify-content-center">
                            <i class="fas fa-user fa-3x text-primary"></i>
                        </div>
                    </legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label for="researcherName">Name of Hosted Researcher:</label>
                                <input type="text" class="form-control" id="researcherName" v-model="studentName"
                                    readonly />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="researcherPhone">CNIC/PassportNo:</label>
                                <input type="text" class="form-control" id="researcherPhone" v-model="formData.std_cnic"
                                    readonly />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="researcherPhone">Date of Birth:</label>
                                <input type="date" class="form-control" id="researcherPhone" v-model="formData.dob"
                                    required />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Highest Qualification</label>
                                <div class="row">
                                    <div class="col-md-1 ">
                                        <div class="form-check">
                                            <input type="radio" checked class="form-check-input" value="PhD"
                                                name="qualification"
                                                v-model="formData.highest_qualification" required>
                                            <label class="form-check-label" for="qualification1">PhD</label>
                                        </div>
                                    </div>

                                    <div class="col-md-1">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="MSc"  name="qualification"  v-model="formData.highest_qualification" required>
                                            <label class="form-check-label" for="qualification2">MSc</label>
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="DAE" name="qualification"  v-model="formData.highest_qualification" required>
                                            <label class="form-check-label" for="qualification3">DAE</label>
                                        </div>
                                    </div>
                                    <div class="col-md-1 me-4">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="Mphil/MS"
                                            name="qualification" 
                                                v-model="formData.highest_qualification" required>
                                            <label class="form-check-label" for="qualification4">Mphil/MS</label>
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="other"  name="qualification"  v-model="formData.highest_qualification" required>
                                            <label class="form-check-label" for="qualification5">Others</label>
                                        </div>
                                    </div>

                                    <div v-if="formData.highest_qualification === 'other'" class="col-md-4">
                                        <div class="form-check">
                                            <input  type="text"  name="qualification"  maxlength="10"
                                                class="input-line" v-model="this.custom_qualification"
                                                 required>
                                            <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ?
                                                $isValidInput(this.custom_qualification) : '' }}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label>Academic Record:</label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" checked class="form-check-input" 
                                                value="Throughout 1st Division" name="record"
                                                v-model="formData.academic_record" required>
                                            <label class="form-check-label" for="record1">Through 1st
                                                Division</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" 
                                                value="One 2nd Div. in Career" name="record"
                                                v-model="formData.academic_record" required>
                                            <label class="form-check-label" for="record2">One 2nd Div. in
                                                Career</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Current Status:</label>
                                <div class="row">
                                    <div class="col-md-3 ">
                                        <div class="form-check">
                                            <input type="radio" checked class="form-check-input" 
                                                value="Employee" name="status" v-model="formData.present_status" required>
                                            <label class="form-check-label" for="status1">1.Employee</label>

                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" 
                                                value="Presently Registered Student" name="status"
                                                v-model="formData.present_status" required>
                                            <label class="form-check-label" for="status2">2.Presently Registered
                                                Student</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="other" name="status" v-model="formData.present_status" required>
                                            <label class="form-check-label" for="status3">3.Others</label>
                                            <input  v-if="formData.present_status === 'other'" type="text" id="present_status" maxlength="15"
                                                name="present_status" class="input-line"
                                                v-model="this.custom_status"  required>
                                        </div>
                                    </div>
                                    <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ?
                                        $isValidInput(formData.present_status) : '' }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <label for="designation">Designation (if employed):</label>
                                <input type="text" class="form-control" maxlength="25" id="designation"
                                    v-model="formData.designation" required />
                            </div>
                            <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ?
                                $isValidInput(formData.designation) : '' }}</p>

                            <div class="col-md-5 mb-3">
                                <label for="registrationNo">University/College Enrollment-Registration Number:</label>
                                <input type="text" class="form-control" maxlength="25" id="university_reg_no"
                                    v-model="formData.university_reg_no" />
                            </div>
                            <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ? $validateNumber(formData.university_reg_no) : '' }}</p>
                            <div class="col-md-4 mb-3">
                                <label for="entryCardNo">Present Organization/ University/Department:</label>
                                <input type="text" class="form-control" maxlength="40" id="present_university_name"
                                    v-model="formData.present_university_name" required />
                            </div>
                            <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ?
                                $isValidInput(formData.present_university_name) : '' }}</p>

                        </div>


                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="department">Permanent Address:</label>
                                <textarea maxlength="200" class="form-control" id="peraddress"
                                    v-model="formData.permanent_address" required />
                                <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ?
                                    $isValidInput(formData.permanent_address) : '' }}</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="group">Temporary Address:</label>
                                <textarea maxlength="200" class="form-control" id="tempaddress"
                                    v-model="formData.mailing_address" required />
                                <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ?
                                    $isValidInput(formData.mailing_address) : '' }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3 col-4">
                                <label for="department">Landline No.:</label>
                                <input type="text" class="form-control" id="landline" v-model="formData.landline_no"
                                    maxlength="10" />
                                <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ? $validateNumber(formData.landline_no) : '' }}</p>
                            </div>
                            <div class="col-md-4 mb-3 col-4">
                                <label for="group">Cell:</label>
                                <input type="text" maxlength="11" class="form-control" id="cell" v-model="formData.studentPhone"
                                    required />
                                <p :style="{ color: 'red', fontSize: '12px' }">{{ isFormSubmitted ? $validateNumber(formData.studentPhone) : '' }}</p>
                            </div>
                            <div class="col-md-4 mb-3 col-4">
                                <label for="group">E-mail:</label>
                                <input type="text" class="form-control" id="mail" v-model="studentEmail" readonly />
                            </div>
                        </div>


                    </div>
                </fieldset>
            </div>
            <div class="form-actions mt-4 d-flex justify-content-center">
                <button type="submit" class="btn btn-success">Submit</button>
            </div>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: "RegisterProforma",
    data() {
        return {
            custom_qualification:'',
            custom_status:'',
            formData: {
                std_cnic: '',
                dob: '',
                highest_qualification: 'PhD',
                academic_record: 'Through 1st Division',
                present_status: 'Employee',
                designation: '',
                university_reg_no: '',
                present_university_name: '',
                permanent_address: '',
                mailing_address: '',
                landline_no: '',
                studentPhone: ''

            },
            studentInfo: null,
            studentName: '',
            studentEmail: '',
           
            isvalid: false,
            isFormSubmitted: false,
            errorMessage: '',

        }
    },
    computed: {
        apiUrl() {
            return process.env.VUE_APP_API_URL;

        },

    },
    async created() {
        // Retrieve the user's CNIC from sessionStorage
        const cnic = sessionStorage.getItem('std_cnic');
        if (cnic) {
            try {
                // Make an API request to fetch student information based on CNIC
                const response = await axios.get(`${this.apiUrl}/student/${cnic}`);
                this.studentInfo = response.data;
                if (this.studentInfo) {

                    // Initialize formData.std_cnic with the value of studentInfo.std_cnic
                    this.formData.std_cnic = this.studentInfo.std_cnic;
                    this.studentName = this.studentInfo.std_name;
                    this.studentEmail = this.studentInfo.std_email;
                }
                console.log("Student Info:", this.studentInfo);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        } else {
            console.log("CNIC is not available in sessionStorage");
        }
    },
    methods: {
     
        validateInput() {
            console.log("kkj")
            this.isFormSubmitted = true
            // Validate each input field
            const qualError = this.$isValidInput(this.formData.highest_qualification);
            const statusError = this.$isValidInput(this.formData.present_status);
            const designationError = this.$isValidInput(this.formData.designation);
            const regError = this.$isValidInput(this.formData.university_reg_no);
            const uniError = this.$isValidInput(this.formData.present_university_name);
            const permaddError = this.$isValidInput(this.formData.permanent_address);
            const tempError = this.$isValidInput(this.formData.mailing_address);
            const landerror=this.$validateNumber(this.formData.landline_no);
            const cellerror=this.$validateNumber(this.formData.studentPhone)
            // If any validation fails, display error messages and prevent form submission
            if ( qualError || statusError || designationError || regError || uniError || permaddError || tempError || landerror || cellerror) {
                console.log("jodso")
                return;
            }
            this.isvalid = true
            this.errorMessage = '';
        },
        resetForm() {
            this.isFormSubmitted = false;
            this.isvalid = false;
        },
        RsubmitForm() {
            console.log("submit called");
            this.validateInput();
            console.log(this.formData.highest_qualification);
            console.log(this.formData.present_status);
           
            if(this.isvalid)
            {
                console.log("vahh")
                if(this.formData.highest_qualification=='other')
            {
                this.formData.highest_qualification=this.custom_qualification
            }
            if(this.formData.present_status=='other')
            {
                this.formData.present_status=this.custom_status
            }
               axios
                .put(`${this.apiUrl}/student/${this.studentInfo.std_cnic}`, {std_phone_no: this.formData.studentPhone,})
                .then((response) =>{
                    console.log('Phone updated successfully!', response.data);
                })
            axios
                .post(`${this.apiUrl}/studentreg`, this.formData)
                .then((response) => {

                    // Handle the response from the backend if needed
                    console.log('Form submitted successfully!', response.data);

                    this.$router.push('/dashboard');
                })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error submitting form:', error);
            });

            }
            // // const cnic= sessionStorage.getItem('std_cnic');
           
        },
    },

    watch: {
        // "formData.highest_qualification": function (newValue) {
        //     if (newValue === "other") {
        //         this.$nextTick(() => {
        //             this.$refs.qualificationInput.focus(); // Focus the input field
        //         });
        //     }
        // },
        //     "formData.present_status": function (newValue) {
        //     if (newValue === "other") {
        //         this.$nextTick(() => {
        //             this.$refs.statusInput.focus(); // Focus the input field
        //         });
        //     }
        // },

    },
};
</script>
  
<style scoped>.rectangle-box {
    border: 1px solid #000;
}

.evaluation-report p {
    font-size: 12px;
}

.input-line {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}
</style>
  