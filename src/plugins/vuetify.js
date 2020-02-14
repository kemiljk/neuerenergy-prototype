import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#1c475c', // brand teal
                secondary: '#FFDD05', // brand yellow
                accent: '#56bdf2', // brand pale blue
                error: '#650000',
                success: '#4CAF50',
                palegreen: '#E5F1EA',
                warning: '#C90000',
                palered: '#FAE8E8',
                darkamber: '#9B6600',
                paleamber: '#FEF3D0',
                grey: '#DDDDDD',
            },
            dark: {
                primary: '#56bdf2', // brand pale blue
                secondary: '#FFDD05', // brand yellow
                accent: '#ccebfb',
                error: '#eb3e46',
                success: '#1FB966',
                palegreen: '#7C9F8A',
                warning: '#C90000',
                palered: '#B49F9F',
                darkamber: '#9B6600',
                paleamber: '#BAAF8B',
                grey: '#333333',
            },
        },
    }
});
