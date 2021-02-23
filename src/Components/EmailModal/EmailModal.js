import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Button, Form, Input } from 'antd';
import './EmailModal.css';

export default function ContactUs({ DTN_email = 'gtour180@gmail.com' }) {
  const [form] = Form.useForm();
  function sendEmail() {
    emailjs
      .sendForm(
        'service_ptqxdat',
        'template_a2x0vvq',
        '.contact-form',
        'user_TjOtCbLf6rKNt6BePm7vw'
      )
      .then(
        (result) => {
          window.alert('Your message has been sent!');
        },
        (error) => {
          window.alert('Something went wrong. Try again!');
        }
      );
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        sendEmail();
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Join us!
      </Button>
      <Modal
        title={[<div className="title_modal">Welcome!</div>]}
        visible={isModalVisible}
        onOk={handleOk}
        okText="Send Email"
        onCancel={handleCancel}
      >
        <Form form={form} {...layout} className="contact-form">
          <Input type="hidden" name="page_email" value={'gtour180@gmail.com'} />
          <Form.Item
            label="Full Name"
            name="newGuide_name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input type="text" name="newGuide_name" className="input_name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input type="email" name="email" className="input_email" />
          </Form.Item>
          <Form.Item
            label="Specialization"
            name="specialization"
            rules={[
              {
                required: true,
                message: 'Please input the specialization!',
              },
            ]}
          >
            <Input type="text" name="specialization" className="input_spec" />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: 'Please input the city!',
              },
            ]}
          >
            <Input type="text" name="city" className="input_city" />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: 'Please input your message!',
              },
            ]}
          >
            <Input.TextArea name="message" className="input_message" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
