import React from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Input } from 'antd';

import { orderEdit } from '../../state/actions/ordersActions';

const layout = {
  labelCol: {
    span: 6,
  },
};

const tailLayout = {
  wrapperCol: { offset: 6 },
};

function OrderEdit(props) {
  const {
    setEditModalVisible,
    isEditModalVisible,
    editingOrder,
    setEditingOrder,
  } = props;

  // Saves edited data and closes the modal window
  function saveEdit(event) {
    setEditModalVisible(false);
    props.orderEdit(editingOrder);
  }

  // Closes the modal window without saving
  function cancelEdit(event) {
    setEditingOrder({});
    setEditModalVisible(false);
  }

  function inputChangeHandler(event) {
    const fieldId = event.target.id;

    setEditingOrder({
      ...editingOrder,
      [fieldId]: event.target.value,
    });
  }

  return (
    <>
      {isEditModalVisible && (
        <Modal
          title="Edit order"
          visible={true}
          onOk={saveEdit}
          onCancel={cancelEdit}
        >
          <Form {...layout}>
            <Form.Item label="Contact name:">
              <Input
                id="contactName"
                value={editingOrder.contactName}
                onChange={inputChangeHandler}
              />
            </Form.Item>
            <Form.Item label="Organization:">
              <Input
                id="organization"
                value={editingOrder.organization}
                onChange={inputChangeHandler}
              />
            </Form.Item>
            <Form.Item label="Website:">
              <Input
                id="organizationWebsite"
                value={editingOrder.organizationWebsite}
                onChange={inputChangeHandler}
              />
            </Form.Item>
            <Form.Item label="Contact phone:">
              <Input
                id="contactPhone"
                value={editingOrder.contactPhone}
                onChange={inputChangeHandler}
              />
            </Form.Item>
            <Form.Item label="Contact e-mail:">
              <Input
                id="contactEmail"
                value={editingOrder.contactEmail}
                onChange={inputChangeHandler}
              />
            </Form.Item>
            <Form.Item label="Address:">
              <Input
                id="address"
                value={editingOrder.address}
                onChange={inputChangeHandler}
              />
            </Form.Item>
            <Form.Item label="Country:">
              <Input
                id="country"
                value={editingOrder.country}
                onChange={inputChangeHandler}
              />
            </Form.Item>
            <Form.Item label="Comments:">
              <Input.TextArea
                id="comments"
                value={editingOrder.comments}
                onChange={inputChangeHandler}
              />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { orderEdit })(OrderEdit);
