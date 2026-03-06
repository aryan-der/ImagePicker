import { createSlice } from "@reduxjs/toolkit";

// Helper to get user from local storage
const loadUser = () => {
    try {
        const storedUser = localStorage.getItem("currentUser");
        return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
        return null;
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: loadUser(),
        isAuthenticated: !!localStorage.getItem("currentUser"),
        error: null,
    },
    reducers: {

        signup(state, action) {

            const { email, password, name } = action.payload;
            const users = JSON.parse(localStorage.getItem("users") || "[]");

            if (users.find(u => u.email === email)) {
                state.error = "User already exists!";
                return;
            }

            const newUser = { email, password, name };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            const userInfo = { email, name };

            localStorage.setItem("currentUser", JSON.stringify(userInfo));
            localStorage.setItem("showOnboarding", "true");

            state.user = userInfo;
            state.isAuthenticated = true;
            state.error = null;
        },

        login(state, action) {

            const { email, password } = action.payload;
            const users = JSON.parse(localStorage.getItem("users") || "[]");

            const user = users.find(
                u => u.email === email && u.password === password
            );

            if (user) {

                const userInfo = { email: user.email, name: user.name };

                localStorage.setItem("currentUser", JSON.stringify(userInfo));

                state.user = userInfo;
                state.isAuthenticated = true;
                state.error = null;

            } else {
                state.error = "Invalid email or password";
            }

        },

        //  Face Login
        faceLogin(state) {

            const userInfo = { faceUser: true };

            localStorage.setItem("currentUser", JSON.stringify(userInfo));

            state.user = userInfo;
            state.isAuthenticated = true;
            state.error = null;

        },

        logout(state) {

            localStorage.removeItem("currentUser");

            state.user = null;
            state.isAuthenticated = false;
            state.error = null;

        },

        clearError(state) {
            state.error = null;
        }

    },
});

export const { signup, login, logout, clearError, faceLogin } = authSlice.actions;

export default authSlice.reducer;