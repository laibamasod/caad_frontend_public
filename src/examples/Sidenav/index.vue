<template>
    <div
      v-show="this.$store.state.layout === 'default'"
      class="min-height-300 position-absolute w-100"
      :class="`${this.$store.state.darkMode ? 'bg-transparent' : 'bg-success'}`"
    />
    <aside
      class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
      :class="`${
        this.$store.state.isRTL
          ? 'me-3 rotate-caret fixed-end'
          : 'fixed-start ms-3'
      } 
      ${
        this.$store.state.layout === 'landing'
          ? 'bg-transparent shadow-none'
          : ' '
      } ${this.$store.state.sidebarType}`"
      id="sidenav-main"
    >
      <hr class="mt-0 horizontal dark" />
      <sidenav-list :cardBg="custom_class" />
    </aside>
  </template>
  <script>
  import SidenavList from "./SidenavList.vue";
  import logo from "@/assets/img/logo-ct-dark.png";
  import logoWhite from "@/assets/img/logo-ct.png";
  
  export default {
    name: "index-comp",
    components: {
      SidenavList
    },
    data() {
      return {
        logo,
        logoWhite
      };
    },
    props: ["custom_class", "layout"]
  };
  </script>
  