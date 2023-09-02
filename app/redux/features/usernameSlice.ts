import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
  name: "username",
  initialState: "",
  reducers: {
    setUsernameReducer: (_, action: PayloadAction<string>) => action.payload,
    resetUsernameReducer: () => "" as string,
  },
});

export const { setUsernameReducer, resetUsernameReducer } =
  usernameSlice.actions;
export default usernameSlice.reducer;
