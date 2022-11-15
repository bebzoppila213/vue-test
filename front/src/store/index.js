import { createStore } from "vuex";
import users from "./users"
import filter from "./filter"


export default createStore({
    modules: {
        users,
        filter,
    },
});