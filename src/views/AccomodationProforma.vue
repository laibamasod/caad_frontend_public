<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4 printShow">
            <h4 class="card-header">Accommodation Proforma</h4>
        </div>s
        <form @submit.prevent="submitAccomodationForm">
            <div class="card mb-4">
                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center">
                        PART-I (to be completed by Applicant Hosted Researcher):
                        <div
                            class="passport-picture-area bg-light rounded-circle d-flex align-items-center justify-content-center">
                            <i class="fas fa-user fa-3x text-primary"></i>
                        </div>
                    </legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="name">1. Name of Hosted Researcher:</label>
                                <input readonly type="text" class="form-control" id="name"
                                    v-model="studentResponse.std_name" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="applicationDate">2. Date of Application:</label>
                                <input type="date" class="form-control" id="applicationDate" readonly
                                    v-model="applicantInfo.applicationDate" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="registrationNo">3. Registration No.:</label>
                                <input readonly type="text" class="form-control" id="registrationNo"
                                    v-model="studentInternResponse.ncp_assigned_regno" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="ncpId">4. NCP ID Card No:</label>
                                <input readonly type="number" class="form-control" id="ncpId"
                                    v-model="studentIdentityResponse.identity_id" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="department">5. Department at NCP:</label>
                                <input readonly type="text" class="form-control" id="department"
                                    v-model="studentInternResponse.proposed_research_department" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="expiryDate">6. Date of Expiry of Stay at NCP as per ToRs:</label>
                                <input readonly type="date" class="form-control" id="expiryDate"
                                    v-model="studentInternResponse.proposed_research_end_time" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="parentOrgType">7. Parent University/Institute/Organization (Tick):</label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input required type="radio" name="org" class="form-check-input" value="local" id="local"
                                    v-model="applicantInfo.institute_type" />
                                <label class="form-check-label" for="local">Local</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input required type="radio" name="org" class="form-check-input" value="outstation"
                                    id="outstation" v-model="applicantInfo.institute_type" />
                                <label class="form-check-label" for="outstation">Outstation</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="parentOrgName">8. Name/Address of Parent University/Institute/Organization of Hosted
                                Researcher:</label>
                            <input readonly type="text" class="form-control" id="parentOrgName"
                                v-model="studentRegResponse.present_university_name" />
                        </div>

                        <div class="form-group">
                            <label>9. Accommodation required with effect (date):</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="stayFrom">From:</label>
                                    <input required type="date" class="form-control" id="accommodationFromDate"
                                        v-model="applicantInfo.accommodation_start_time">
                                </div>
                                <div class="col-md-6">
                                    <label for="stayTo">To:</label>
                                    <input required type="date" class="form-control" id="accommodationToDate"
                                        v-model="applicantInfo.accommodation_end_time">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>10. Contact Phone No.</label>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <input readonly type="text" class="form-control" id="contactCell"
                                        v-model="studentResponse.std_phone_no" />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <input readonly type="number" class="form-control" placeholder="Res" id="contactRes"
                                        v-model="studentRegResponse.landline_no" />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <input type="number" class="form-control" placeholder="Contact Lab Ext"
                                        id="contactLabExt" v-model="applicantInfo.contactLabExt" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="securityProforma">11. Have you submitted security proforma with police
                                verification?
                            </label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input name="sec" required type="radio" class="form-check-input" value="yes"
                                    v-model="applicantInfo.security_and_police_proforma" />
                                <label class="form-check-label">YES</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input name="sec" required type="radio" class="form-check-input" value="no"
                                    v-model="applicantInfo.security_and_police_proforma" />
                                <label class="form-check-label">NO</label>
                            </div>
                        </div>

                        <div>
                            <label for="applicantSignature">12. Signature of Applicant Hosted Researcher:</label>
                            <input disabled type="text" id="applicantSignature" name="applicantSignature"
                                class="input-line">
                        </div>
                        <br>
                        <div>
                            <label for="recommendationDirector">13. Recommendation of Concerned Director for Validity of
                                Request/Period:</label>
                            <input disabled type="text" id="recommendationDirector" name="recommendationDirector"
                                class="input-line">
                        </div>

                        <div class="printOff card p-3 mb-3">
                            <div class="d-flex justify-content-start align-items-center mt-4">
                                <label class="mb-2 mb-md-0">14. Please print the form and upload it:</label>
                                <button class="btn btn-success mb-2 mb-md-0 ms-3" @click="$printForm()"
                                    :disabled="!isFormValid">
                                    <i class="fas fa-print"></i> <!-- Font Awesome icon for printing -->
                                </button>
                            </div>
                            <div class="mt-3 d-md-flex ">
                                <input  type="file" @change="handleFileUpload" class="form-control-file">
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>


            <div class="printOff">
                <div class="row">
                    <div class="form-actions d-flex justify-content-center mt-4">
                        <button type="submit" class="btn btn-success me-2" @click="saveForm">Save</button>
                        <button type="submit" class="btn btn-success" :disabled="!isFormValid">Submit</button>
                    </div>
                </div>
            </div>


        </form>
    </div>
</template>
  
<script>
import axios from 'axios';
import apiservice from '@/apiservice';
export default {
    name: 'AccomodationProforma',

    data() {
        return {
            isFormValid: false,
            studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
            studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
            studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
            studentIdentityResponse: JSON.parse(sessionStorage.getItem('student_identity_response')) || {},
            printFormAcc: null,
            applicantInfo: {
                date_of_application: '',
                institute_type: '',                // Added field
                accommodation_start_time: '', // Added field
                accommodation_end_time: '',   // Added field
                contactLabExt: '',
                security_and_police_proforma: 'yes',
                std_cnic: sessionStorage.getItem('std_cnic'),
            },
        }
    },

    computed: {
        apiUrl() {
            return process.env.VUE_APP_API_URL;
        },
        cookieName() {
            const cnic = sessionStorage.getItem('std_cnic');
            return 'form-data-' + cnic + this.$route.path;  // Unique name based on the route
        },
    },

    created() {
        this.applicantInfo.accomodation_start_time = this.studentInternResponse.accomodation_start_time;
        this.applicantInfo.accomodation_end_time = this.studentInternResponse.accomodation_end_time;
        this.loadSavedFormData(); // Load saved data when the component is created
    },

    methods: {
        allRequiredInputsFilled() {
            const requiredFields = [
                this.applicantInfo.institute_type,
                this.applicantInfo.accommodation_start_time,
                this.applicantInfo.accommodation_end_time,
                this.applicantInfo.security_and_police_proforma,
            ];

            return requiredFields.every(field => field.trim() !== '');
        },
        
        handleFileUpload(event) {
            this.applicantInfo.printFormAcc = event.target.files[0];
        },

        loadSavedFormData() {
            const formDataCookie = this.getCookie(this.cookieName);
            if (formDataCookie) {
                const formData = JSON.parse(formDataCookie);
                Object.assign(this.applicantInfo, formData);
            }
        },
        saveForm() {
            const formData = {
                institute_type: this.applicantInfo.institute_type,
                accommodation_start_time: this.applicantInfo.accommodation_start_time,
                accommodation_end_time: this.applicantInfo.accommodation_end_time,
                contactLabExt: this.applicantInfo.contactLabExt,
                security_and_police_proforma: this.applicantInfo.security_and_police_proforma,
            };
            this.setCookie(this.cookieName, JSON.stringify(formData), 365);
            alert('Form data saved.');
        },
        setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        },
        getCookie(name) {
            const value = "; " + document.cookie;
            const parts = value.split("; " + name + "=");
            if (parts.length === 2) {
                return parts.pop().split(";").shift();
            }
            return null;
        },
        submitAccomodationForm() {
            console.log("submit called");
            console.log(this.applicantInfo);
            axios
                .post(`${this.apiUrl}/accomodation`, this.applicantInfo)
                .then((response) => {

                    // Handle the response from the backend if needed
                    console.log('Form submitted successfully!', response.data);

                    this.$router.push('/dashboard');
                })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                });
        },
    },
    async mounted() {
        this.applicantInfo.date_of_application = apiservice.formatDate(new Date())
    },
    watch: {
        applicantInfo: {
            handler: function () {
                this.isFormValid = this.allRequiredInputsFilled();
            },
            deep: true
        }
    }

};
</script>

<style>
.input-line {
    border: none;
    border-bottom: 1px solid black;
}

.rectangle-box {
    border: 1px solid #000;
}
</style>
