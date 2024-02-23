import { createSlice } from "@reduxjs/toolkit";




const GeneralSlice = createSlice({
    name: "general",

    initialState: {
        selectedType: null,
        paginationInfo: [],
        paginationCount: 0,
    },

    reducers: {

        setDropDownType(state, action) {
            state.selectedType = action.payload
        },
        setPaginationType(state, action) {
            state.paginationInfo = action.payload
        },
        setPaginationCount(state, action) {
            state.paginationCount = action.payload
        }
    },

    extraReducers: () => {

    }
});

export default GeneralSlice.reducer;
export const { setDropDownType, setPaginationType,setPaginationCount } = GeneralSlice.actions