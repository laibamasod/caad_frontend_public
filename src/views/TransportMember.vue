<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Transport Membership Proforma</h4>
        </div>
        <form @submit.prevent="submitTransportForm">
            <div class="card mb-4 form-control-md fs-6">
                <fieldset>
                    <legend class="card-header">Information Required From Hosted Researcher</legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="std_name">Name of Hosted Researcher:</label>
                                <input type="text" class="form-control" id="std_name" v-model="studentResponse.std_name" readonly />
                            </div>
                            <div class="col-md-6">
                                <label for="ncp_assigned_regno">Registration Number:</label>
                                <input type="text" class="form-control" id="ncp_assigned_regno" v-model="studentInternResponse.ncp_assigned_regno"
                                    readonly />
                            </div>
                            <div class="col-md-6">
                                <label for="identitycard">ID Card No:</label>
                                <input type="number" class="form-control" id="identitycard"
                                    v-model="studentIdentityResponse.identity_id" readonly />
                            </div>
                            <div class="col-md-6">
                                <label for="proposed_research_area">Host Department:</label>
                                <input type="text" class="form-control" id="proposed_research_area"
                                    v-model="studentInternResponse.proposed_research_department" readonly />
                            </div>
                            <div class="col-md-6">
                                <label for="proposed_research_end_time">ToRs Date of Expiry Stay at NCP:</label>
                                <input type="date" class="form-control" id="proposed_research_end_time"
                                    v-model="studentInternResponse.proposed_research_end_time" readonly />
                            </div>
                            <div class="col-md-6">
                                <label for="pick_drop_point">Pick/Drop Point:</label>
                                <input required type="text" class="form-control" id="pick_drop_point"
                                    v-model="applicantInfo.pick_drop_point" />
                            </div>
                            <div class="col-md-6">
                                <label>Duration of Transport Requirement</label>
                                <div>
                                    <div class="d-inline align-items-center">
                                        <label for="transport_req_start_date" class="me-2 d-inline"
                                            style="margin-right: 0.5rem;">From:</label>
                                        <input type="date" class="form-control d-inline" id="transport_req_start_date"
                                            required v-model="applicantInfo.transport_req_start_date" style="width: 35%;" />
                                    </div>
                                    <div class="d-inline align-items-center">
                                        <label for="transport_req_end_date" class="me-2 d-inline"
                                            style="margin-right: 0.5rem;">To:</label>
                                        <input type="date" class="form-control d-inline" id="transport_req_end_date"
                                        required v-model="applicantInfo.transport_req_end_date" style="width: 35%;" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="phone_no">Phone #:</label>
                                <input type="text" class="form-control" id="phone_no"
                                    v-model="studentResponse.std_phone_no" readonly />

                            </div>
                            <div class="col-md-6">
                                <label for="lab_contact_no">Lab Phone #:</label>
                                <input type="number" class="form-control" id="lab_contact_no"
                                    v-model="applicantInfo.lab_contact_no" />
                            </div>
                            <div class="col-md-4 mb-2 mt-4">
                                <label for="gm-finance">Signature of Director Concerned:</label>
                                <input disabled type="text" id="gm-finance" name="gm-finance" class="input-line">
                            </div>
                        </div>
                        <!-- just display appliction status instead of CAAD Fields -->
                        <div class="printOff mb-3">
                            <div class="d-flex justify-content-start align-items-center mt-4">
                                <label class="mb-2 mb-md-0">Please print the form, get necessary Signatures and upload it:</label>
                                <button class="btn btn-success mb-2 mb-md-0 ms-3" @click="$printForm()" :disabled="!isFormValid">
                                    <i class="fas fa-print"></i> <!-- Font Awesome icon for printing -->
                                </button>
                            </div>
                            <div class="mt-3 d-md-flex ">
                                <input required type="file" @change="handleFileUpload" class="btn-outline-success">
                            </div>
                        </div>
                    </div>
                </fieldset>

            </div>
            <div class="printOff">
                <div class="row">
                    <div class="form-actions d-flex justify-content-center mt-4">
                        <button type="submit" class="btn btn-success me-2" @click="saveForm">Save</button>
                        <button type="submit" class="btn btn-success">Submit</button>
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
    name: 'TransportMember',

    data() {
        return {
            studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
            studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
            studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
            studentIdentityResponse: JSON.parse(sessionStorage.getItem('student_identity_response')) || {},
            isFormValid: false,
            applicantInfo: {
                pick_drop_point: '',
                transport_req_start_date: '',
                transport_req_end_date: '',
                lab_contact_no: '',
                transport_application_date: '',
                std_cnic: sessionStorage.getItem('std_cnic'),
            },

        };

    },
    methods: {

        allRequiredInputsFilled() {
            const requiredFields = [
                this.applicantInfo.pick_drop_point,
                this.applicantInfo.transport_req_start_date,
                this.applicantInfo.transport_req_end_date,
            ];
            return requiredFields.every(field => {
                if (typeof field === 'string') {
                    return field.trim() !== '';
                } else {
                    // Handle non-string fields, e.g., checkboxes or date fields
                    return field !== null && field !== undefined; // Adjust as needed
                }
            });
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
                pick_drop_point: this.applicantInfo.pick_drop_point,
                lab_contact_no: this.applicantInfo.lab_contact_no,
                transport_req_start_date: this.applicantInfo.transport_req_start_date,
                transport_req_end_date: this.applicantInfo.transport_req_end_date
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
        submitTransportForm() {
            console.log("submit called");
            this.applicantInfo.transport_application_date = apiservice.formatDate(new Date())
            console.log(this.applicantInfo);
            axios
                .post(`${this.apiUrl}/transport`, this.applicantInfo)
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
    computed: {
        apiUrl() {
            return process.env.VUE_APP_API_URL;

        },
        cookieName() {
            const cnic = sessionStorage.getItem('std_cnic');
            return 'form-data-'+ cnic + this.$route.path; // Unique name based on the route
        },

    },

    created() {
        this.loadSavedFormData();
    
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

 