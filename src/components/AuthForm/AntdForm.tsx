import React from "react";
import { Row, Col, Form, Button, Typography } from "antd";
import { StyledCard } from "./AuthForm.styled";

const AuthForm: React.FC<{
	title: string;
	onFinish(values: any): void;
	submitText: string;
}> = (props) => {
	return (
		<StyledCard
			title={
				<Typography.Title level={4} className="text-center">
					{props.title}
				</Typography.Title>
			}
			bordered={false}
		>
			<Form
				name="basic"
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				onFinish={props.onFinish}
				autoComplete="off"
				className="form-wrapper"
				size="large"
			>
				{props.children}
				<Row className="text-center">
					<Col xs={24} xl={12} className="mt-2 mx-auto">
						<Button type="primary" htmlType="submit" className="w-100">
							{props.submitText}
						</Button>
					</Col>
				</Row>
			</Form>
		</StyledCard>
	);
};

export default AuthForm;
