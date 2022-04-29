import React from 'react';
import {
	Button,
	Col,
	Modal,
	Row
} from "antd";
import { DeleteUserProps } from './Delete.props';

const DeleteUser: React.FC<DeleteUserProps> = (props) => {
  return (
    <Modal
    visible={props.isRemoveModalVisible}
    onCancel={() => props.setIsRemoveModalVisible(false)}
    title="حذف کاربر"
    closable
    footer={null}
  >
    <Row className="mb-1">
      <Col xs={25}>
        آیا از حذف کاربر {props.selected?.firstName} {props.selected?.lastName} مطمئن هستید؟
      </Col>
    </Row>
    <Row justify="end">
      <Button
        type="primary"
        danger
        htmlType="submit"
        loading={props.isLoading}
        onClick={props.handleRemove}
        className="ml-1"
      >
        حذف تیکت
      </Button>
      <Button
        type="default"
        htmlType="submit"
        onClick={() => props.setIsRemoveModalVisible(false)}
        className="mr-1"
      >
        انصراف
      </Button>
    </Row>
  </Modal>
  )
};

export default DeleteUser;