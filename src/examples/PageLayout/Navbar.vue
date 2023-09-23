<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-md w-150"  :class="isBlur ? isBlur : ''">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="d-flex">
              <a class="navbar-brand" href="https://www.ncp.edu.pk/">
                <img src="/ncplogo.png" width="50" height="50" class="logo img-fluid">
              </a>
              <h4 class="mt-3 text-black">NATIONAL CENTRE FOR PHYSICS</h4>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarHead",
  data() {
    return {
      // Your data here
    };
  },
  props: {
    btnBackground: String,
    isBlur: String,
    isBtn: { type: String, default: "bg-gradient-light" },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    darkModes(){
      return {
        "text-dark": this.darkMode
      }
    }
  
  }
};
</script>

<style>
.logo {
  background-color: transparent;
  padding: 0.25rem;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  max-width: 100%;
  height: auto;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.logo:hover {
  background-color: rgba(200, 200, 200, 0.5);
}
nav{
  background-color: transparent;
  border: none;
  border-radius: 0;
}
</style>