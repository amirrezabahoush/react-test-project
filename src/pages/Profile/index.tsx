import React, { useContext } from "react";
import { Typography, Row, Col, List } from "antd";
import { StyledCard } from "./profile.styled";
import UserContext from "context/userContext";
import { USER_ROLES_PERSIAN } from "types/User";
import { dateToPersian } from "utils/helpers";

const Profile: React.FC = () => {
	const user = useContext(UserContext);
	const data = [
		{
			name:"نام:",
			value:user?.firstName
		},
		{
			name:"نام خانوادگی:",
			value:user?.lastName
		},
		{
			name:"کد ملی:",
			value:user?.nationalCode
		},
		{
			name:"تلفن همراه:",
			value:user?.phoneNumber
		},
		{
			name:"تاریخ ایجاد:",
			value:user ? dateToPersian(user?.creationDate) : ''
		},
		{
			name:"نقش:",
			value:user ? USER_ROLES_PERSIAN[user?.role] : ''
		}
	]

	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					اطلاعات کاربر
				</Typography.Title>
			}
			bordered={false}
		>
			<List>
				{data.map(item =>
					<List.Item>
						<Typography.Text className="bold">{item.name}</Typography.Text>
						<Typography.Text>{item.value}</Typography.Text>
					</List.Item>
				)}
			</List>
		</StyledCard>
	);
};

export default Profile;
