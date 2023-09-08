import { ListType, PublicListsDictionary } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const publicListsSlice = createSlice({
  name: "publicLists",
  initialState: {} as PublicListsDictionary,
  reducers: {
    addPublicListsReducer: (
      state,
      action: PayloadAction<{
        username: string;
        publicLists: ListType[] | null;
      }>
    ) => {
      state[action.payload.username] = action.payload.publicLists;
    },
  },
});

export const { addPublicListsReducer } = publicListsSlice.actions;
export default publicListsSlice.reducer;
