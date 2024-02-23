import { createSlice } from "@reduxjs/toolkit";

const GeneralSlice = createSlice({
    name: "general",

    initialState: {
        selectedType: null,
        paginationCount: 0,
        searchItems:null,
        sideBarOpen:false
    },

    reducers: {

        setSearchedData(state, action) {
            state.searchItems = action.payload
        },
        setSideBarOpen(state, action) {
            state.sideBarOpen = action.payload
        },
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
export const { setDropDownType, setPaginationCount,setSearchedData ,setSideBarOpen} = GeneralSlice.actions