import React from 'react';
import * as S from './style';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { useDebouncedCallback } from 'use-debounce';
import { LOGIN } from '../../gql/user';
import { toast } from 'react-toastify';
import { setToken } from '../../utils/token';

const LoginForm = () => {
  const [login] = useMutation(LOGIN);
  const debounce = useDebouncedCallback((fn) => fn(), 2000);
  const validation = Yup.object().shape({
    email: Yup.string()
      .email('El email no es valido!')
      .required('La contrasenha es obligatoria!'),
    password: Yup.string().required('Contrasenha es obligatoria!'),
  });

  const handleLoginOnSubmit = async (values) => {
    try {
      const loginUser = values;

      const { data } = await login({
        variables: {
          input: loginUser,
        },
      });

      const { token } = data.login;
      console.log(token);
      setToken(token);
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  return (
    <>
      <S.Title>Login Form</S.Title>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          console.log(values);
          debounce(() => {
            handleLoginOnSubmit(values);
          });
        }}
      >
        {({ handleChange, values, errors }) => {
          return (
            <Form>
              <S.Wrapper>
                <S.Input
                  type="text"
                  name="email"
                  placeholder="Ingrese su email"
                  value={values.email || ''}
                  onChange={handleChange}
                  error={errors.email}
                />

                {errors.email ? (
                  <S.ErrorMessage>{errors.email}</S.ErrorMessage>
                ) : null}
                <ErrorMessage name="email" />

                <S.Input
                  type="password"
                  name="password"
                  placeholder="Ingrese Contrasenha"
                  value={values.password || ''}
                  onChange={handleChange}
                  error={errors.password}
                />

                {errors.password ? (
                  <S.ErrorMessage>{errors.password}</S.ErrorMessage>
                ) : null}
                <ErrorMessage name="password" />

                <S.Button type="submit">Iniciar Sesion</S.Button>
              </S.Wrapper>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
