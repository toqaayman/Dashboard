import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, Form, Input, Select } from 'antd'
import PropTypes from 'prop-types'

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    // Call the `onCreate` function passed as a prop with the form values
    onCreate(values)
  }

  return (
    <div>
      <Modal
        visible={visible}
        title={<span style={{ color: 'blue' }}>Add New User</span>}
        onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel}>
            Cancel
          </Button>,
          <Button
            key="add"
            type="primary"
            className="add-button"
            style={{ backgroundColor: 'green', borderColor: 'green' }}
            onClick={() => {
              form.validateFields().then((values) => {
                  form.resetFields()
                  onFinish(values); // Call onFinish with the form values
                })
                .catch((info) => {
                  console.log('Validate Failed:', info)
                })
            }}
          >
            Add User
          </Button>,
          <a
            key="reset"
            onClick={() => {
              form.resetFields()
            }}
            className="reset-link"
          >
            Reset
          </a>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          {/* Form fields go here */}
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: 'Please enter full name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="userName"
            label="User Name"
            rules={[
              {
                required: true,
                message: 'Please enter username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter a valid email address!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="userGroup"
            label="User Group"
            rules={[
              {
                required: true,
                message: 'Please select a user group!',
              },
            ]}
          >
            <Select>
              {/* Add your User Group options here */}
              <Select.Option value="group1">Group 1</Select.Option>
              <Select.Option value="group2">Group 2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="assignProfile"
            label="Assign Profile"
            rules={[
              {
                required: true,
                message: 'Please select an assign profile!',
              },
            ]}
          >
            <Select>
              {/* Add your Assign Profile options here */}
              <Select.Option value="profile1">Profile 1</Select.Option>
              <Select.Option value="profile2">Profile 2</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

// Define propTypes outside the component
CollectionCreateForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default CollectionCreateForm
