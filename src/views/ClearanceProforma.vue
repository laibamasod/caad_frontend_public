<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Clearance Certificate (Temporary/Final)</h4>
        </div>

        <!-- Section 1: Personal Information -->
        <form>
            <div class="card mb-3 p-3">
                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center ">

                        1. Certification by Applicant Hosted Researcher (please tick the appropriate
                        option):
                        <div class="avatar avatar-xl position-relative">
                            <img src="../assets/img/amna.jpg" alt="profile_image"
                                class="shadow-sm w-100 border-radius-lg" />
                        </div>
                    </legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 mb-3 ">
                                <label>1. Name:</label>
                                <input type="text" class="form-control" v-model="studentResponse.std_name" readonly>
                            </div>
                            <div class="col-md-4 mb-3 ">
                                <label>2. Department:</label>
                                <input type="text" class="form-control"
                                    v-model="studentInternResponse.proposed_research_department" readonly>
                            </div>
                            <div class="col-md-4 mb-3 ">
                                <label>3. Designation:</label>
                                <input type="text" class="form-control" v-model="studentRegResponse.designation" readonly>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>4. Reg No:</label>
                                <input type="text" class="form-control" v-model="studentInternResponse.ncp_assigned_regno"
                                    readonly>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>5. NCP Entry Card No:</label>
                                <input type="text" class="form-control" v-model="studentIdentityResponse.identity_id"
                                    readonly>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>6. Date of Application:</label>
                                <input type="text" class="form-control" v-model="formData.applyDate"
                                    readonly>
                            </div>
                        </div>


                    </div>
                    <div class="option">
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="P" value="temporarybasis"
                                v-model="formData.option">
                            <label for="option-1">Temporary Basis :</label>
                            <template v-if="formData.option === 'temporarybasis'">
                                <p>
                                    It is stated that I have to leave NCP on a temporary basis to join back my parent
                                    department due to unavoidable circumstances on
                                    <input :required="formData.option === 'temporarybasis'" type="date" name="date1"
                                        class="input-line" v-model="formData.reasonDate">.
                                    I,therefore, discontinue my On-Campus Research Work at NCP Department
                                    <input type="text" name="department1"
                                        v-model="studentInternResponse.proposed_research_department" class="input-line">
                                    under supervision of
                                    <input type="text" name="supervisor1" class="input-line">
                                    w.e.f.
                                    <input :required="formData.option === 'temporarybasis'" type="date" name="start-date1"
                                        v-model="formData.leaveDate" class="input-line">.
                                    I shall rejoin NCP w.e.f.
                                    <input :required="formData.option === 'temporarybasis'" type="date" name="rejoin-date1"
                                        class="input-line" v-model="formData.rejoinDate">.
                                    I have settled dues and/or pending matters with all concerned departments at NCP Campus
                                    and there is no claim of any description against me.
                                </p>
                            </template>
                        </div>
                        <!-- conver the 'w-e-f' fields to data formats -->
                    </div>
                    <div class="option">
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="status" value="completebasis"
                                v-model="formData.option">
                            <label for="option-2">Permanent Basis :</label>
                            <template v-if="formData.option === 'completebasis'">
                                <p>
                                    It is stated that I,
                                    <input type="text" name="name2" v-model="studentResponse.std_name" class="input-line">,
                                    have finally completed my research work/internship at NCP Campus/Department
                                    <input type="text" name="department2"
                                        v-model="studentInternResponse.proposed_research_department" class="input-line">
                                    under supervision of
                                    <input type="text" name="supervisor2" class="input-line">
                                    and will proceed to join my parent Institute namely:
                                    <input type="text" name="parent-institute" class="input-line">,
                                    w.e.f.
                                    <input :required="formData.option === 'completebasis'" type="date" name="join-date2"
                                        class="input-line" v-model="formData.joinUniDate">. I
                                    have settled dues and/or pending matters with all concerned departments at NCP Campus
                                    and there is no claim of any description against me.
                                </p>
                            </template>
                        </div>
                        <div class="form-check "><br />
                            <input required type="checkbox" class="form-check-input" v-model="formData.agreePolicy" id="extAgreePolicy">
                            <label class="form-check-label text-sm-2" for="extAgreePolicy">I agree to the terms and
                                services.</label>
                        </div>
                    </div>
                </fieldset>

            </div>
            <div class="card mb-3 p-3">
                <fieldset>
                    <legend class="card-header">
                        2. Certification by Supervisor and Director/Head of Concerned Department:
                    </legend>
                    <div class="card-body">
                        <p class="mt-n3">Certified that there is nothing outstanding against the above-mentioned Hosted
                            Researcher in the
                            department. It is, therefore , he/she may be issued Clearance Certificate and Work Experience
                            Certificate after due vetting by Finance Branch, Admin Branches and CAAD.
                        </p>
                        <div>
                            <label for="supSignature"> Recommended by Concerned Research Supervisor/ Group Head: </label>
                            <input disabled type="text" id="supSignature" name="supSignature" class="input-line">
                        </div>
                        <br>
                        <div>
                            <label for="director">Endorsed by Concerned Director/HOD (NCP Complex) : </label>
                            <input disabled type="text" id="recommendationDirector" name="recommendationDirector"
                                class="input-line">
                        </div>
                    </div>
                </fieldset>
                <div class="printOff card p-3 mb-3">
                    <div class="d-flex justify-content-start align-items-center mt-4">
                        <label class="mb-2 mb-md-0">Please print the form and upload it:</label>
                        <button class="btn btn-success mb-2 mb-md-0 ms-3" @click="$printForm()" :disabled="!isFormValid">
                            <i class="fas fa-print"></i> <!-- Font Awesome icon for printing -->
                        </button>
                    </div>
                    <div class="mt-3 d-md-flex ">
                        <input ref="fileInputs" type="file" required @change="handleFileUpload()" class="btn-outline-success">
                    </div>
                </div>
            </div>

            <!---CAAD SECTION-->
            <!-- <div class="card mb-3 p-3">
                <div class="section mt-5">
                    <p class="small-text"><b><u>2.Certification by Supervisor & Director/Head of Concerned
                                Department:</u></b>Certified that there is nothing outstanding against the
                        above-mentioned Hosted Researcher in the department.It is, therefore, he/she may be issued
                        Clearance Certificate and Work Experience Certificate after due vetting by Finance Branch,
                        Admin Branches and CAAD.</p>
                    <div class="form-group">
                        <label>5. Signature</label>
                        <div class="row align-items-center">
                            <div class="col-md-6 mt-3 mb-3 text-center">
                                <input disabled type="text" id="jecaad" name="jecaad" class="input-line">
                                <br>
                                <label class="input-label text-center">Recommended by Concerned Research Supervisor/ Group
                                    Head:</label>
                            </div>
                            <div class="col-md-6 mt-3 mb-3 text-center">
                                <div>
                                    <input disabled type="text" id="recommendationDirector1" name="recommendationDirector1"
                                        class="input-line">
                                    <br>
                                    <label class="input-label text-center">Endorsed by Concerned Director/HOD (NCP Complex):
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div class="card mb-3 p-3">
                <div class="section mt-5">
                    <p class="small-text"><b><u>3.Certification by Concerned Departments at NCP:</u></b>It is
                        certified that there are no pending claims/dues of any
                        description against above mentioned applicant except those mentioned in the following Table:
                    </p>
                    <div class="table-responsive">
                        <table class="table-bordered">
                            <thead>
                                <tr>
                                    <th style="width: 15%;">Department/Section</th>
                                    <th style="width: 15%;">Remarks</th>
                                    <th style="width: 35%;">Name & Designation of Authorized Officer</th>
                                    <th style="width: 35%;">Signature of Authorized Officer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>I.T Branch</td>
                                    <td>
                                        <label><input type="radio" name="remarks-it" value="cleared"> Cleared</label>
                                        <label><input type="radio" name="remarks-it" value="not-cleared"> Not
                                            Cleared</label>
                                    </td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                </tr>
                                <tr>
                                    <td>Mechanical Workshop</td>
                                    <td>
                                        <label><input type="radio" name="remarks-it" value="cleared"> Cleared</label>
                                        <label><input type="radio" name="remarks-it" value="not-cleared"> Not
                                            Cleared</label>
                                    </td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                </tr>
                                <tr>
                                    <td>Finance Branch</td>
                                    <td>
                                        <label><input type="radio" name="remarks-it" value="cleared"> Cleared</label>
                                        <label><input type="radio" name="remarks-it" value="not-cleared"> Not
                                            Cleared</label>
                                    </td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                </tr>
                                <tr>
                                    <td>Security Branch
                                        (Deposit of Vehicle Entry Pass)</td>
                                    <td>
                                        <label><input type="radio" name="remarks-it" value="cleared"> Cleared</label>
                                        <label><input type="radio" name="remarks-it" value="not-cleared"> Not
                                            Cleared</label>
                                    </td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div class="card mb-3 p-3">
                <div class="section mt-5">
                    <p class="small-text"><b><u>4.Endorsements:</u></b></p>
                    <div class="row align-items-center mb-3">
                        <div class="col-md-3 mt-3 mb-3 col-6 text-center">
                            <input disabled type="text" id="jecaad" name="jecaad" class="input-line">
                            <br>
                            <label class="input-label text-center">GM Finance</label>
                        </div>
                        <div class="col-md-3 mt-3 mb-3 col-6 text-center">
                            <div>
                                <input disabled type="text" id="recommendationDirector1" name="recommendationDirector1"
                                    class="input-line">
                                <br>
                                <label class="input-label text-center">Director Admin</label>
                            </div>
                        </div>
                        <div class="col-md-3 mt-3 mb-3 col-6 text-center">
                            <div>
                                <input disabled type="text" id="recommendationDirector2" name="recommendationDirector2"
                                    class="input-line">
                                <br>
                                <label class="input-label text-center">Director CAAD</label>
                            </div>
                        </div>
                        <div class="col-md-3 mt-3 mb-3 col-6 text-center">
                            <div>
                                <input disabled type="text" id="recommendationDirector2" name="recommendationDirector2"
                                    class="input-line">
                                <br>
                                <label class="input-label text-center">AM / Manager/GM CAAD</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label for="director-caad">JE CAAD (for record & necessary action w.r.t. issuance of Research
                                Certificate for cleared cases):</label>
                            <input type="text" id="director-caad" name="director-caad" class="input-line">
                        </div>
                    </div>
                </div>
            </div> -->
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
    name: "ClearanceProforma",
    data() {
        return {
            isFormValid: false,
            studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
            studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
            studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
            studentIdentityResponse: JSON.parse(sessionStorage.getItem('student_identity_response')) || {},
            formData: {
                //    name:'',
                //    department:'',
                //    designation:'',
                //    regno:'',
                //    entryno:'',
                option: '',
                reasonDate: '',
                leaveDate: '',
                rejoinDate: '',
                joinUniDate: '',
                agreePolicy: false,
                applyDate:'',

            }
        }
    },
    computed: {
        cookieName() {
            const cnic = sessionStorage.getItem('std_cnic');
            return 'form-data-'+ cnic + this.$route.path; // Unique name based on the route
        },
    },

    created() {
        this.loadSavedFormData(); // Load saved data when the component is created
    },
    methods: {
        handleFileUpload(event) {
            this.formData.printFormAct = event.target.files[0];
        },
        allRequiredInputsFilled() {
            const requiredFields = [];
            const isAgreeChecked = this.formData.agreePolicy;
            if (this.formData.option === 'temporarybasis') {
                requiredFields.push(
                    this.formData.reasonDate,
                    this.formData.leaveDate,
                    this.formData.rejoinDate
                );
            } else if (this.formData.option === 'completebasis') {
                requiredFields.push(this.formData.joinUniDate);
            }
            return requiredFields.every(field => {
                if (typeof field === 'string') {
                    return field.trim() !== '';
                } else {
                    // Handle non-string fields, e.g., checkboxes or date fields
                    return field !== null && field !== undefined;
                }
            })&& isAgreeChecked;
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
                option: this.formData.option,
                reasonDate: this.formData.reasonDate,
                leaveDate: this.formData.leaveDate,
                rejoinDate: this.formData.rejoinDate,
                joinUniDate: this.formData.joinUniDate,
                agreePolicy: this.formData.agreePolicy,
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
        submitForm() {
            const currentDate = new Date();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const day = currentDate.getDate().toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            this.formData.applyDate = `${year}-${month}-${day}`;
        },
    },
    async mounted(){
        this.submitForm();
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

.input-line {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}

.table-bordered th,
.table-bordered td {
    padding: 8px;
    /* Adjust as needed */
    word-wrap: break-word;
    font-size: 14px;
}

.radio-label {
    display: block;
    white-space: normal;
    margin-top: 5px;
}

.option p {
    font-size: 14px;
}

.section p {
    font-size: 14px;
}</style>
  