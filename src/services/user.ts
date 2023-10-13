import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  password: string;
}

export interface UsersState extends Array<UserState> {}

const initialState: UsersState = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UsersState>) => {
      state.push(...action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
