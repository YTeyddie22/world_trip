import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
	user: null,
	isAuthenticated: false,
};

function authReducer(state, action) {
	switch (action.type) {
		case "login":
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case "logout":
			return { ...state, user: null, isAuthenticated: false };

		default:
			throw new Error("Unknown action");
	}
}

const FAKE_USER = {
	name: "Jack",
	email: "jack@example.com",
	password: "qwerty",
	avatar: "https://i.pravatar.cc/100?u=zz",
};

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
	const [{ user, isAuthenticated }, dispatch] = useReducer(
		authReducer,
		initialState
	);

	function login(email, password) {
		if (email === FAKE_USER.email && password === FAKE_USER.password) {
			dispatch({ type: "login", payload: FAKE_USER });
		}
	}

	function logout() {
		dispatch({ type: "logout" });
	}
	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				user,
				login,
				logout,
			}}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);

	if (context === undefined)
		throw new Error("AuthContext is used outside the AuthProvider");

	return context;
}

export { AuthProvider, useAuth };
