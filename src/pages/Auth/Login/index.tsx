import React, { useContext } from "react";
import { Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Notification from "components/Notification";
import { LoginValues } from "./Login.props";
import Regex from "utils/regex";
import AuthForm from "components/AuthForm";
import AuthPureForm from "components/AuthForm/authPureForm";
import ConfigContext from "utils/configContext";
import { StyledWrapper,StyledLabel,StyledInput} from "./PureForm.styled";


const Login: React.FC = () => {
	const navigate = useNavigate();
	const isPureMode = useContext(ConfigContext);

	const onFinish = ({phoneNumber, password}: LoginValues) => {
		if(phoneNumber === '09120000000' && password === '00000') {
			const encodedToken = window.btoa(process.env.REACT_APP_TOKEN as string);
			localStorage.setItem('token', JSON.stringify(encodedToken));
			Notification({
				type: "success",
				description: 'با موفقیت وارد شدید',
				key: "message"
			});
			navigate('/dashboard');
		} else {
			Notification({
				type: "success",
				description: 'با موفقیت وارد شدید',
				key: "message"
			});
		}
	};

	const renderAntdForm = () => (
		<AuthForm submitText="ثبت" onFinish={onFinish} title="ورود">
			<Form.Item
				label="شماره موبایل"
				name="phoneNumber"
				rules={[
					{ required: true, message: "ورود شماره موبایل الزامی است" },
					{
						pattern: Regex.mobileNumber,
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
			حساب کاربری ندارید؟ <NavLink to="/signup">ثبت نام کنید</NavLink>
		</AuthForm>
	);

	const renderPureForm = () => (
		<AuthPureForm submitText="ثبت" onFinish={onFinish} title="ورود">
			<StyledWrapper>
				<StyledLabel>شماره موبایل</StyledLabel>
				<StyledInput 
				name="phoneNumber" 
				type="text" 
				required
				placeholder="شماره موبایل"
				pattern={`${Regex.mobileNumber}`}
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
    حساب کاربری ندارید؟ <NavLink to="/signup">ثبت نام کنید</NavLink>
		</AuthPureForm>
	);

	return isPureMode ? renderAntdForm() : renderPureForm();
};

export default Login;
