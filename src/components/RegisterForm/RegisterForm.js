import React from 'react';
import * as S from './style';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDebouncedCallback } from 'use-debounce';

const RegisterForm = ({ setShowLogin }) => {
  const debounce = useDebouncedCallback((fn) => fn(), 2000);

  const validation = Yup.object().shape({
    name: Yup.string().required('Nombre es obligatorio!'),
    username: Yup.string()
      .matches(
        /^[a-zA-Z0-9-]*$/,
        'El nombre de usuario no debe contener espacio'
      )
      .required('Nombre de Usuario es obligatorio!'),
    email: Yup.string()
      .email('El email no es valido')
      .required('La contrasenha es obligatoria!'),
    password: Yup.string()
      .oneOf([Yup.ref('repeatPassword')], 'Las contrasenhas no son iguales')
      .required('Contrasenha es obligatoria!'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('repeatPassword')], 'Las contrasenhas no son iguales')
      .required('Contrasenha es obligatoria!'),
  });

  return (
    <>
      <S.Title>Registrate para ver fotos y videos de tus amigos.</S.Title>
      <Formik
        initialValues={{
          name: '',
          username: '',
          email: '',
          password: '',
          repeatPassword: '',
        }}
        validationSchema={validation}
        onSubmit={(values, actions, isSubmitting) => {
          debounce(() => {
            console.log(values);
            actions.resetForm({});
            actions.setSubmitting(false);
          });
        }}
      >
        {({
          values,
          errors,
          handleSubmit,
          handleChange,
          handleReset,
          handleBlur,
          touched,
          isSubmitting,
        }) => {
          console.log(errors);
          return (
            <Form>
              <S.Wrapper>
                <S.Input
                  type="text"
                  placeholder="Nombre y apellido"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name && touched.name}
                />

                {errors.name ? <div>{errors.name}</div> : null}
                <ErrorMessage name="name" />

                <S.Input
                  type="text"
                  placeholder="Nombre de usuario"
                  name="username"
                  onChange={handleChange}
                  value={values.username}
                  error={errors.username}
                />
                <S.Input
                  type="text"
                  placeholder="Correo Electronico"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  error={errors.email}
                />
                <S.Input
                  type="password"
                  placeholder="Contrasenha"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  error={errors.password}
                />
                <S.Input
                  type="password"
                  placeholder="Repetir Contrasenha"
                  name="repeatPassword"
                  onChange={handleChange}
                  value={values.repeatPassword}
                  error={errors.repeatPassword}
                />
                <S.Button type="submit">Registrarse</S.Button>
              </S.Wrapper>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterForm;
