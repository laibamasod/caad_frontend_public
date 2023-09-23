<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Late Sitting Proforma</h4>
        </div>
        <form @submit.prevent="submitForm">
            <div class="card mb-4 form-control-md fs-6">
                <fieldset>
                    <legend class="card-header">PART-I: Information Required From Hosted Researcher</legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <label for="name">Name of Hosted Researcher:</label>
                                <input readonly type="text" class="form-control" id="name"  v-model="studentResponse.std_name" />
                            </div>
                            <div class="col-md-4">
                                <label for="regisno">Registration Number:</label>
                                <input readonly type="text" class="form-control" id="regisno"
                                    v-model="studentInternResponse.ncp_assigned_regno" />
                            </div>
                            <div class="col-md-4">
                                <label for="cnic">CNIC (without dashes):</label>
                                <input readonly type="text" class="form-control" id="cnic" v-model="studentResponse.std_cnic" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label for="workarea">Work Area During Late Sitting(Block/ Lab Number):</label>
                                <input required type="text" class="form-control" id="workarea"
                                    v-model="applicantInfo.workarea" />
                            </div>
                            <div class="col-md-8 mb-2">
                                <label>Duration of Late Sitting</label>
                                <div>
                                    <div class="d-inline align-items-center">
                                        <label for="latesitstart" class="me-2d-inline"
                                            style="margin-right: 0.5rem;">From:</label>
                                        <input required type="date" class="form-control d-inline" id="latesitstart"
                                            v-model="applicantInfo.latesitstart" style="width: 35%;" />
                                    </div>
                                    <div class="d-inline align-items-center">
                                        <label for="latesitend" class="me-2 d-inline"
                                            style="margin-right: 0.5rem;">To:</label>
                                        <input required type="date" class="form-control d-inline" id="latesitend"
                                            v-model="applicantInfo.latesitend" style="width: 35%;" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label for="contactlab">Lab Phone #:</label>
                                <input type="number" class="form-control" id="contactlab"
                                    v-model="applicantInfo.contactlab" />
                            </div>
                            <div class="col-md-4">
                                <label for="contactcell">Cell Phone #:</label>
                                <input readonly type="number" class="form-control" id="contactcell"
                                v-model="studentResponse.std_phone_no" />
                            </div>
                            <div class="col-md-4">
                                <label for="latesitreason">Reason for Late Sitting:</label>
                                <textarea required class="form-control" id="latesitreason"
                                    v-model="applicantInfo.latesitreason" rows="3" cols="50" maxlength="250"></textarea>
                                <!-- <p>Remaining characters: {{ remainingCharacters }}</p> -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mt-lg-n4 mt-md-n4">
                                <label for="caretaker">Name of Caretaker During Late Sitting:</label>
                                <input required type="text" class="form-control" id="caretaker"
                                    v-model="applicantInfo.caretaker" />

                            </div>
                            <div class="form-check col-md-6 mt-3">
                                <input required type="checkbox" class="form-check-input" id="recommendation"
                                    v-model="applicantInfo.recommendation">
                                <label class="form-check-label text-dark font-weight-bolder" for="recommendation">
                                    Recommendation By Hosted Researcher's Supervisor
                                </label>
                            </div>

                        </div>
                        <label class="h6">Residence Contact Incase of Emergency:</label>
                        <div class="row mb-4">

                            <div class="col-md-4">
                                <label for="emergencyname">Name:</label>
                                <input required type="text" class="form-control" id="emergencyname"
                                    v-model="applicantInfo.emergencyname" />
                            </div>
                            <div class="col-md-4">
                                <label for="emergencycontactcell">Cell #:</label>
                                <input required type="number" class="form-control" id="emergencycontactcell"
                                    v-model="applicantInfo.emergencycontactcell" />
                            </div>
                            <div class="col-md-4">
                                <label for="emergencycontactptcl">Landline #:</label>
                                <input type="number" class="form-control" id="emergencycontactptcl"
                                    v-model="applicantInfo.emergencycontactptcl" />
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-4">
                                <label for="todayDate">Date of Application:</label>
                                <input type="date" class="form-control" id="todayDate" v-model="applicantInfo.todayDate"
                                    readonly />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-2 mt-2">
                                <label for="gm-finance">Signature of Applicant:</label>
                                <input disabled type="text" id="gm-finance" name="gm-finance" class="input-line">
                            </div>
                            <div class="col-md-4 mb-2 mt-2">
                                <label for="gm-finance">Signature of Supervisor:</label>
                                <input disabled type="text" id="gm-finance" name="gm-finance" class="input-line">
                            </div>
                            <div class="col-md-4 mb-2 mt-2">
                                <label for="gm-finance">Signature of Director Concerned:</label>
                                <input disabled type="text" id="gm-finance" name="gm-finance" class="input-line">
                            </div>
                        </div>
                    </div>
                    <!-- when the form is submitted, get the date of the form at that time and then send it -->
                    <!-- just display appliction status instead of CAAD Fields -->

                </fieldset>

            </div>
            <div class="printOff card p-3 mb-3">
                <div class="d-flex justify-content-start align-items-center mt-4">
                    <label class="mb-2 mb-md-0">Please print the form and upload it:</label>
                    <button class="btn btn-success mb-2 mb-md-0 ms-3" @click="$printForm()" :disabled="!isFormValid">
                        <i class="fas fa-print"></i> <!-- Font Awesome icon for printing -->
                    </button>
                </div>
                <div class="mt-3 d-md-flex ">
                    <input required type="file" @change="handleFileUpload" class="btn-outline-success">
                </div>
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
<style>
.input-line {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}
</style>
<script>
// import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
export default {
    name: 'LateSitting',
    components: {
        // ArgonCheckbox,
    },
    data() {
        return {
            studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
            studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
            studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
            isFormValid: false,
            applicantInfo: {
                // name: '',
                // regisno: '',
                latesitreason: '',
                //     maxlength:300,
                // cnic: '',
                workarea: '',
                contactlab: '',
                contactcell: '',
                latesitstart: '',
                latesitend: '',
                emergencyname: '',
                emergencycontactcell: '',
                emergencycontactptcl: '',
                caretaker: '',
                recommendation: false,
                todayDate: '',
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
        submitForm() {
            const currentDate = new Date();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const day = currentDate.getDate().toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            this.applicantInfo.todayDate = `${year}-${month}-${day}`;
            // console.log(this.formData.todayDate);
        },
        allRequiredInputsFilled() {
            const requiredFields = [
                this.applicantInfo.workarea,
                this.applicantInfo.contactlab,
                this.applicantInfo.latesitreason,
                this.applicantInfo.latesitstart,
                this.applicantInfo.latesitend,
                this.applicantInfo.emergencyname,
                this.applicantInfo.emergencycontactcell,
                this.applicantInfo.caretaker,
            ];

            const isRecommended = this.applicantInfo.recommendation;
            return requiredFields.every(field => {
                if (typeof field === 'string') {
                    return field.trim() !== '';
                } else {
                    return field !== null && field !== undefined;
                }
            }) && isRecommended;
        },

        loadSavedFormData() {
            const formDataCookie = this.getCookie(this.cookieName);
            if (formDataCookie) {
                const myformData = JSON.parse(formDataCookie);
                Object.assign(this.applicantInfo, myformData);
            }
        },
        saveForm() {
            const savedFormData = {
                workarea: this.applicantInfo.workarea,
                contactlab: this.applicantInfo.contactlab,
                contactcell: this.applicantInfo.contactcell,
                latesitreason: this.applicantInfo.latesitreason,
                latesitstart: this.applicantInfo.latesitstart,
                latesitend: this.applicantInfo.latesitend,
                emergencyname: this.applicantInfo.emergencyname,
                emergencycontactcell: this.applicantInfo.emergencycontactcell,
                emergencycontactptcl: this.applicantInfo.emergencycontactptcl,
                caretaker: this.applicantInfo.caretaker,
                recommendation: this.applicantInfo.recommendation,
            };
            this.setCookie(this.cookieName, JSON.stringify(savedFormData), 365);
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
    },
    mounted() {
        // Initialize dateValue when the component is mounted
        this.submitForm();
    },
    watch: {
        applicantInfo: {
            handler: function () {
                this.isFormValid = this.allRequiredInputsFilled();
            },
            deep: true
        }
    }


    //     computed: {
    //     remainingCharacters() {
    //       return this.maxlength - this.applicantInfo.latesitreason.length;
    //     },
    //   },
    // methods: {
    //     submitForm() {
    //         // Get the current date and time
    //         this.currentDate = new Date();

    //         // Prepare your form data
    //         const formData = {
    //             // Other form fields
    //             picture: this.picturePath, // Assuming you have a picturePath data property
    //             currentDate: this.currentDate, // Add the current date to the form data
    //         };

    //         // Send formData to the server using an HTTP request library like Axios or fetch
    //         // Example with Axios
    //         axios.post('/submit-form', formData)
    //             .then(response => {
    //                 // Handle response if needed
    //             })
    //             .catch(error => {
    //                 // Handle error if needed
    //             });
    //     },

    // }
};
</script>

 