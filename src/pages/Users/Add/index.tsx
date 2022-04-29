import React from "react";
import {
	Button,
	Form,
	Input,
	Modal,
	Row,
} from "antd";
import { AddUserProps } from "./Add.props";

const AddOrUpdateUser: React.FC<AddUserProps> = (props) => {
  return (
    <Modal
      visible={props.isVisible}
      title="افزودن کاربر جدید"
      closable
      onCancel={props.handleCancel}
      footer={null}
    >
      <Form
        className="form-wrapper"
        onFinish={props.handleAddUser}
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        ref={props.form}
      >
        <Form.Item name="firstName" label="نام">
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="نام خانوادگی">
          <Input />
        </Form.Item>
        <Form.Item name="nationalCode" label="کدملی">
          <Input />
        </Form.Item>
        <Form.Item name="phoneNumber" label="تلفن همراه">
          <Input />
        </Form.Item>
        <Form.Item name="deletable" label="قابلیت حذف">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit" loading={false}>
            افزودن
          </Button>
        </Row>
      </Form>
    </Modal>
  );
}

export default AddOrUpdateUser;