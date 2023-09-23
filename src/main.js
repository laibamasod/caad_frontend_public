import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import "@/assets/css/print.css";
import { validateEmail, validateName, validateCnic, isValidInput,validateNumber } from '@/validations.js';

const appInstance = createApp(App);

appInstance.config.globalProperties.$validateEmail = validateEmail;
appInstance.config.globalProperties.$validateName = validateName;
appInstance.config.globalProperties.$validateCnic = validateCnic;
appInstance.config.globalProperties.$isValidInput = isValidInput;
appInstance.config.globalProperties.$validateNumber = validateNumber;
appInstance.config.globalProperties.$printForm = function() {
    window.print();
    this.saveForm()
};
// appInstance.config.globalProperties.$eventBus = EventBus;
//appInstance.use(VeeValidatePlugin);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");