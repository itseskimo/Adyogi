import { createSlice } from "@reduxjs/toolkit";

const GeneralSlice = createSlice({
    name: "general",

    initialState: {
        selectedType: null,
        paginationCount: 0,
    },

    reducers: {

        setDropDownType(state, action) {
            state.selectedType = action.payload
        },

        setPaginationCount(state, action) {
            state.paginationCount = action.payload
        }
    },

    extraReducers: () => {

    }
});

export default GeneralSlice.reducer;
export const { setDropDownType, setPaginationCount } = GeneralSlice.actions