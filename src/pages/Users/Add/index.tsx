import React, { useEffect } from "react";
import {
	Button,
	Form,
	Input,
	Modal,
	Row,
  Switch,
} from "antd";
import { AddUserProps } from "./Add.props";

const AddOrUpdateUser: React.FC<AddUserProps> = (props) => {

  useEffect(() => {
    console.log(props.form, props.selected)
    if(props.selected) {
      props.form.current.setFieldsValue(props.selected);
    }
  }, [props.form, props.selected]);

  return (
    <Modal
      visible={props.isVisible}
      title={props.type === 'ADD' ? 'افزودن کاربر جدید' : 'ویرایش کاربر'}
      closable
      onCancel={props.handleCancel}
      footer={null}
    >
      <Form
        data-testid='add-or-update'
        className="form-wrapper"
        onFinish={props.handleAddOrUpdateUser}
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        ref={props.form}
      >
        <Form.Item name="firstName" label="نام">
          <Input data-testid='firstName' />
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
          <Switch />
        </Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit" data-testid={props.type} loading={false}>
            {props.type === 'EDIT' ? 'ویرایش' : 'افزودن'}
          </Button>
        </Row>
      </Form>
    </Modal>
  );
}

export default AddOrUpdateUser;