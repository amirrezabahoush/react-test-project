import styled, { css } from "styled-components";
export const StyledWrapper = styled.div`
margin-bottom:24px;
display:block;
`;

export const StyledLabel = styled.label`
    height: 40px;
    line-height: 40px;
    position: relative;
    max-width: 100%;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    padding-right: 10px;
    &:before{
      content:"*";
      position:absolute;
      right: 0;
      top:0;
      bottom: 0;
      margin:auto 0;
      color: #ff4d4f;
      font-size: 14px;
      line-height:2;
    }
`;
export const StyledInput = styled.input`
    box-sizing: border-box;
    margin: 0;
    position: relative;
    display: inline-block;
    min-width: 0;
    color: rgba(0, 0, 0, 0.85);
    line-height: 1.5715;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    transition: all 0.3s;
    padding: 6.5px 11px;
    font-size: 16px;
`;