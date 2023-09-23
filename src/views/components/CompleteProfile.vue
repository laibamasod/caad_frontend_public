<template>
  <div class="card card-profile">

    <div class="row justify-content-center mt-5">
      <div class="col-4 col-lg-4 order-lg-2">
        <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
          <a href="javascript:;">
            <img src="../../assets/img/amna.jpg" class="rounded-circle img-fluid border border-2 border-white mt-5" />
          </a>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="text-center">
        <h5>
          {{ studentResponse.std_name }}
        </h5>
      </div>
      <div class="mt-5">
        <div class="d-flex flex-column">
          <div class="h6 font-weight-300 text-muted">
            <i class="ni education_hat mr-2" style="color: #c3c3c3"></i>
            CNIC:
          </div>
          <div class="ms-1" style="color: black; font-size: 14px;">{{ studentResponse.std_cnic }}</div>
        </div>

        <div class="d-flex flex-column">
          <div class="h6 font-weight-300 text-muted mt-2">
            <i class="ni education_hat mr-2" style="color: #c3c3c3"></i>
            EMAIL:
          </div>
          <div class="ms-1" style="color: black; font-size: 14px;">{{ studentResponse.std_email }}</div>
        </div>
        <div class="d-flex flex-column">
          <div class="h6 font-weight-300 text-muted mt-2">
            <i class="ni education_hat mr-2" style="color: #c3c3c3"></i>
            PHONE NO:
          </div>
          <div class="ms-1" style="color: black; font-size: 14px;">{{ studentResponse.std_phone_no }}</div>
        </div>
      </div>
      <div class="mt-3">
        <ul class="list-group mt-2">
          <li class="list-group-item border d-flex justify-content-between ps-0 m-1 border-radius-lg cursor-pointer "
            :style="getListStyles('personal')" @mouseenter="onMouseEnter('personal')" @mouseleave="onMouseLeave()"
            @click="emitSectionClicked('personal')">
            <div class="d-flex align-items-center ms-3">
              <div class="d-flex align-items-center">
                <i class="fas fa-user text-gray"></i>
              </div>
              <div class="d-flex flex-column ms-3">
                <h6 class="mb-1 text-dark font-weight-bold text-sm">Personal Details</h6>
              </div>
            </div>
          </li>
          <li @click="emitSectionClicked('contact')"
            class="list-group-item border d-flex justify-content-between ps-0 m-1 border-radius-lg cursor-pointer"
            @mouseenter="onMouseEnter('contact')" @mouseleave="onMouseLeave()" :style="getListStyles('contact')">
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center ms-3">
                <i class="fas fa-address-book text-gray"></i>
              </div>
              <div class="d-flex flex-column ms-3">
                <h6 class="mb-1 text-dark font-weight-bold text-sm">Contact details</h6>
              </div>
            </div>
          </li>
          <li class="list-group-item border d-flex justify-content-between ps-0 m-1 border-radius-lg cursor-pointer"
            :style="getListStyles('education')" @mouseenter="onMouseEnter('education')" @mouseleave="onMouseLeave()"
            @click="emitSectionClicked('education')">
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center ms-3">
                <i class="fas fa-user-graduate text-gray"></i>
              </div>
              <div class="d-flex flex-column ms-3">
                <h6 class="mb-1 text-dark font-weight-bold text-sm">Educational Details</h6>
              </div>
            </div>
          </li>
          <li v-if="isInternee" class="list-group-item border d-flex justify-content-between ps-0 m-1 border-radius-lg cursor-pointer "
            :style="getListStyles('document')" @mouseenter="onMouseEnter('document')" @mouseleave="onMouseLeave()"
            @click="emitSectionClicked('document')">
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center ms-3">
                <i class="fas fa-file text-gray"></i>
              </div>
              <div class="d-flex flex-column ms-3">
                <h6 class="mb-1 text-dark font-weight-bold text-sm">Documents Details</h6>
              </div>
            </div>
          </li>
          <li  v-if="isInternee" class="list-group-item border d-flex justify-content-between ps-0 m-1 border-radius-lg cursor-pointer "
            :style="getListStyles('internship')" @mouseenter="onMouseEnter('internship')" @mouseleave="onMouseLeave()"
            @click="emitSectionClicked('internship')" >
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center ms-3">
                <i class="fas fa-university text-gray"></i>
              </div>
              <div class="d-flex flex-column ms-3">
                <h6 class="mb-1 text-dark font-weight-bold text-sm">Internship Details</h6>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "CompleteProfile",
  props: {
    activeSection: String,
    hoveredSection: String
  },
  data() {
    return {
      studentResponse: JSON.parse(sessionStorage.getItem('student_data_response')) || {},
      studentInternResponse: JSON.parse(sessionStorage.getItem('student_intern_response')) || {},
      localHoveredSection: null,
      isInternee:false,
     
    };
  },
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL;

    },

  },
  methods: {
    onMouseEnter(section) {
      this.localHoveredSection = section;
    },
    onMouseLeave() {
      this.localHoveredSection = null;
    },
    emitSectionClicked(section) {
      this.$emit("sectionClicked", section);
    },
    getListStyles(section) {
      const styles = {};

      if (this.activeSection === section) {
        styles.backgroundColor = '#f8f9fe';
        styles.color = '#007bff';
      } else if (this.hoveredSection === section) {
        styles.backgroundColor = '#e5e5e5';
      }
      return styles;
    },
  },

  async created() {
    if(this.studentInternResponse.internship_id){
      this.isInternee=true;
    }
    else{
      this.isInternee=false;
    }

  },
  watch: {
    localHoveredSection(newValue) {
      this.$emit("hoveredSectionChange", newValue);
    }
  }


}
</script>
<style>
.custom-scrollbar {
  width: 100%;
  height: 15px;
  background-color: #e5e5e5;
  overflow-x: auto;
  border-radius: 8px;
}

.scroll-text {
  position: absolute;
  padding-right: 5px;
  font-size: 12px;
  color: #000;
}

.scroll-progress {
  width: 40%;
  /* Adjust the width as needed */
  height: 100%;
  background-color: #00cc66;
  /* Green color */
  border-radius: 8px;
}

.active-section {
  background-color: #f8f9fe;
  /* Set the background color for the active section */
  color: #007bff;
  /* Set the font color for the active section */
}

.hovered-section {
  background-color: #e5e5e5;
  /* Set the background color for the hovered section */
}
</style>