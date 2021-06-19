import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundGreyLight};
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 17px !important;
`;

export const Form = styled.form`
`;

export const Input = styled.input`
  border-style: none;
  padding: 13px 15px !important;
  background-color: #f9f9f9 !important;
  border: 1px solid ${(props) => props.theme.colors.borderGrey};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.fontGrey};
  }
`;
