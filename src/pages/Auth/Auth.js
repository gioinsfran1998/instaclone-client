import React, { useState } from 'react';
import instaclone from '../../assets/images/instaclone.png';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import * as S from './styles';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <S.Wrapper>
      <S.Img src={instaclone} />
      <S.Form>
        {showLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </S.Form>
      <S.ChangeForm>
        {showLogin ? (
          <S.ChangeContent>
            <p>No tienes cuenta?</p>
            <S.SpanBtn onClick={() => setShowLogin(!showLogin)}>
              Registrate
            </S.SpanBtn>
          </S.ChangeContent>
        ) : (
          <S.ChangeContent>
            <p>Ingresa con tu cuenta!</p>
            <S.SpanBtn onClick={() => setShowLogin(!showLogin)}>
              Iniciar Sesion
            </S.SpanBtn>
          </S.ChangeContent>
        )}
      </S.ChangeForm>
    </S.Wrapper>
  );
};

export default Auth;
