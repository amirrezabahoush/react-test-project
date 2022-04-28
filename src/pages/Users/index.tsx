import React, { useEffect, useCallback, useState, useRef } from "react";
import { StyledCard } from "pages/Profile/profile.styled";
import {
	Button,
	Col,
	Form,
	FormInstance,
	Input,
	Modal,
	Row,
	Table,
	Typography,
} from "antd";
import { FormValues, UserTypes } from "./Users.types";
// import Notification from "components/Notification";
import { DeleteOutlined } from "@ant-design/icons";
import { getUsers } from "services/Users";
import { PromiseResolveTypes } from "services/types";

const Dashboard: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [users, setUsers] = useState([]);
	const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [selected, setSelected] = useState<UserTypes>();
	const form = useRef<FormInstance<FormValues> | any>();

	const handleGetUsers = useCallback(async() => {
		setIsLoading(true);
		try {
			const response = await getUsers();
			// @ts-ignore
			setUsers((response as PromiseResolveTypes).data)
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		handleGetUsers();
	}, []);

	const onRemove = async () => {
		if (selected) {
			setIsLoading(true);
			try {
				// const response = await removeTicket(selected.appUserSuggestionId);
				// const notificationProps = {
				// 	type: "success",
				// 	description: response.data.message,
				// 	key: "message",
				// };
				// response.status === 200 && Notification(notificationProps);
				// onGetTickets();
			} finally {
				setIsLoading(false);
			}
		}
	};

	const columns = [
		{
			key: "row",
			dataIndex: "id",
			title: "ردیف",
		},
		{
			key: "firstName",
			dataIndex: "firstName",
			title: "نام",
		},
		{
			key: "lastName",
			dataIndex: "lastName",
			title: "نام خانوادگی",
		},
		{
			key: "creationDate",
			dataIndex: "creationDate",
			title: "تاریخ ایجاد",
		},
		{
			key: "nationalCode",
			dataIndex: "nationalCode",
			title: "کد ملی",
		},
		{
			key: "role",
			dataIndex: "role",
			title: "نقش",
		},
		{
			key: "action",
			title: "عملیات",
			render: (item: UserTypes[], record: UserTypes) => {
				return (
					<>
						<Row justify="center" gutter={4}>
							<Col xs={24}>
								<DeleteOutlined
									onClick={() => {
										setSelected(record);
										setIsRemoveModalVisible(true);
									}}
								/>
							</Col>
						</Row>
					</>
				);
			},
		},
	];

	const onSubmit = async (values: FormValues) => {
		setIsLoading(true);
		try {
			// const response = await addTicket(values);
			// const notificationProps = {
			// 	type: "success",
			// 	description: response.data.message,
			// 	key: "message",
			// };
			// response.status === 200 && Notification(notificationProps);
			// onGetTickets();
		} finally {
			setIsLoading(false);
			setIsVisible(false);
			form.current?.resetFields()();
		}
	};

	const handleCancel = () => {
		setIsVisible(false);
	};

	return (
		<StyledCard>
			<Row justify="start" className="mb-1">
				<Col xs={24}>
					<Typography.Title className="page-title">
						لیست کاربران ثبت شده
					</Typography.Title>
				</Col>
			</Row>

			<Row justify="end" className="mb-1">
				<Col>
					‌‌
					<Button type="primary" onClick={() => setIsVisible(true)}>
						افزودن کاربر جدید
					</Button>
				</Col>
			</Row>

			<Table
				columns={columns}
				dataSource={users}
				scroll={{ x: 500 }}
				loading={isLoading}
			/>
			<Modal
				visible={isVisible}
				title="افزودن کاربر جدید"
				closable
				onCancel={handleCancel}
				footer={null}
			>
				<Form
					className="form-wrapper"
					onFinish={onSubmit}
					labelCol={{ span: 24 }}
					wrapperCol={{ span: 24 }}
					ref={form}
				>
					<Form.Item name="addressLink" label="آدرس لینک">
						<Input />
					</Form.Item>
					<Form.Item name="message" label="پیام">
						<Input.TextArea rows={4} />
					</Form.Item>
					<Row justify="end">
						<Button type="primary" htmlType="submit" loading={isLoading}>
							ثبت تیکت
						</Button>
					</Row>
				</Form>
			</Modal>

			<Modal
				visible={isRemoveModalVisible}
				onCancel={() => setIsRemoveModalVisible(false)}
				title="حذف تیکت"
				closable
				footer={null}
			>
				<Row className="mb-1">
					<Col xs={25}>
						{/* آیا از حذف تیکت با id {selected?.appUserSuggestionId} مطمئن هستید؟ */}
					</Col>
				</Row>
				<Row justify="end">
					<Button
						type="primary"
						htmlType="submit"
						loading={isLoading}
						onClick={onRemove}
						className="ml-1"
					>
						حذف تیکت
					</Button>
					<Button
						type="primary"
						htmlType="submit"
						danger
						onClick={() => setIsRemoveModalVisible(false)}
						className="mr-1"
					>
						انصراف
					</Button>
				</Row>
			</Modal>
		</StyledCard>
	);
};

export default Dashboard;
