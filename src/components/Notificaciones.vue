import VueNotifications from 'vue-notifications';
import miniToastr from 'mini-toastr';

window.Vue.use(BlockUI);

const toastTypes = {
    success: 'success',
    error: 'error',
    info: 'info',
    warn: 'warn'
};

miniToastr.init({types: toastTypes});

function toast ({title, message, type, timeout, cb}) {
    return miniToastr[type](message, title, timeout, cb)
}

const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
};
window.Vue.use(VueNotifications, options);