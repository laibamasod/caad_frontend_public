<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Internship Proforma</h4>
        </div>

        <!-- Section 1: Personal Information -->
        <form @submit.prevent="submitinternshipform">
            <div class="card mb-4">
                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center ">
                        Hosted Researchers Category applied for<br /> (please check NCP website for details & tick the
                        appropriate)
                        <div class="avatar avatar-xl position-relative">
                            <img src="../assets/img/laiba.jpg" alt="profile_image"
                                class="shadow-sm w-100 border-radius-lg" />
                        </div>
                    </legend>
                    <div class="form-group row m-3">
                        <label class="col-md-3 col-form-label">Select your category:</label>
                        <div class="col-md-9">
                            <div class="form-check form-check-inline">
                                <input type="radio" checked class="form-check-input" value="Adjunct Faculty" name="category"
                                    v-model="formData.category">
                                <label class="form-check-label" for="adjunctFaculty">Adjunct Faculty</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="Visiting Scientist/Research Scholar"
                                    name="category" v-model="formData.category">
                                <label class="form-check-label" for="visitingScientist">Visiting Scientist/Research
                                    Scholar</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="NCP Associates" name="category"
                                    v-model="formData.category">
                                <label class="form-check-label" for="ncpAssociates">NCP Associates</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="Post doc fellow" name="category"
                                    v-model="formData.category">
                                <label class="form-check-label" for="postDocFellows">Post-Doc Fellows</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="PHD student" name="category"
                                    v-model="formData.category">
                                <label class="form-check-label" for="phdStudent">Ph.D Student</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="MPhil/MS Student" name="category"
                                    v-model="formData.category">
                                <label class="form-check-label" for="msStudent">M.Phil / MS Student</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="Internee" name="category"
                                    v-model="formData.category">
                                <label class="form-check-label" for="internee">Internee</label>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label>1. Proposed Research Area at NCP:</label>
                                <input type="text" autofocus class="form-control" v-model="formData.proposed_research_area">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>2. Proposed Research Department at NCP:</label>
                                <input type="text" class="form-control" v-model="formData.proposed_research_department">
                            </div>
                            <div class="col-md-12 mb-2">
                                <label>Duration of Internship</label>
                                <div>
                                    <div class="d-inline align-items-center">
                                        <label for="internshipstart" class="me-2d-inline"
                                            style="margin-right: 0.5rem;">From:</label>
                                        <input type="date" class="form-control d-inline" id="internshipstart"
                                            v-model="formData.proposed_research_start_time" style="width: 35%;" />
                                    </div>
                                    <div class="d-inline align-items-center">
                                        <label for="internshipend" class="me-2 d-inline"
                                            style="margin-right: 0.5rem;">To:</label>
                                        <input type="date" class="form-control d-inline" id="internshipend"
                                            v-model="formData.proposed_research_end_time" style="width: 35%;" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Accommodation Required</label>
                                <div class="row">
                                    <div class="col-md-2 ">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="yes" name="acc"
                                                v-model="formData.accomodation_required">
                                            <label class="form-check-label" for="yes">Yes</label>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <label class="d-inline">If YES, Please Mention Duration </label>
                                        <div class="d-inline">
                                            <div class="d-inline align-items-center">
                                                <input ref="accomodationInput" type="date" class="form-control d-inline"
                                                    id="accstart" v-model="formData.accomodation_start_time"
                                                    :disabled="formData.accomodation_required !== 'yes'"
                                                    style="width: 20%;" />
                                            </div>
                                            <div class="d-inline align-items-center">
                                                <label for="accend" class="me-2 d-inline"
                                                    style="margin-right: 0.5rem;">To:</label>
                                                <input ref="accomodationInput" type="date" class="form-control d-inline"
                                                    id="accend" v-model="formData.accomodation_end_time"
                                                    :disabled="formData.accomodation_required !== 'yes'"
                                                    style="width: 20%;" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="no" name="acc"
                                                v-model="formData.accomodation_required">
                                            <label class="form-check-label" for="no">No</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>

                </fieldset>
            </div>
            <div class="card mb-4 p-3">
                <p class="small-text"><b><u>
                            Whom you consulted at NCP before submission of registration form::</u></b></p>
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="formData.consulted_supervisor_name">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label>Department:</label>
                        <input type="text" class="form-control" v-model="formData.consulted_supervisor_department">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label>Date:</label>
                        <input type="date" class="form-control" v-model="formData.consulted_date_of_ncp_supervisor">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label>Supervisor from NCP: </label>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" checked="" value="yes" name="sup"
                                                v-model="formData.is_supervisor_from_ncp">
                                            <label class="form-check-label" for="completedCheckbox">Yes</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="no" name="sup"
                                                v-model="formData.is_supervisor_from_ncp">
                                            <label class="form-check-label" for="inProgressCheckbox">No</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label>Co-Supervisor from NCP: </label>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" checked="" value="yes" name="cosup"
                                                v-model="formData.is_cosupervisor_from_ncp">
                                            <label class="form-check-label" for="completedCheckbox">Yes</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="no" name="cosup"
                                                v-model="formData.is_cosupervisor_from_ncp">
                                            <label class="form-check-label" for="inProgressCheckbox">No</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-4 p-3">
                <div class="undertaking p-3">
                    <p>I, Mr./Ms./Dr. <input type="text" name="name" readonly v-model="studentResponse.std_name"
                            class="input-line text-center">
                        hereby undertake
                        that:</p>

                    <p>(a) Upon acceptance, I shall pay:</p>
                    <ol>
                        <li>i. Registration Fee (Rs. 750/- for Internees students, Rs. 1000/- M.Phil/Ph.D students,
                            Rs. 1500/- Research Associates & Post-Doctoral Fellows
                            and Rs. 2000/- for employees of University/R&D Organization and Others from HEC
                            recognized institutions/Government Departments).</li>
                        <li>ii. Security Fee (Rs. 5000/- for internees students, Rs. 10,000/- for M.Phil/MS & Ph.D
                            Student), security fee is refundable upon completion of
                            research work and subject to submission of Final Clearance Certificate & NCP Identity
                            Card/Entry Card).</li>
                        <li>iii. Bench Fee: If the student/parent university institute choose research supervisor
                            from NCP as a co-supervisor, then the bench fee will be
                            charged (Rs. 4000/- per semester for M.Phil students and Rs. 6000/- per semester for
                            Ph.D student).</li>
                        <li>iv. Fine: I understand that a fine of Rs. 1000/- per week will be charged to me out of
                            my deposited security if I fail to submit Clearance Certificate
                            to CAAD within one week after the due date of completion of my research work.</li>
                    </ol>

                    <p>(b) I have thoroughly read contents of the NCP Hosted Researchers Policy-Revised 2016. I
                        shall abide by rules/regulations mentioned in the NCP
                        Hosted Researchers Policy & procedures during stay at NCP. Upon completion of work, I shall
                        immediately submit Clearance Proforma and entry
                        Card to CAAD/NCP. In case of damage of NCP property, NCP can retain my security fee (under
                        intimation to my parent
                        department/university/organization) until I pay for the damage(s)/loss within a period of
                        one month.</p>
                    <div class="form-check">
                        <input v-model="formData.agreePolicy" type="checkbox" class="form-check-input" id="agreePolicy">
                        <label class="form-check-label text-sm-2">I have read all the terms
                            above.</label>
                    </div>
                </div>
            </div>
            <div class="card mb-4 p-3">
                <div class="institution-certification">
                    <p>
                        <b>To be Completed by Applicant’s Parent Institution/ University:</b>
                    </p>
                    <p>
                        We hereby certify that the applicant Mr./Ms./Dr.
                        <input type="text" readonly name="name" v-model="studentResponse.std_name"
                            class="input-line text-center">
                        S/D of
                        <input type="text" name="name" placeholder="Father Name" class="input-line text-center">
                        is presently a regular student/employee with Registration No./PIN No.
                        <input type="text" name="name" readonly v-model="studentRegResponse.university_reg_no"
                            class="input-line text-center">
                        at our Department/Institution/University. We have thoroughly read contents of NCP Hosted Researchers
                        Policy
                        (Revised-2016). We hereby recommend the above mentioned applicant for research work at NCP in the
                        above specified category (Our Referral Letter is attached in Original) and are willing to
                        provide/pay for any consumables towards experimental work of the said researcher at NCP Campus (if
                        applicable after discussion with the Supervisor/Co-Supervisor at NCP campus).
                    </p>
                    <p>
                        <b>Supervisor / Co-Supervisor of Parent Department:</b>
                    </p>
                    <div class="row">
                        <div class="col-md-4"> <label>Name:</label><input type="text" class="form-control"
                                v-model="formData.supervisor_name"></div>
                        <div class="col-md-4"> <label>Designation:</label><input type="text" class="form-control"
                                v-model="formData.supervisor_designation"></div>
                        <div class="col-md-4"> <label>Department:</label><input type="text" class="form-control"
                                v-model="formData.supervisor_department"></div>

                    </div>
                    <div class="row mt-2">
                        <div class="col-md-4"> <label>Email:</label><input type="text" class="form-control"
                                v-model="formData.supervisor_email"></div>
                        <div class="col-md-4"> <label>Tel No:</label><input type="text" class="form-control"
                                v-model="formData.supervisor_phone_no"></div>
                        <div class="col-md-4"> <label>Fax:</label><input type="text" class="form-control"
                                v-model="formData.supervisor_fax_no"></div>
                    </div>
                    <div class="mt-7">
                        <p> Signature with Date/Stamp: <input type="text" disabled name="name"
                                class="input-line text-center"></p>
                    </div>


                </div>
            </div>

            <div class="card mb-4 p-3">
                <p class="small-text"><b><u>
                            Checklist of Documents</u></b></p>
                <p style="font-size: 14px;"><b>Note:</b> The Police Verification Proforma can be downloaded from the link <a
                        href="https://www.ncp.edu.pk/docs/caad/police-verification-form-2016.pdf"
                        class="text-success"><u>Police
                            Verification Proforma</u></a>.</p>
                            <p class="text text-xs">All files must be in jpg/jpeg. File names must be in format: 'Name_DocumentName.jpeg' 
              For example: Amna_CV.jpg
            </p>
                <div class="table-responsive mt-3">
                    <table class="table-bordered">
                        <thead>
                            <tr>
                                <th style="width: 40%;">Document Name</th>
                                <th style="width: 20%;">Upload Document</th>
                                <th style="width: 20%;">Checklist</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Attested Copy of Last Degree</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>Updated Brief CV (including list of publications during last three years)</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Attested Copy of CNIC/Passport</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Referral Letter from parent Department/University/Organization</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Police Verification Proforma</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Immunization Certificate (COVID-19)</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Passport Size Picture(Blue or White Background)</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div class="printOff card p-3 mb-3">
                <div class="d-flex justify-content-start align-items-center mt-4">
                    <label class="mb-2 mb-md-0">Students should print this filled form, have it signed by
                        their university, and then upload it again in PDF format: </label>
                    <button class="btn btn-success mb-2 mb-md-0 ms-3" @click="$printForm()" :disabled="!isFormValid">
                        <i class="fas fa-print"></i> <!-- Font Awesome icon for printing -->
                    </button>
                </div>
                <div class="mt-3 d-md-flex ">
                    <input required type="file" @change="handleFileUpload" class="btn-outline-success">
                </div>
            </div>
            <!-- Submit Button -->
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
export default {
    name: "InternshipProforrma",
    data() {
        return {
            studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
            studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
            formData: {
                    accomodation_required: 'no',
                    category: 'Adjunct Faculty',
                    proposed_research_area: '',
                    proposed_research_start_time: '',
                    proposed_research_end_time: '',
                    accomodation_start_time: null,
                    accomodation_end_time: null,
                    proposed_research_department: '',
                    is_supervisor_from_ncp: 'yes',
                    is_cosupervisor_from_ncp: 'yes',
                    consulted_date_of_ncp_supervisor: '',
                    supervisor_name: '',
                    supervisor_department: '',
                    supervisor_designation: '',
                    supervisor_email: '',
                    supervisor_fax_no: '',
                    supervisor_phone_no: '',
                    cnic: sessionStorage.getItem('std_cnic'),
                    consulted_supervisor_name: "DR IMRAN",
                    consulted_supervisor_department: "AITECH",
                    apply_date: ''
                },
        }
    },
    computed: {
        apiUrl() {
            return process.env.VUE_APP_API_URL;
        },
        cookieName() {
            const cnic = sessionStorage.getItem('std_cnic');
            return 'form-data-' + cnic + this.$route.path; // Unique name based on the route
        },
    },
    created() {
        this.loadSavedFormData(); // Load saved data when the component is created
    },
    methods: {
        handleFileUpload(event) {
            this.formData.printFormAct = event.target.files[0];
        },
        submitinternshipform() {
            console.log("submit called");
            this.formData.apply_date = new Date()
            console.log(this.formData);
            // const cnic= sessionStorage.getItem('std_cnic');
            // Send a POST request to your Django backend with the form data
            axios
                .post(`${this.apiUrl}/internships`, this.formData)
                .then((response) => {

                    // Handle the response from the backend if needed
                    console.log('Form submitted successfully!', response.data);

                    this.$router.push('/dashboard');
                })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                });
        },
        allRequiredInputsFilled() {
            const requiredFields = [];
            const isAgreeChecked = this.formData.agreePolicy;
            requiredFields.push(
                this.formData.accomodation_required,
                this.formData.category,
                this.formData.proposed_research_area,
                this.formData.proposed_research_start_time,
                this.formData.proposed_research_end_time,
                this.formData.proposed_research_department,
                this.formData.is_supervisor_from_ncp,
                this.formData.is_cosupervisor_from_ncp,
                this.formData.consulted_date_of_ncp_supervisor,
                this.formData.supervisor_name,
                this.formData.supervisor_department,
                this.formData.supervisor_designation,
                this.formData.consulted_supervisor_name,
                this.formData.consulted_supervisor_department,
            )
            if (this.formData.accomodation_required === "yes") {
                requiredFields.push(
                    this.formData.accomodation_start_time,
                    this.formData.accomodation_end_time
                )
            }

            const areFieldsFilled = requiredFields.every((field) => {
                if (typeof field === "string") {
                    return field.trim() !== "";
                } else {
                    // Handle non-string fields, e.g., checkboxes or date fields
                    return field !== null && field !== undefined; // Adjust as needed
                }
            });

            return areFieldsFilled && isAgreeChecked;
        },

        loadSavedFormData() {
            const formDataCookie = this.getCookie(this.cookieName);
            if (formDataCookie) {
                const myformData = JSON.parse(formDataCookie);
                Object.assign(this.formData, myformData);
            }
        },
        saveForm() {
            const savedFormData = {
                accomodation_required: this.formData.accomodation_required,
                category: this.formData.category,
                proposed_research_area: this.formData.proposed_research_area,
                proposed_research_start_time: this.formData.proposed_research_start_time,
                proposed_research_end_time: this.formData.proposed_research_end_time,
                accomodation_start_time: this.formData.accomodation_start_time,
                accomodation_end_time: this.formData.accomodation_end_time,
                proposed_research_department: this.formData.proposed_research_department,
                is_supervisor_from_ncp: this.formData.is_supervisor_from_ncp,
                is_cosupervisor_from_ncp: this.formData.is_cosupervisor_from_ncp,
                consulted_date_of_ncp_supervisor: this.formData.consulted_date_of_ncp_supervisor,
                supervisor_name: this.formData.supervisor_name,
                supervisor_department: this.formData.supervisor_department,
                supervisor_designation: this.formData.supervisor_designation,
                supervisor_email: this.formData.supervisor_email,
                supervisor_fax_no: this.formData.supervisor_fax_no,
                supervisor_phone_no: this.formData.supervisor_phone_no,
                consulted_supervisor_name: this.formData.consulted_supervisor_name,
                consulted_supervisor_department: this.formData.consulted_supervisor_department,
                agreePolicy: this.formData.agreePolicy
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

    
        watch: {
            formData: {
                handler: function () {
                    this.isFormValid = this.allRequiredInputsFilled();
                },
                deep: true
            },
            "formData.accomodation_required": function (newValue) {
                if (newValue === "yes") {
                    this.$nextTick(() => {
                        this.$refs.accomodationInput.focus(); // Focus the input field
                    });
                }
            },
        },
        async mounted() {
            // Check if the form is initially valid when the component is mounted
            this.isFormValid = this.allRequiredInputsFilled();
        },
        // Import flatpickr if you're using a module system
        // import flatpickr from "flatpickr";
    }
}

</script>
  

<style scoped>
.rectangle-box {
    border: 1px solid #000;
}

.input-line {
    border: none;
    border-bottom: 1px solid black;
}

.custom-avatar-size {
    width: 90px;
    /* Adjust the width as needed */
    height: 130px;
    /* Adjust the height as needed */
}

.input-line {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}

.table-bordered th,
.table-bordered td {
    padding: 15px 20px;
    /* Adjust as needed */

}

.radio-label {
    display: block;
    white-space: normal;
    margin-top: 5px;
}


.option p {
    font-size: 14px;
}

.undertaking p {
    font-size: 12px
}

.undertaking li {
    font-size: 12px
}

.undertaking {
    border: 1px solid #000;
}

.attach-input {
    display: none;
}

.attach-label {
    background-color: #2dce89;
    color: white;
    border-radius: 10%;
    padding: 10px 20px;
    cursor: pointer;
}

.attach-label:hover {
    background-color: #4faf54;
}

.table-bordered th,
.table-bordered td {
    padding: 8px;
    /* Adjust as needed */
    word-wrap: break-word;
    font-size: 14px;
    text-align: center;
}

.institution-certification p {
    font-size: 12px;
}
</style>