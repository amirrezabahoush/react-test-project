import React, { useState } from "react";
import { Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Notification from "components/Notification";
import { LoginValues } from "./Login.props";
import AuthForm from "components/AuthForm/AntdForm";
import AuthPureForm from "components/AuthForm/PureForm";
import { StyledWrapper,StyledLabel,StyledInput} from "./Login.styled";
import { setCookie } from "utils/helpers";
import { Switch } from "antd";

const TOKEN_EXPIRE_TIME = 3 * 60 * 1000;

const Login: React.FC = () => {
	const [isPureMode, setIsPureMode] = useState(true);

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
			navigate('/dashboard');
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
					pattern='/(^\s*$)|(^09[0-9]{9}$)/'
					title= " فرمت شماره همراه وارد شده صحیح نمی باشد"
					className="rtl"
      />
    </StyledWrapper>
    <StyledWrapper>
		<StyledLabel>رمز عبور</StyledLabel>
      <StyledInput 
				name="password" 
				type="password" 
				required
				placeholder="رمز عبور"
				pattern=".{5}"
				title='رمز عبور باید شامل ۵ کاراکتر باشد'
				className="rtl"
      />
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