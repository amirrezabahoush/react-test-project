import React, { useEffect, useCallback, useState, useRef } from "react";
import { StyledCard } from "pages/Profile/profile.styled";
import {
	Button,
	Col,
	FormInstance,
	Row,
	Table,
	Tooltip,
	Typography,
} from "antd";
import { FormValues, UserTypes } from "./Users.types";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { getUsers } from "services/Users";
import { PromiseResolveTypes } from "services/types";
import { dateToPersian } from "utils/helpers";
import AddOrUpdateUser from "./Add";
import Notification from "components/Notification";
import DeleteUser from "./Delete";
import { UserRoleTypes, USER_ROLES_PERSIAN } from "../../types/User";

const Users: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isEditModalVisible, setIsEditModalVisible] = useState(false);
	const [users, setUsers] = useState<UserTypes[]>([]);
	const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isBtnLoading, setIsBtnLoading] = useState(false);
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

	const handleRemove = async () => {
		if (selected) {
			setIsBtnLoading(true);
			try {
				const updatedList: UserTypes[] = [];
				users.forEach(record => {
					if(record.id !== selected.id) {
						updatedList.push(record);
						return;
					}
					updatedList.push({...selected, isDeleted: true})
				});
				setUsers(updatedList);
				Notification({
					type: "success",
					description: 'کاربر با موفقیت حذف شد.',
					key: "message",
				});
				setIsRemoveModalVisible(false);
			} finally {
				setIsBtnLoading(false);
			}
		}
	};

	const handleAddUser = async (values: FormValues) => {
		if(users.length) {
			setIsLoading(true);
			try {
				const updatedList = [
					...users, 
					{
						...values, 
						creationDate: `${new Date()}`, 
						id: users.at(-1)?.id as number + 1
					}
				];
				setUsers(updatedList);
			} finally {
				setIsLoading(false);
				form.current?.resetFields();
				setIsVisible(false);
			}
		}
	};

	const handleEditUser = async (values: FormValues) => {
		if(users.length && selected) {
			setIsLoading(true);
			try {
				const updatedList: UserTypes[] = [];
				users.forEach(record => {
					if(record.id !== selected.id) {
						updatedList.push(record);
						return;
					}
					updatedList.push({...selected, ...values})
				});
				setUsers(updatedList);
			} finally {
				setIsLoading(false);
				form.current?.resetFields();
				setIsEditModalVisible(false);
			}
		}
	};

	const handleCancelAdd = () => {
		setIsVisible(false);
	};

	const handleCancelEdit = () => {
		setIsEditModalVisible(false);
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
			render: (item: string) => dateToPersian(item)
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
			render: (item: UserRoleTypes) => USER_ROLES_PERSIAN[item]
		},
		{
			key: "action",
			title: "عملیات",
			width:100,
			render: (item: UserTypes[], record: UserTypes) => {
				return (
					<>
						<Row justify="center" gutter={4}>
							<Col xs={12} className="text-right">
								<Tooltip title="ویرایش" placement="bottom">
									<EditTwoTone
										data-testid='edit-icon'
										onClick={() => {
											setSelected(record);
											setIsEditModalVisible(true);
										}}
									/>
								</Tooltip>
							</Col>
							<Col xs={12} className="text-left">
								<Tooltip title="حذف" placement="bottom" data-testid='delete-icon'>
									<DeleteTwoTone
										twoToneColor="#eb2f96" 
										onClick={() => {
											setSelected(record);
											setIsRemoveModalVisible(true);
										}}
									/>	
								</Tooltip>
							
							</Col>
						</Row>
					</>
				);
			},
		},
	];

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
				dataSource={users.filter(item => !item.isDeleted)}
				scroll={{ x: 500 }}
				loading={isLoading}
				rowKey={row => row.id}
				rowClassName='row'
			/>

			<AddOrUpdateUser 
				isVisible={isVisible}
				handleCancel={handleCancelAdd}
				handleAddOrUpdateUser={handleAddUser}
				type='ADD'
				form={form}
				selected={selected}
			/>

			<AddOrUpdateUser 
				isVisible={isEditModalVisible}
				handleCancel={handleCancelEdit}
				handleAddOrUpdateUser={handleEditUser}
				type='EDIT'
				form={form}
				selected={selected}
			/>

			<DeleteUser 
				isRemoveModalVisible={isRemoveModalVisible}
				setIsRemoveModalVisible={setIsRemoveModalVisible}
				handleRemove={handleRemove}
				selected={selected}
				isLoading={isBtnLoading}
			/>
		</StyledCard>
	);
};

export default Users;