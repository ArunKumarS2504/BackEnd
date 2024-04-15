import { useState } from "react";
import { Button, Form, Input } from 'antd';
// import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './firebase';
import { Link } from "react-router-dom";


function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSubmit}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                    onChange={(e) => setEmail(e.target.value)}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    onChange={(e) => setPassword(e.target.value)}
                >
                    <Input.Password />
                </Form.Item>

                {/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item
                 wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}>
                <Link to={'/login'}>Already have an account?</Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Signup;