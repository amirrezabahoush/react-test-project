import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
	width: clamp(50%, 70%, 75%);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius:5px;
  box-shadow: 0px 4px 12px -5px #000;
`;