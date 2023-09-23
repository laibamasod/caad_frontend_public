<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h5 class="mb-3"><i>Important Instructions:</i></h5>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="row align-items-start mx-3">
        <div class="col-12 col-sm-8 mb-sm-2  evaluation-report mt-2 me-2">
          <p><b><i>Applicants are required to read the NCP Hosted Researchers Policy available at
                <a class="text-success" href="https://www.ncp.edu.pk/hr.php">www.ncp.edu.pk/hr.php</a>
                carefully before filling the form.</i></b></p>
          <p><b><i>Make sure you have clear pictures of following documents:</i></b></p>
          <ul class="list-size">
            <li class="mb-1"><b><i>Attested Copy of Last Degree</i></b></li>
            <li class="mb-1"><b><i>Updated Brief CV (including list of publications during last three years)</i></b></li>
            <li class="mb-1"><b><i>Attested Copy of CNIC/Passport</i></b></li>
            <li class="my-1"><b><i>Referral Letter from parent Department/University/Organization</i></b></li>
            <li class="my-1"><b><i>Fresh Passport Size Picture (Blue or White Background)</i></b></li>
            <li class="my-1"><b><i><a class="success"
                    href="https://www.ncp.edu.pk/docs/caad/police-verification-form-2016.pdf">Police Verification
                    Proforma</a></i></b></li>
            <li class="my-1"><b><i>Immunization Certificate (COVID-19)</i></b></li>
          </ul>
          <p class="text-danger"><b><i>Complete the <a href="/register" class="text-danger">Registration Form</a> and
                attach required
                documents to proceed further.</i></b></p>
          <p><b><i>Apply at least 30 days before Initiation of Proposed Research Work at NCP Campus.</i></b>
          </p>
          <p><b><i>Incase of any problems in Application Form, reach out at <a href="mailto:caad@ncp.edu.pk"
                  class="text-success">caad@ncp.edu.pk</a></i></b>
          </p>
        </div>
      </div>
      <div class="mx-4  text-lg-start text-md-start text-sm-center">
        <a href="/register">
          <button class="btn btn-outline-success blink mx-sm-2">Apply Here</button>
        </a>
      </div>
    </div>
  </div>
</template>
<style>
.evaluation-report p {
  font-size: 14px;
}

.list-size {
  font-size: 13.5px;
}

.blink {
  animation: blinker 1.5s linear infinite;
}



a.success:hover {
  color: #28a745;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
<script>
export default {
  name: "projects-table"
}
</script>
