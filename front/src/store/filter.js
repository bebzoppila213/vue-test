const filter = {
    state: () => ({
        filterState: "",
        filterFields: {
            country: "",
        },
    }),

    mutations: {
        setFilterField(state, { key, value }) {
            state.filterFields[key] = value
        },

        updateFilterText(state, newText) {
            state.filterState = newText
        }
    }
};

export default filter