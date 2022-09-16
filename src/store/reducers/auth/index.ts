import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthApi from "api/auth";
import { LOGIN, SIGNUP } from "store/types";

import { deleteSession, saveUserSession, saveUser } from "utils/user";
import history from "utils/history";
import toaster from "utils/toaster";

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (action, thunkAPI) => {
    try {
      //   const { email, password } = action.payload;
      //   const {
      //     data: { access, refresh, user },
      //   } = yield call(AuthApi.login, email, password);
      //   deleteSession();
      //   saveUserSession({ access, refresh });
      //   saveUser(user);
      //   toaster.success("Login Sucessfully");
      //   history.push("/dashboard");
    } catch (error) {
      //   const message =
      //     (error.response && error.response.data && error.response.data.message) ||
      //     error.message ||
      //     error.toString()
      //   return thunkAPI.rejectWithValue(message)
    }
  }
);

const initialState = {
  userState: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;

// function* login(action) {
//     try {
//       const { email, password } = action.payload;
//       const {
//         data: { access, refresh, user }
//       } = yield call(AuthApi.login, email, password);
//       deleteSession();
//       saveUserSession({ access, refresh });
//       saveUser(user);
//       toaster.success('Login Sucessfully');
//       history.push('/dashboard');
//     } catch (error) {
//       toaster.error('Invalid Email or Password');
//     }
//   }
