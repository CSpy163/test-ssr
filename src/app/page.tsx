'use client';
import 'antd/dist/reset.css';
import {Button, ConfigProvider, Form, Input} from "antd";
import {LoginForm, ProFormText} from "@ant-design/pro-form";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export default function Home() {
    return (
        <main>
            <ConfigProvider theme={{
                token: {
                    borderRadius: 2,
                    colorPrimary: "#0053a0"
                }
            }}>
                <Form>
                    <Form.Item>
                        <Input/>
                    </Form.Item>
                </Form>
                <Button type={"primary"}>测试按钮</Button>
                <LoginForm title={"测试样式"}>
                    <ProFormText
                        name="username"
                        fieldProps={{
                            size: 'large',
                            prefix: <UserOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'用户名'}
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    />
                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'密码'}
                        rules={[]}
                    />
                </LoginForm>
            </ConfigProvider>
        </main>
    )
}
