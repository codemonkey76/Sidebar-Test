
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

// Import and register sidebar-nav as global vue component
import SidebarNav from 'sidebar-nav';
Vue.component('sidebar-nav', SidebarNav);

const app = new Vue({
    el: '#app',
    data: {
        menu: [{
            name: 'Address Book',
            icon: 'fas fa-address-book',
            link: '#'
        },{
            name: 'Accommodation',
            icon: 'fas fa-bed',
            link: '#'
        },{
            name: 'Calendar',
            icon: 'fas fa-calendar-alt',
            link: '#'
        },{
            name: 'Comments',
            icon: 'fas fa-comments',
            link: '#'
        }]
    }
});
