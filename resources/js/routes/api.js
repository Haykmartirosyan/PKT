let root = '/api';

module.exports = {
    root: root,

    user: {
        login() {
            return root + '/auth/login';
        },

        logout() {
            return root + '/auth/logout';
        },
    }
};
