import React from "react";
import { 
	StyledPureCard, 
	StyledCardHead, 
	StyledCardBody, 
	StyledTitle, 
	StyledButtonWrapper, 
	StyledButton
} from "./AuthForm.styled";

const AuthPureForm: React.FC<{
	title: string;
	onFinish(values: any): void;
	submitText: string;
}> = (props) => {
	return (
		<StyledPureCard>
			<StyledCardHead>
				<StyledTitle>{props.title}</StyledTitle>
			</StyledCardHead>
      <StyledCardBody>
				<form
					name="basic"
					autoComplete="off"
					className="form-wrapper"
					onSubmit={props.onFinish}
				>
					{props.children}
					<div className="text-center">
						<StyledButtonWrapper className="mt-2 mx-auto">
							<StyledButton data-testid='login-pure-btn' type="submit" className="w-100">
								{props.submitText}
							</StyledButton>
						</StyledButtonWrapper>
					</div>
				</form>
			</StyledCardBody>
		</StyledPureCard>
	);
};

export default AuthPureForm;
