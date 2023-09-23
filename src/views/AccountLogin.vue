<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Account Login Proforma</h4>
        </div>

        <!-- Section 1: Personal Information -->
        <form>
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
                                <label>1. NCP ID Number:</label>
                                <input readonly type="text" class="form-control"
                                    v-model="studentInternResponse.ncp_assigned_regno">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>2. Date of Birth (DD/MM/YYYY):</label>
                                <input readonly type="text" class="form-control" v-model="studentRegResponse.dob">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label>3. Nationality:</label>
                                <input required type="text" class="form-control" v-model="formData.nationality">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>4. CNIC No.:</label>
                                <input readonly type="text" class="form-control" v-model="studentResponse.std_cnic">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label>5. Passport No. (Foreigners only):</label>
                                <input type="number" class="form-control" v-model="formData.passportNumber">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>6. Designation:</label>
                                <input readonly type="text" class="form-control" v-model="studentRegResponse.designation">
                            </div>
                        </div>
                        <!-- Section 2: Name -->
                        <div class="form-group">
                            <label>7. Name (Please fill in capital Letters):</label>
                            <div class="row">
                                <div class="col-md-3">
                                    <select class="form-control" v-model="formData.Title">
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Ms.">Ms.</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <input readonly type="text" class="form-control" v-model="formData.first_name">
                                </div>
                                <div class="col-md-5">
                                    <input readonly type="text" class="form-control" v-model="formData.last_name">
                                </div>
                            </div>
                        </div>

                        <!-- Section 3: Designation and Contact Information -->

                        <!-- Row for Building, Floor, and Room No. -->
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>8. Building:</label>
                                <input required type="text" class="form-control" v-model="formData.building">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>9. Floor:</label>
                                <input required type="text" class="form-control" v-model="formData.floor">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>10. Room No.:</label>
                                <input required type="text" class="form-control" v-model="formData.roomNumber">
                            </div>
                        </div>

                        <!-- Row for Telephone (Off), Mobile No., and CoE Name -->
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>11. Telephone (Off):</label>
                                <input type="text" class="form-control" v-model="formData.telephoneOffice">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>12. Mobile No.:</label>
                                <input readonly type="text" class="form-control" v-model="studentResponse.std_phone_no">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>13. CoE Name:</label>
                                <input readonly type="text" class="form-control">
                            </div>
                        </div>

                        <!-- Section 14: Department/Branch -->
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label>14. Department/Branch:</label>
                                <input readonly type="text" class="form-control"
                                    v-model="studentInternResponse.proposed_research_department">
                            </div>
                            <!-- Section 15: Email Address -->
                            <div class="col-md-6 mb-3">
                                <label>15. Email Address:</label>
                                <input readonly type="email" class="form-control" v-model="studentResponse.std_email">
                            </div>
                        </div>

                        <!-- Section 16: Services required -->
                        <div class="form-group">
                            <label>16. Services required :</label><span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label" for="windowsAccount">Windows Login Account</label>
                                <input type="checkbox" class="form-check-input" id="windowsAccount"
                                    v-model="formData.services.windowsAccount">
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label" for="emailAccount">Email Account</label>
                                <input type="checkbox" class="form-check-input" id="emailAccount"
                                    v-model="formData.services.emailAccount">
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label" for="printQuota">Print Quota</label>
                                <input type="checkbox" class="form-check-input" id="printQuota"
                                    v-model="formData.services.printQuota">
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label" for="ldapAccount">Linux (LDAP) Account</label>
                                <input type="checkbox" class="form-check-input" id="ldapAccount"
                                    v-model="formData.services.ldapAccount">
                            </div>
                        </div>


                        <!-- Section 17: Specify time duration of stay -->
                        <div class="form-group">
                            <label>17. Specify time duration of stay (if any):</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="stayFrom">From:</label>
                                    <input required type="time" class="form-control" id="stayFrom"
                                        v-model="formData.stayFrom">
                                </div>
                                <div class="col-md-6">
                                    <label for="stayTo">To:</label>
                                    <input required type="time" class="form-control" id="stayTo" v-model="formData.stayTo">
                                </div>
                            </div>
                        </div>

                        <!-- Section 18: Laptop/Desktop MAC Address -->
                        <div class="form-group">
                            <label>18. Laptop/Desktop MAC Address (if any):</label>
                            <input required type="text" class="form-control" v-model="formData.macAddress">
                        </div>

                        <!-- Section 19: Purpose of the IT account -->
                        <div class="form-group">
                            <label>19. Purpose of the IT account:</label>
                            <textarea required class="form-control" rows="4" v-model="formData.itAccountPurpose"></textarea>
                        </div>

                        <!-- Section 20: Attach Proof of Affiliation -->
                        <div class="printOff form-group">
                            <label>20. Attach the proof of affiliation with NCP. (if applicable)</label>
                            <input type="file" class="custom-file-input" id="proofOfFile" accept=".pdf">
                        </div>


                        <!-- Section: Acceptable Use Policy -->
                        <div class="rectangle-box p-3 mt-4">
                            <p class="text-sm mb-2"><strong>Acceptable Use Policy</strong></p>
                            <p class="text-sm mb-3">
                                Network/Internet/Printing services are provided by NCP for official/Academic & research
                                purpose. Personal use of the computer or network shall not interfere with official work, nor
                                should it violate acceptable practices or standards. Unacceptable practices in NCP network
                                include, but are not limited to:
                            </p>
                            <ul class="text-sm mb-4">
                                <li>Keeping weak account passwords or sharing of account password with others.</li>
                                <li>Using official Email address to send emails for un-official purposes or forward
                                    discriminatory, questionable or inappropriate jokes, messages or comments.</li>
                                <li>Viewing illicit/pornographic websites.</li>
                                <li>Access, attempted or successful, to resources for which you do not have proper
                                    authorization.</li>
                                <li>Any commercial or profit oriented usage of NCP network and web space.</li>
                                <li>Misuse of printing facility.</li>
                            </ul>
                            <p class="text-sm mb-2">
                                <strong>Consequences of Misuse</strong>
                            </p>
                            <p class="text-sm mb-3">
                                Violations of the above terms of agreement may result in suspension of computing privileges,
                                and disciplinary action.
                            </p>
                            <p class="text-sm mb-2">
                                <strong>Account Expiration/Data Deletion</strong>
                            </p>
                            <p class="text-sm mb-3">
                                User domain account/Email ID is disabled, once a person quits or no longer stays affiliated
                                with NCP. However, email account and user data will remain available for the next 03 months.
                                After that, all such information regarding that person will be deleted.
                            </p>
                            <p class="text-sm mb-2">
                                <strong>Extension of the Guest Researchers</strong>
                            </p>
                            <p class="text-sm mb-3">
                                Guest researchers who want to extend the use of IT services have to provide a document
                                issued from CAAD department.
                            </p>
                            <div class="form-check">
                                <input required type="checkbox" class="form-check-input" id="agreePolicy"
                                    v-model="formData.agreePolicy">
                                <label class="form-check-label text-sm-2" for="agreePolicy">I have read all the terms above
                                    and I agree to follow the acceptable use policy. I also agree to promptly report all
                                    violations or suspected violations of information security policies to IT
                                    helpdesk.</label>
                            </div>
                        </div>

                        <!-- Applicant's Signature and Department Head -->
                        <br>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="applicantSignature">21. Applicant Signature: </label>
                                <input disabled type="text" id="applicantSignature" name="applicantSignature"
                                    class="input-line">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="applicationDate">2. Date of Application:</label>
                                <input type="date" class="form-control" id="applicationDate" readonly
                                    v-model="formData.applicationDate" />
                            </div>
                        </div>


                        <!-- For Head of the Concerned Department -->

                        <br>
                        <div class="form-group">
                            <label>22. For Head of the Concerned Department</label>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <input readonly type="text" class="form-control" placeholder="Dept. Head (Name)">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label>Date:</label>
                                    <input disabled type="text" class="input-line">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label>Sign:</label>
                                    <input disabled type="text" class="input-line">
                                </div>
                            </div>
                        </div>
                        <div class="printOff card p-3 mb-3">
                            <div class="d-flex justify-content-start align-items-center mt-4">
                                <label class="mb-2 mb-md-0">23. Please print the form and upload it:</label>
                                <button class="btn btn-success mb-2 mb-md-0 ms-3" @click="$printForm()"
                                    :disabled="!isFormValid">
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


            <!-- For IT Department Use -->
            <div class="card mb-4 d-none">
                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center">
                        PART-II (For IT Department Use):
                    </legend>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label>1. User ID:</label>
                                <input disabled type="text" class="form-control" v-model="formData.itUserId">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>2. Domain:</label>
                                <input disabled type="text" class="form-control" v-model="formData.itDomain">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>3. IT Department Check List:</label>
                            <div class="row">
                                <div class="row">
                                    <div class="col-md-4" v-for="(checkbox, key) in formData.itCheckList" :key="key">
                                        <div class="form-check">
                                            <input disabled type="checkbox" class="form-check-input" :id="key"
                                                v-model="itCheckList">
                                            <label class="form-check-label" :for="key">{{ itCheckListLabels[key] }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>4. Approval by IT Dept:</label>
                            <div class="row align-items-center">
                                <div class="col-md-4 mb-3 text-center">
                                    <input disabled type="text" id="ncpSup" name="ncpSup" class="input-line">
                                    <br>
                                    <label for="GMIT">i. GM IT</label>
                                </div>
                                <div class="col-md-4 mb-3 text-center">
                                    <div>
                                        <input disabled type="text" id="dir" name="dir" class="input-line">
                                        <br>
                                        <label for="managerAIA">ii. IT Personnel Name</label>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3 text-center">
                                    <div>
                                        <input disabled type="text" id="dir" name="dir" class="input-line">
                                        <br>
                                        <label for="managerAIA">iii. Signature</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
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
// import axios from 'axios';
export default {
    name: "AccountLogin",
    data() {
        return {
            studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
            studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
            studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
            isFormValid: false,
            formData: {
                // std_name: '',
                Title: 'Mr.',
                first_name: '',
                last_name: '',
                // ncp_assigned_regno: '',
                // dob: '',
                // std_cnic: '',
                // designation: '',
                // std_phone_no: '',
                // std_email: '',
                // proposed_research_area: '',
                nationality: '',
                passportNumber: '',
                building: '',
                floor: '',
                roomNumber: '',
                telephoneOffice: '',
                printFormAct: '',
                applicationDate: '',
                services: {
                    windowsAccount: false,
                    emailAccount: false,
                    printQuota: false,
                    ldapAccount: false,
                },
                stayFrom: '',
                stayTo: '',
                macAddress: '',
                itAccountPurpose: '',
                agreePolicy: false,
                itCheckList: {
                    emailAccount: false,
                    ldapAccount: false,
                    vpnAccount: false,
                    windowsAccount: false,
                    printQuota: false,
                    recordUpdate: false,
                    allUsersMailingList: false,
                    departmentalMailingList: false,
                },
            },
            itUserId: '',
            itDomain: '',
            itCheckListLabels: {
                emailAccount: 'Email Account',
                ldapAccount: 'Linux (LDAP) Account',
                vpnAccount: 'VPN Account',
                windowsAccount: 'Windows Login Account',
                printQuota: 'Print Quota',
                recordUpdate: 'Record Update',
                allUsersMailingList: 'All Users Mailing List',
                departmentalMailingList: 'Departmental Mailing List',
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
        handleFileUpload(event) {
            this.formData.printFormAct = event.target.files[0];
        },
        allRequiredInputsFilled() {
            const requiredFields = [
                this.formData.nationality,
                this.formData.building,
                this.formData.floor,
                this.formData.roomNumber,
                this.formData.agreePolicy,
                this.formData.stayFrom,
                this.formData.stayTo,
                this.formData.macAddress,
                this.formData.itAccountPurpose
            ];

            const isAgreeChecked = this.formData.agreePolicy;
            const atLeastOneServiceSelected = Object.values(this.formData.services).some(service => service);

            return requiredFields.every(field => {
                if (typeof field === 'string') {
                    return field.trim() !== '';
                } else {
                    // Handle non-string fields, e.g., checkboxes or date fields
                    return field !== null && field !== undefined && atLeastOneServiceSelected && isAgreeChecked; // Adjust as needed
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
                Title: this.formData.Title,
                nationality: this.formData.nationality,
                passportNumber: this.formData.passportNumber,
                building: this.formData.building,
                floor: this.formData.floor,
                roomNumber: this.formData.roomNumber,
                telephoneOffice: this.formData.telephoneOffice,
                services: {
                    windowsAccount: this.formData.services.windowsAccount,
                    emailAccount: this.formData.services.emailAccount,
                    printQuota: this.formData.services.printQuota,
                    ldapAccount: this.formData.services.ldapAccount,
                },
                stayFrom: this.formData.stayFrom,
                stayTo: this.formData.stayTo,
                macAddress: this.formData.macAddress,
                itAccountPurpose: this.formData.itAccountPurpose,
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
            this.formData.applicationDate = `${year}-${month}-${day}`;
        },
    },
    async mounted() {
        // Initialize dateValue when the component is mounted
        // this.fetchStdData();
        const nameParts = this.studentResponse.std_name.split(' ');
        if (nameParts.length === 1) {
            // If there's only one name part, consider it the first name
            this.formData.first_name = nameParts[0];
            this.formData.last_name = ''; // No last name
        } else {
            // If there are multiple name parts, consider the last one as the last name
            this.formData.last_name = nameParts.pop();
            this.formData.first_name = nameParts.join(' ');
        }

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
</style>
  