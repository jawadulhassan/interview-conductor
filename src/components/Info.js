import React from "react";
import dayjs from "dayjs";
import { Button, Select, DatePicker, Form, Input } from "antd";

const { Option } = Select;

const designation = [
  { id: 1, name: "Senior Software Engineer" },
  { id: 2, name: "Lead Software Engineer" },
  { id: 3, name: "UI Engineer" },
  { id: 4, name: "Software Engineer" },
  { id: 5, name: "Director Engineering" },
  { id: 6, name: "Software Architect" },
  { id: 7, name: "UI/UX Designer" },
  { id: 8, name: "Senior UI Engineer" },
  { id: 9, name: "Senior Manager HR" },
  { id: 10, name: "Senior Director Operations" },
];

const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }],
};

function Info(props) {
  const onFinish = (values) => {
    // $D-$M-$Y
    const { username, designation, date } = values;
    const newDate = dayjs(date).format("DD-MM-YYYY");
    const newValues = { username, designation, newDate };
    window.localStorage.setItem("interviewee-info", JSON.stringify(newValues));
    props.setSelectedTab("interview");
    console.log("Received values of form: ", newValues);
  };

  return (
    <Form
      name="normal_login"
      className="info-box"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" className="first-input" />
      </Form.Item>
      <Form.Item
        name="designation"
        rules={[{ required: true, message: "Please select designation!" }]}
      >
        <Select size="large" placeholder="Position">
          {designation.map((item) => {
            return (
              <Option key={item.id} value={item.name}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item name="date" {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Let's Begin
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Info;
