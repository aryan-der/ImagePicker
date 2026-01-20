import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    page: 1,
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      state.page = 1; // Reset page on new search
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
      state.page = 1; // Reset page on tab change
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResult(state) {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setPage,
  setLoading,
  setResults,
  setError,
  clearResult,
} = searchSlice.actions;

export default searchSlice.reducer;