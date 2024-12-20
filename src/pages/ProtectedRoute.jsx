import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useAuth();
	const navigate = useNavigate();

	useEffect(
		function () {
			if (!isAuthenticated) {
				navigate("/");
			}
		},
		[isAuthenticated, navigate]
	);
	return isAuthenticated ? children : null;
};

export default ProtectedRoute;
