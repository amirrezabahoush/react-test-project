import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Notification from "components/Notification";
import { LoginValues } from "./Login.props";
import AuthForm from "pages/Login/AuthForm/AntdForm";
import AuthPureForm from "pages/Login/AuthForm/PureForm";
import { StyledWrapper,StyledLabel,StyledInput,StyledButton} from "./Login.styled";
import { setCookie } from "utils/helpers";
import { Switch } from "antd";
import { EyeOutlined, EyeInvisibleOutlined} from "@ant-design/icons";

const TOKEN_EXPIRE_TIME = 3 * 60 * 1000;

const Login: React.FC = () => {
	const [isPureMode, setIsPureMode] = useState(true);
	const [passwordShown, setPasswordShown] = useState(false);

	const handleTogglePassword = () => {
    setPasswordShown(!passwordShown);
  };

	const navigate = useNavigate();

	const handleLogin = ({phoneNumber, password}: LoginValues) => {
		if(phoneNumber === '09120000000' && password === '00000') {
			const encodedToken = window.btoa(process.env.REACT_APP_TOKEN as string);
			localStorage.setItem('token', JSON.stringify(encodedToken));
			setCookie('token', encodedToken, TOKEN_EXPIRE_TIME);
			Notification({
				type: "success",
				description: 'با موفقیت وارد شدید.',
				key: "message"
			});
			navigate('/users');
		} else {
			Notification({
				type: "error",
				description: 'نام کاربری یا رمز عبور اشتباه است.',
				key: "message"
			});
		}
	}

	const handlePureFormSubmit = (e: any) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		handleLogin(formProps as LoginValues);
	};

	const renderAntdForm = () => (
		<AuthForm submitText="ثبت" onFinish={handleLogin} title="ورود">
			<Form.Item
				label="شماره موبایل"
				name="phoneNumber"
				rules={[
					{ required: true, message: "ورود شماره موبایل الزامی است" },
					{
						pattern: new RegExp(/(^\s*$)|(^09[0-9]{9}$)/),
						message: " فرمت شماره همراه وارد شده صحیح نمی باشد",
					},
				]}
			>
				<Input type="text" autoComplete="off" />
			</Form.Item>
			<Form.Item
				label="رمز عبور"
				name="password"
				rules={[
					{ required: true, message: "ورود رمز عبور الزامی است" },
					{ min: 5, message: 'رمز عبور باید شامل ۵ کاراکتر باشد'}
				]}
			>
				<Input.Password autoComplete="off"/>
			</Form.Item>
		</AuthForm>
	);

	const renderPureForm = () => (
		<AuthPureForm submitText="ثبت" onFinish={handlePureFormSubmit} title="ورود">
			<StyledWrapper>
				<StyledLabel>شماره موبایل</StyledLabel>
				<StyledInput 
					name="phoneNumber" 
					type="text" 
					required
					placeholder="شماره موبایل"
					minLength={11}
					maxLength={11}
					title= " فرمت شماره همراه وارد شده صحیح نمی باشد"
					className="rtl"
        />
      </StyledWrapper>
			<StyledWrapper>
				<StyledLabel>رمز عبور</StyledLabel>
					<StyledInput 
						name="password" 
						type={passwordShown ? "text" : "password"}
						required
						placeholder="رمز عبور"
						minLength={5}
						maxLength={5}
						title='رمز عبور باید شامل ۵ کاراکتر باشد'
						className="rtl"
					/>
					<StyledButton
						onClick={handleTogglePassword}
					>
						{passwordShown ? <EyeOutlined /> : 	<EyeInvisibleOutlined />}
					</StyledButton>
			</StyledWrapper>
		</AuthPureForm>
	);

	return (
		<>
			{isPureMode ? renderAntdForm() : renderPureForm()}
			<Switch 
				checkedChildren='antd' 
				unCheckedChildren='pure' 
				className='component-switcher'
				checked={isPureMode}
				onChange={e => setIsPureMode(e)}
			/> 
		</>
	)

};

export default Login;