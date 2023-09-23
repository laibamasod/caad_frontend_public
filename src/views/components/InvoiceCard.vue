<template>
  <div class="card pb-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-12 d-flex align-items-center">
          <h6 class="mb-0">SUGGESTED FOR YOU</h6>
        </div>
      </div>
    </div>
    <div class="card-body p-3 pb-0 mb-0">
      <ul class="list-group">
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="rectangle-icon">
              <i class="fas fa-square text-gray"></i>
            </div>
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Identity Card</h6>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <i class="fas fa-chevron-right text-gray"></i>
          </div>
        </li>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="rectangle-icon">
              <i class="fas fa-square text-gray"></i>
            </div>
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Extension In Research</h6>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <i class="fas fa-chevron-right text-gray"></i>
          </div>
        </li>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="rectangle-icon">
              <i class="fas fa-square text-gray"></i>
            </div>
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Evaluation Proforma</h6>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <i class="fas fa-chevron-right text-gray"></i>
          </div>
        </li>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="rectangle-icon">
              <i class="fas fa-square text-gray"></i>
            </div>
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Accomodation</h6>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <i class="fas fa-chevron-right text-gray"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "invoice-card",
  components: {
  },
};
</script>
<style scoped>

.text-gray {
  color: #888;
}
</style>