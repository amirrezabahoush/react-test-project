import React from "react";
import { Outlet } from "react-router-dom";
import { StyledDiv } from "./Auth.styled";

const AuthLayout: React.FC = () => {
	return (
		<StyledDiv>
			<Outlet />
		</StyledDiv>
	);
};

export default AuthLayout;
