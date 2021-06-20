import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 17px !important;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  border-style: none;
  padding: 13px 15px !important;
  background-color: #f9f9f9 !important;
  border: 1px solid ${(props) => props.theme.colors.borderGrey};
  border-radius: 5px;
  margin: 6px 0;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.fontGrey};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.action};
  color: ${(props) => props.theme.colors.fontLight};
  padding: 13px 15px !important;
  border-radius: 5px;
  border-style: none;
  &:hover {
    cursor: pointer;

    box-shadow: 0px 0px 5px 2px ${(props) => props.theme.colors.borderGrey};
  }
`;
