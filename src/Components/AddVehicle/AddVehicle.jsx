import React, { useState } from "react";
import { Form, Input, Button, message, Select } from "antd";
import { useNavigate } from "react-router-dom";
import "./AddVehicle.css";
import Dragger from "antd/es/upload/Dragger";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

const AddVehicle = () => {
  const [form] = Form.useForm();
  const history = useNavigate();
  const onFinish = (values) => {
    // You can handle form submission here and send the data to your API
    // For this example, we'll just display a success message and navigate back to the main page
    message.success("Vehicle added successfully!");
    history.push("/cars"); // Replace "/cars" with the appropriate route
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Vehicle</h1>
      <div className="Add-vehicle-main">
        <div className="left-form">
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            className="Add-vehicle-form"
          >
            <div className="form-input-fields">
              <Form.Item
                label="Vehicle Name"
                name="vehicleName"
                rules={[
                  { required: true, message: "Please enter the vehicle name!" },
                ]}
                className="input-field"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Vehicle Company"
                name="vehicleCompany"
                rules={[
                  {
                    required: true,
                    message: "Please enter the vehicle Company!",
                  },
                ]}
                className="input-field-right"
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              label="License Plate"
              name="licensePlate"
              rules={[
                { required: true, message: "Please enter the license plate!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Year"
              name="year"
              rules={[{ required: true, message: "Please enter the year!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Color"
              name="color"
              rules={[{ required: true, message: "Please enter the color!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Transmittion"
              name="Transmittion"
              rules={[
                {
                  required: true,
                  message: "Please select the vehicle's Transmittion!",
                },
              ]}
            >
              <Select placeholder="Select a Transmittion">
                <Option value="Transmittion1">Manuel</Option>
                <Option value="Transmittion2">Auto</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Fuel Type"
              name="Fuel"
              rules={[
                {
                  required: true,
                  message: "Please select the vehicle's Fuel Type!",
                },
              ]}
            >
              <Select placeholder="Select a Fuel Type">
                <Option value="Fuel1">Diseal</Option>
                <Option value="Fuel2">Petrol</Option>
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Add Vehicle
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="right-img">
          <Form.Item
            label="Upload Images"
            name="images"
            valuePropName="fileList"
          >
            <Dragger
              name="file"
              multiple
              beforeUpload={() => false} // Prevent automatic upload
            >
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">Click or drag to upload</p>
              <p className="ant-upload-hint">
                You can upload multiple images here.
              </p>
            </Dragger>
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;