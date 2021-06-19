import React from 'react';
import * as S from './style';

const RegisterForm = ({ setShowLogin }) => {
  console.log(setShowLogin);
  return (
    <>
      <S.Title>Register Form</S.Title>
      <S.Form>
        <S.Input type="text" placeholder="Nombre y apellido" name="name" />
        <S.Input type="text" placeholder="Nombre de usuario" name="username" />
        <S.Input type="text" placeholder="Correo Electronico" name="email" />
        <S.Input type="password" placeholder="Contrasenha" name="password" />
        <S.Input
          type="password"
          placeholder="Repetir Contrasenha"
          name="repeatPassword"
        />
      </S.Form>
    </>
  );
};

export default RegisterForm;
