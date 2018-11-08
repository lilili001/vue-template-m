const app = {
    state: {
        username:"",

    },
    mutations: {
        setName (state, name) {
            state.username = name
        }
    },
    getters : {
        username: state => state.username,

    }
};

export default app;