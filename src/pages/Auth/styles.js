import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundGreyLight};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const Form = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  border: 1px solid ${(props) => props.theme.colors.borderGrey};
  height: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  margin-top: 50px;
  padding: 20px 50px;
  border-radius: 5px;
`;

export const Img = styled.img`
  max-width: 300px;
`;

export const ChangeForm = styled.div`
  margin-top: 10px;
  width: 400px;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  padding: 20px 50px;
  border: 1px solid ${(props) => props.theme.colors.borderGrey};
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const SpanBtn = styled.div`
  color: ${(props) => props.theme.colors.action};
  font-weight: bold;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ChangeContent = styled.div`
  display: flex;
`;
