import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#FFDD05',
                secondary: '#1c475c',
                accent: '#56bdf2',
                error: '#650000',
                success: '#4CAF50',
                green: '#00662F',
                palegreen: '#E5F1EA',
                warning: '#C90000',
                palered: '#FAE8E8',
                darkamber: '#9B6600',
                paleamber: '#FEF3D0',
                grey: '#CCCCCC',
            },
            dark: {
                primary: '#FFDD05',
                secondary: '#56bdf2',
                accent: '#56bdf2',
                error: '#b71c1c',
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
