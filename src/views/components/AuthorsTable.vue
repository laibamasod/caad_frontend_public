<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>My Applications</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Application ID
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Application type
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">View/Edit</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Download</th>

            </tr>
          </thead>
          <tbody v-if="studentInternResponse.internship_id">
            <tr>
              <td class="text-center align-middle">
                <p class="text-xs font-weight-bold mb-0">{{ studentInternResponse.internship_id }}</p>
              </td>
              <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0">Internship</p>
              </td>
              <td class="align-middle text-center">
                <span class="badge badge-sm bg-gradient-success">{{ studentInternResponse.application_status }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ studentInternResponse.apply_date }}</span>
              </td>
              <td class="align-middle text-center">
                <a href="/internship" class="text-success font-weight-bold text-xs" data-toggle="tooltip"
                  data-original-title="Edit user">
                  <i class="fa fa-edit fa-lg"></i>
                  <!-- <i class="fa fa-eye"></i> -->
                </a>
              </td>
              <td class="align-middle text-center">
                <a href="javascript:;" class="text-success font-weight-bold text-xs" data-toggle="tooltip"
                  data-original-title="Edit user">
                  <i class="fa fa-download fa-lg"></i>
                </a>
              </td>
            </tr>
          </tbody>
          <tbody v-if="studentIdentityResponse.identity_id">
            <tr>
              <td class="text-center align-middle">
                <p class="text-xs font-weight-bold mb-0">{{ studentIdentityResponse.identity_id }}</p>
              </td>
              <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0">Identity Card</p>
              </td>
              <td class="align-middle text-center">
                <span class="badge badge-sm bg-gradient-success">{{ studentIdentityResponse.application_status }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ studentIdentityResponse.identity_apply_date
                }}</span>
              </td>
              <td class="align-middle text-center">
                <a href="/internship" class="text-success font-weight-bold text-xs" data-toggle="tooltip"
                  data-original-title="Edit user">
                  <i class="fa fa-edit fa-lg"></i>
                  <!-- <i class="fa fa-eye"></i> -->
                </a>
              </td>
              <td class="align-middle text-center">
                <a href="javascript:;" class="text-success font-weight-bold text-xs" data-toggle="tooltip"
                  data-original-title="Edit user">
                  <i class="fa fa-download fa-lg"></i>
                </a>
              </td>
            </tr>
          <tbody v-if="studentAccResponse.ac_id">
            <tr>
              <td class="text-center align-middle">
                <p class="text-xs font-weight-bold mb-0">{{ studentAccResponse.ac_id }}</p>
              </td>
              <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0">Accommodation</p>
              </td>
              <td class="align-middle text-center">
                <span class="badge badge-sm bg-gradient-success">{{ studentAccResponse.application_status }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ studentAccResponse.date_of_application }}</span>
              </td>
              <td class="align-middle text-center">
                <a href="/acc" class="text-success font-weight-bold text-xs" data-toggle="tooltip"
                  data-original-title="Edit user">
                  <i class="fa fa-edit fa-lg"></i>
                  <!-- <i class="fa fa-eye"></i> -->
                </a>
              </td>
              <td class="align-middle text-center">
                <a href="javascript:;" class="text-success font-weight-bold text-xs" data-toggle="tooltip"
                  data-original-title="Edit user">
                  <i class="fa fa-download fa-lg"></i>
                </a>
              </td>
            </tr>
          </tbody>
          <tr>
            <td colspan="6" class="text-center text-secondary text-xs font-weight-bold">No more Applications</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "authors-table",
  data() {
    return {
      studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
      studentRegResponse: JSON.parse(sessionStorage.getItem('student_reg_response')) || {},
      studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
      studentIdentityResponse: JSON.parse(sessionStorage.getItem('student_identity_response')) || {},
      studentAccResponse: JSON.parse(sessionStorage.getItem('student_acc_response')) || {},
    }
  }
};
</script>
