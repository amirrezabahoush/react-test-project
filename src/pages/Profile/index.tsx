import React, { useContext } from "react";
import { Typography, Row, Col } from "antd";
import { StyledCard } from "./profile.styled";
import UserContext from "context/userContext";
import { USER_ROLES_PERSIAN } from "types/User";
import { dateToPersian } from "utils/helpers";

const Profile: React.FC = () => {
	const user = useContext(UserContext);

	console.log({user})

	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					اطلاعات کاربر
				</Typography.Title>
			}
			bordered={false}
		>
			<Row>
				<Col xs={12} className="bold mt-1">
					نام:
				</Col>
				<Col xs={12} className="mt-1">
					{user?.firstName}
				</Col>
				<Col xs={12} className="bold my-1">
					نام خانوادگی:
				</Col>
				<Col xs={12} className="my-1">
					{user?.lastName}
				</Col>
				<Col xs={12} className="bold my-1">
					کد ملی:
				</Col>
				<Col xs={12} className="my-1">
					{user?.nationalCode}
				</Col>
				<Col xs={12} className="bold my-1">
					تلفن همراه:
				</Col>
				<Col xs={12} className="my-1">
					{user?.phoneNumber}
				</Col>
				<Col xs={12} className="bold my-1">
					تاریخ ایجاد:
				</Col>
				<Col xs={12} className="my-1">
					{user ? dateToPersian(user?.creationDate) : ''}
				</Col>
				<Col xs={12} className="bold my-1">
					نقش:
				</Col>
				<Col xs={12} className="my-1">
					{user ? USER_ROLES_PERSIAN[user?.role] : ''}
				</Col>
			</Row>
		</StyledCard>
	);
};

export default Profile;
