"use client"

import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { Button, Checkbox, Form, Input } from "antd";
import Image from "next/image";

export default function page() {
  const onFinish = (value: { companyName: string; password: string }) => {
    console.log(value);
  };
  return (
    <>
      <div>
        <div className="h-screen w-screen z-0 grid grid-cols-1 md:grid-cols-2 flex-wrap items-center place-items-center">
          <div className="pt-20 hidden md:block">
            <Image
              src="/login.svg"
              alt="portfolio"
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
              width={20}
              height={20}
            />
          </div>
          <div
            id="signup-form"
            className="w-full h-full flex flex-col bg-gradient-to-r from-violet-300/50 via-purple-300 to-violet-50 text-white "
          >
            <div className="md:justify-start my-auto md:pt-0 px-8 md:px-24 lg:px-32 text-white text-2xl">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="companyName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <UserOutlined
                        className="site-form-item-icon"
                        rev={undefined}
                      />
                    }
                    placeholder="Company Name"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <LockOutlined
                        className="site-form-item-icon"
                        rev={undefined}
                      />
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <br />

                  <a className="login-form-forgot text-white" href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button text-white"
                    style={{
                      backgroundColor: "purple",
                    }}
                  >
                    Log in
                  </Button>
                  <br />

                  <a href="/users/signup" className="text-white">
                    Or register now!
                  </a>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
