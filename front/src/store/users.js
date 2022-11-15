import axios from "axios";

const users = {
    state: () => ({
        data: [],
        isLoading: false,
    }),
    mutations: {
        setNewData(state, newData) {
            state.data = newData;
        },

        setIsLoading(state, loadValue) {
            state.isLoading = loadValue;
        },
    },

    actions: {
        async loadUsers(context) {
            context.commit("setIsLoading", true);
            const response = await axios.get("http://localhost:3002/user/all");
            context.commit("setIsLoading", false);
            context.commit("setNewData", response.data);
        },
    },

    getters: {
        getAllUsers(state, params, allState) {
            const filterText = allState.filter.filterState.toLowerCase();
            const filterByText = state.data.filter((film) =>
                JSON.stringify(film).toLowerCase().includes(filterText)
            );
            return filterByText.filter((film) =>
                Object.keys(allState.filter.filterFields).some(
                    (filterKey) =>
                    film[filterKey].includes(allState.filter.filterFields[filterKey])
                )
            );
        },

        getLoading(state) {
            return state.isLoading;
        },

        getUserCountries(state) {
            return Array.from(new Set(state.data.map(user => user.country)))
        }
    },
};

export default users