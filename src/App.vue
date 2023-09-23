
<template>
  <sidenav :custom_class="this.$store.state.mcolor" :class="[
    this.$store.state.isTransparent,
    this.$store.state.isRTL ? 'fixed-end' : 'fixed-start'
  ]" v-if="this.$store.state.showSidenav" />
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <div class="container" >
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-auto shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div>
    <!-- nav -->
    <NavbarComp :class="[navClasses]" :textWhite="this.$store.state.isAbsolute ? 'text-white opacity-8' : 'text-white'
      " :minNav="navbarMinimize" v-if="this.$store.state.showNavbar" />
    <router-view />
    <app-footer v-show="this.$store.state.showFooter" />
  </main>
 
</template>


<script>
import Sidenav from "./examples/Sidenav";
import NavbarComp from "@/examples/Navbars/NavbarComp.vue";
import AppFooter from "@/examples/Footer.vue";
import Navbar from "@/examples/PageLayout/Navbar.vue";
import { mapMutations } from "vuex";


export default {
  name: "App",
  components: {
    Sidenav,
    NavbarComp,
    AppFooter,
    Navbar,
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
  computed: {
    navClasses() {
      return {
        "position-sticky bg-white left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && !this.$store.state.darkMode,
        "position-sticky bg-default left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && this.$store.state.darkMode,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
          .isAbsolute,
        "px-0 mx-4": !this.$store.state.isAbsolute
      };
    }
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  }
};
</script>