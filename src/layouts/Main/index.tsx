import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { StyledContent } from "./Main.styled";
import { UserProvider } from "utils/userContext";
import { UserTypes } from "pages/Users/Users.types";

const { Header, Footer } = Layout;

const MainLayout: React.FC = () => {
	const [user, setUser] = useState<UserTypes | undefined>();
	const navigate = useNavigate();
	const token = localStorage.getItem('token') as string;

	useEffect(() => {
		if(!token) {
			navigate('/');
		}
		const encodedToken = JSON.parse(token);
		const decodedToken = window.atob(encodedToken);
		const userDetails = {};
		decodedToken.split(' ')[2].split('&').forEach(item => {
			if(!item.includes(';')) {
			// @ts-ignore
				userDetails[item.split('=')[0]] = item.split('=')[1]
			}
		});
		setUser(userDetails as UserTypes);
	}, [token])

	const handleLogout = () => {
		localStorage.clear();
		navigate('/');
	}
	
	return (
		<UserProvider value={user}>
			<Layout className="layout">
				<Header>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1">
							<NavLink to={"/dashboard"}>داشبورد</NavLink>
						</Menu.Item>
						<Menu.Item key="2">
							<NavLink to={"/profile"}>پروفایل</NavLink>
						</Menu.Item>
						<Menu.Item key="4" onClick={handleLogout}>خروج</Menu.Item>
					</Menu>
				</Header>
				<StyledContent style={{ padding: "50px" }}>
					<Outlet />
				</StyledContent>
				<Footer className="text-center">Created by Amirreza Bahoush, 2022</Footer>
			</Layout>
		</UserProvider>
	);
};

export default MainLayout;
