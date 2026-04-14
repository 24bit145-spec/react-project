import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoices: [],
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      state.invoices.push(action.payload);
    },
    setInvoices: (state, action) => {
      state.invoices = action.payload;
    },
    deleteInvoice: (state, action) => {
      state.invoices = state.invoices.filter(
        (inv) => inv.id !== action.payload
      );
    },
  },
});

export const { addInvoice, setInvoices, deleteInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;