import styled, { css } from "styled-components";
import { Card } from "antd";

const cardStyles = css`
	width: 320px;
	border-radius:5px;
  box-shadow: 0px 4px 12px -5px #000000;
`;

export const StyledCard = styled(Card)`
	${cardStyles}
`;

export const StyledPureCard = styled.div`
	${cardStyles}
  box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    background: #fff;
  `;
export const StyledCardHead = styled.div`
      min-height: 48px;
    margin-bottom: -1px;
    padding: 0 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    background: transparent;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
  `;

export const StyledCardBody = styled.div`
padding:24px;
`;
export const StyledTitle = styled.h1`
  display:flex;
  justify-content:center;
  align-items:center ;
  text-align:center;
  font-size: 20px;
  font-weight:600;
  line-height:1.4;
  height:61px;
  color:rgba(0, 0, 0, 0.85);
`;

export const StyledButtonWrapper = styled.div`
display: block;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const StyledButton = styled.button`
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    color: #fff;
    border-color: #1890ff;
    background: #1890ff;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    height: 40px;
    padding: 6.4px 15px;
    font-size: 16px;
    border-radius: 2px;
`;