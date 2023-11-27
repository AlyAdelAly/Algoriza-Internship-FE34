import { defineStore } from "pinia";
import { generateToken, generateExpireDate } from '../helpers/handleToken';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('auth_token') || null,
        expireDate: localStorage.getItem('auth_expire_date') || null
    }),

    getters: {
        isAuthenticated: (state) => {
            return !!state.token
        },
        isTokenExpired: (state) => {
            const currentDate = new Date();
            return currentDate > new Date(state.expireDate);
        }
    },

    actions: {
        signIn() {
            const token = generateToken();
            const expireDate = generateExpireDate();

            // Save token and expiration date to local storage
            localStorage.setItem('auth_token', JSON.stringify(token));
            localStorage.setItem('auth_expire_date', JSON.stringify(expireDate));

            // Update state
            this.token = token;
            this.expireDate = expireDate;
        },
        signOut() {
            // Remove token and expiration date from local storage
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_expire_date');

            // Update state
            this.token = null;
            this.expireDate = null;
        }
    }
})
