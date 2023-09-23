<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Performance Evaluation Report</h4>
        </div>

        <!-- Section 1: Personal Information -->
        <form>
            <div class="card p-3 mb-3">
                <div class="row justify-content-start">

                    <div class="col-12 col-sm-8 mb-sm-3 mx-auto evaluation-report mt-2">
                        <h5 class="mb-3">Instructions:</h5>
                        <p><b><i>Internees & short term visiting scientists and researchers will submit the performance
                                    evaluation
                                    report at the end of their research work.</i></b></p>
                        <p><b><i>M.Phil / Ph.D Students/ Post Doctoral Research fellows/ long terms visiting scientists &
                                    researchers/
                                    Research Associates will submit performance evaluation report on six monthly
                                    basis.</i></b></p>
                    </div>
                </div>
            </div>
            <div class="card p-3 mb-4">

                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center">
                        To be completed by Applicant Hosted Researcher:
                        <div class="avatar avatar-xl position-relative">
                            <img src="../assets/img/amna.jpg" alt="profile_image"
                                class="shadow-sm w-100 border-radius-lg" />
                        </div>
                    </legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>1. Name:</label>
                                <input type="text" autofocus class="form-control" v-model="studentResponse.std_name"
                                    readonly>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>2. Name of Supervisor/Group Head:</label>
                                <input type="text" class="form-control" v-model="formData.supervisor" readonly>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>3. Designation:</label>
                                <input type="text" class="form-control" v-model="studentRegResponse.designation" disabled>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>4. Date of Joining NCP:</label>
                                <input type="date" class="form-control"
                                    v-model="studentInternResponse.proposed_research_start_time" readonly />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>5. Present Duration at NCP</label>
                                <div>
                                    <div class="d-inline align-items-center">
                                        <label for="starttime" class="me-2d-inline"
                                            style="margin-right: 0.5rem;">From:</label>
                                        <input type="date" class="form-control d-inline" id="starttime"
                                            v-model="studentInternResponse.proposed_research_start_time" style="width: 35%;"
                                            readonly />
                                    </div>
                                    <div class="d-inline align-items-center">
                                        <label for="endtime" class="me-2 d-inline" style="margin-right: 0.5rem;">To:</label>
                                        <input type="date" class="form-control d-inline" id="endtime"
                                            v-model="studentInternResponse.proposed_research_end_time" style="width: 35%;"
                                            readonly />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>6. Status of Research Progress (Tick the appropriate):</label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" checked class="form-check-input" id="status"
                                                value="Completed" v-model="formData.status">
                                            <label class="form-check-label" for="completedCheckbox">Completed</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="status" value="In Progress"
                                                v-model="formData.status">
                                            <label class="form-check-label" for="inProgressCheckbox">In Progress</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>7. Date of Submission:</label>
                                <input type="date" id="todayDate" name="todayDate" class="form-control"
                                    v-model="formData.todayDate" readonly />
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="card p-3 mb-4">
                <div class="research-summary">
                    <p><b><u>Summary of research work done till date at NCP:</u></b></p>
                    <p><b><i>Title of Research Work:</i></b></p>
                    <p><b><i>Summary of Research Work:</i></b></p>
                    <textarea class="form-control" rows="8" v-model="formData.summary"></textarea>
                </div>
            </div>
            <div class="card p-3 mb-4">
                <div class="publications-summary mt-3">
                    <p><b>(a) Summary of Publications in which NCP name is included (attach list)*:</b></p>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-8 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No.
                                        of
                                        Papers Published in
                                        Impact
                                        Factor Journals:</label></div>
                                <div class="col-md-4 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block"
                                        v-model="formData.publishedpapers">
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-9 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">
                                        No. of Papers Accepted in Impact
                                        Factor Journals:</label></div>
                                <div class="col-md-3 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block"
                                        v-model="formData.acceptedpapers">
                                </div>
                            </div>

                        </div>

                    </div>


                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-8 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">
                                        No. of Papers Submitted in Impact Factor Journals: </label></div>
                                <div class="col-md-4 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block"
                                        v-model="formData.submittedpapers">
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-9 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">
                                        No. of Paper(s) Presented in International Conference(s):</label></div>
                                <div class="col-md-3 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block"
                                        v-model="formData.presentedpapers">
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-8 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">
                                        No. of Patents submitted : National</label></div>
                                <div class="col-md-4 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block"
                                        v-model="formData.nationalpatentssubmitted">
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-9 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">
                                        No. of Patents submitted : International</label></div>
                                <div class="col-md-3 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block"
                                        v-model="formData.internationalpatentssubmitted">
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="row">

                    <div class="col-md-6 mb-3">
                        <label for="gm-finance">Signature of Applicant:</label>
                        <input disabled type="text" id="gm-finance" name="gm-finance" class="input-line">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="gm-finance">Signature of Director Concerned on Prog. of Work:</label>
                        <input disabled type="text" id="gm-finance" name="gm-finance" class="input-line">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="gm-finance">Remarks of Director Concerned:</label>
                        <input disabled type="text" id="gm-finance" name="gm-finance" class="input-line">
                    </div>
                    <div class="col-lg-6">
                        <label for="director-admin">Date:</label>
                        <input disabled type="text" id="director-admin" name="director-admin" class="input-line">
                    </div>
                </div>
                <div class="form-group printOff">
                    <label class="m-2">* Attach list of publications carrying NCP name and titles/venues/durations
                        of International Conferences attended:</label>
                    <!-- btn btn-success btn-outline-success mt-2 -->
                    <input type="file" ref="fileInputs"  @change="handleFileUpload(0)" class="btn-outline-success" id="attachButton">
                </div>
            </div>
            <!--CAAD SECTION-->
            <!-- <div class="card p-3 mb-4">
                <div class="form-group">
                    <label>Remarks by Director Concerned on Prog. of Work:</label>
                    <textarea class="form-control"></textarea>
                </div>

                <div class="section mt-3">
                    <div class="row">

                        <div class="col-lg-6">
                            <label for="gm-finance">Signature of Director Concerned:</label>
                            <input type="text" id="gm-finance" name="gm-finance" class="input-line">
                        </div>
                        <div class="col-lg-6">
                            <label for="director-admin">Date:</label>
                            <input type="text" id="director-admin" name="director-admin" class="input-line">
                        </div>
                        <div class="col-lg-6">
                            <label for="manager-caad">Manager CAAD (for record and needful):</label>
                            <input type="text" id="manager-caad" name="manager-caad" class="input-line">
                        </div>
                        <div class="col-lg-6">
                            <label for="director-caad">GM CAAD:</label>
                            <input type="text" id="director-caad" name="director-caad" class="input-line">
                        </div>


                    </div>
                </div>
            </div> -->
            <div class="printOff card p-3 mb-3">
                <div class="d-flex justify-content-start align-items-center mt-4">
                    <label class="mb-2 mb-md-0">Please print the form and upload it:</label>
                    <button class="btn btn-success mb-2 mb-md-0 ms-3" @click="$printForm()" :disabled="!isFormValid">
                        <i class="fas fa-print"></i> <!-- Font Awesome icon for printing -->
                    </button>
                </div>
                <div class="mt-3 d-md-flex ">
                    <input required ref="fileInputs" type="file" @change="handleFileUpload(1)" class="btn-outline-success">
                </div>
            </div>



            <!-- Submit Button -->
            <div class="printOff">
                <div class="row">
                    <div class="form-actions d-flex justify-content-center mt-4">
                        <button type="submit" class="btn btn-success me-2" @click="saveForm">Save</button>
                        <button type="submit" class="btn btn-success" @click="submitForm"
                            :disabled="!isFormValid">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    name: "EvaluationProforma",
    data() {
        return {
            fileInputs: [],
            studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
            studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
            studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
            isFormValid: false,
            formData: {
                // name: '',
                supervisor: '',
                // designation: '',
                joiningdate: '',
                // starttime: '',
                // endtime: '',
                status: '',
                summary: '',
                publishedpapers: '',
                submittedpapers: '',
                acceptedpapers: '',
                presentedpapers: '',
                nationalpatentssubmitted: '',
                internationalpatentssubmitted: '',
                todayDate: '',
                printFormEvl: null,
                publishedpaperlist: null,
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
        handleFileUpload(inputIndex) {
            const inputElement = this.fileInputs[inputIndex];
            if (inputElement.files.length > 0) {
                if (inputIndex === 0) {
                    this.publishedpaperlist = inputElement.files[0];
                } else if (inputIndex === 1) {
                    this.formData.printFormEvl = inputElement.files[0];
                }
            } else {
                // Clear the variable if no file is selected
                if (inputIndex === 0) {
                    this.formData.publishedpaperlist = null;
                } else if (inputIndex === 1) {
                    this.formData.printFormEvl = null;
                }
            }
        },
        submitForm() {
            const currentDate = new Date();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const day = currentDate.getDate().toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            this.formData.todayDate = `${year}-${month}-${day}`;
            // console.log(this.formData.todayDate);
        },
        allRequiredInputsFilled() {
            const requiredFields = [
                this.formData.summary,
                this.formData.publishedpapers,
                this.formData.submittedpapers,
                this.formData.acceptedpapers,
                this.formData.presentedpapers,
                this.formData.nationalpatentssubmitted,
                this.formData.internationalpatentssubmitted,
            ];

            // const isAgreeChecked = this.formData.agreePolicy;
            // const atLeastOneServiceSelected = Object.values(this.formData.services).some(service => service);

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
                const myformData = JSON.parse(formDataCookie);
                Object.assign(this.formData, myformData);
            }
        },
        saveForm() {
            const savedFormData = {
                status: this.formData.status,
                summary: this.formData.summary,
                publishedpapers: this.formData.publishedpapers,
                submittedpapers: this.formData.submittedpapers,
                acceptedpapers: this.formData.acceptedpapers,
                presentedpapers: this.formData.presentedpapers,
                nationalpatentssubmitted: this.formData.nationalpatentssubmitted,
                internationalpatentssubmitted: this.formData.internationalpatentssubmitted,
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
        this.fileInputs = this.$refs.fileInputs;
    },
    watch: {
        formData: {
            handler: function () {
                this.isFormValid = this.allRequiredInputsFilled();
            },
            deep: true
        }
    }
};
</script>
  
<style scoped>
.rectangle-box {
    border: 1px solid #000;
}

.evaluation-report {
    text-align: center;
}

.input-line {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}

.evaluation-report p {
    font-size: 12px;
}

/* Style for the checkmark icon */
.evaluation-report::before {
    font-size: 18px;
    margin-right: 10px;
}

.research-summary p {
    font-size: 14px;
}

.blink {
    animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
    50% {
        opacity: 0;
    }
}
</style>
  