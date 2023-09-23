<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Identity Card Proforma</h4>
        </div>
        <!-- <div class="card card-profile justify-content-center mb-4 mx-lg-12 pb-lg-4">
            <h4 class="m-2 p-3 justify-content-center text-center">Identity Card Picture</h4>
            <div class="justify-content-center text-center">
                <div class="order-lg-2">
                    <div class="mt-1 mt-lg-1 mb-4 mb-lg-0">
                        <img :src="picturePath" alt="User Picture" class="img-thumbnail passport-size">

                    </div>
                </div>
            </div>
        </div> -->
        <form @submit.prevent="submitidentityform">
            <div class="card mb-4">
                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center">
                        PART-I (to be completed by Applicant Hosted Researcher):
                        <div class="avatar avatar-xl position-relative">
                            <img src="../assets/img/amna.jpg" alt="profile_image"
                                class="shadow-sm w-100 border-radius-lg" />
                        </div>
                    </legend>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 ">
                                <label for="std_name" class="form-control-label">Name of Hosted Researcher:</label>
                                <input readonly class="form-control" type="text" id="std_name"
                                    :value="studentResponse.std_name" />
                            </div>
                            <div class="col-md-4 ">
                                <label for="ncp_assigned_regno" class="form-control-label">Registration Number:</label>
                                <input class="form-control" type="text" id="ncp_assigned_regno"
                                    :value="studentInternResponse.ncp_assigned_regno" readonly />
                            </div>
                            <div class="col-md-4">
                                <label for="blood_group" class="form-control-label">Blood Group:</label>
                                <input class="form-control" required type="text" id="blood_group"
                                    v-model="applicantInfo.blood_group" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label for="std_cnic" class="form-control-label">CNIC:</label>
                                <input class="form-control" type="text" id="std_cnic" :value="studentResponse.std_cnic"
                                    readonly />
                            </div>
                            <div class="col-md-4">
                                <label for="designation" class="form-control-label">Designation (Student/Employee):</label>
                                <input class="form-control" type="text" id="designation"
                                    :value="studentRegResponse.designation" readonly />
                            </div>
                            <div class="col-md-4">
                                <label for="identification_mark" class="form-control-label">Identification Mark:</label>
                                <input class="form-control" type="text" id="identification_mark"
                                    v-model="applicantInfo.identification_mark" />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label for="registration_receipt_number" class="form-control-label">Registration Fee Receipt
                                    # (Bank
                                    Receipt):</label>
                                <input class="form-control" required type="number" id="registration_receipt_number"
                                    v-model="applicantInfo.registration_receipt_number" />
                            </div>
                            <div class="col-md-4">
                                <label for="registration_date" class="form-control-label">Registration Fee Dated:</label>
                                <input required class="form-control" type="date" id="registration_date"
                                    v-model="applicantInfo.registration_date" />
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

<style scoped>
.passport-size {
    max-width: 130px;
    max-height: 150px;
}
</style>
<script>

// import ArgonInput from "@/components/ArgonInput.vue";
import axios from "axios";
import apiservice from '@/apiservice';
export default {
    name: 'IdentityCard',
    components: {
        // ArgonInput,
    },

    data() {
        return {
            studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
            studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
            studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
            isFormValid: false,
            picturePath: require('@/assets/img/amna.jpg'),
            applicantInfo: {
                identification_mark: '',
                blood_group: '',
                registration_receipt_number: '',
                registration_date: '',
                identity_apply_date: new Date().toISOString(),
                std_cnic: sessionStorage.getItem('std_cnic'),
            },

        };

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
        this.loadSavedFormData(); // Load saved data when the component is created
    },
    methods: {
        loadSavedFormData() {
            const formDataCookie = this.getCookie(this.cookieName);
            if (formDataCookie) {
                const formData = JSON.parse(formDataCookie);
                Object.assign(this.applicantInfo, formData);
            }
        },
        saveForm() {
            const formData = {
                identification_mark: this.applicantInfo.identification_mark,
                blood_group: this.applicantInfo.blood_group,
                registration_receipt_number: this.applicantInfo.registration_receipt_number,
                registration_date: this.applicantInfo.registration_date,
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

        submitidentityform() {
            console.log("submit called");
            this.applicantInfo.identity_apply_date = apiservice.formatDate(new Date())
            console.log(this.applicantInfo);
            axios
                .post(`${this.apiUrl}/identity`, this.applicantInfo)
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




}
</script>

 