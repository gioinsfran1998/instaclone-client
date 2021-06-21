import React from 'react';
import * as S from './style';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../gql/user';

const RegisterForm = (props) => {
  const debounce = useDebouncedCallback((fn) => fn(), 3000);
  const { setShowLogin } = props;
  const [register] = useMutation(REGISTER_USER);

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

  const handleOnSubmit = async (values, actions, isSubmitting) => {
    try {
      console.log(values, 'valueees');
      const newUser = values;
      delete newUser.repeatPassword;

      const { data } = await register({
        variables: {
          input: newUser,
        },
      });
      setShowLogin(true);
      console.log(data);
    } catch (error) {
      console.log('Llego aqui ==========>>');
      toast.error(error.message);
      console.log(error, 'error');
    }
  };

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
        onSubmit={async (values, actions, isSubmitting, errors) => {
          debounce(() => {
            handleOnSubmit(values, actions, isSubmitting);
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
                  value={values.username || ''}
                  error={errors.username}
                />
                <S.Input
                  type="text"
                  placeholder="Correo Electronico"
                  name="email"
                  onChange={handleChange}
                  value={values.email || ''}
                  error={errors.email}
                />
                <S.Input
                  type="password"
                  placeholder="Contrasenha"
                  name="password"
                  onChange={handleChange}
                  value={values.password || ''}
                  error={errors.password}
                />
                <S.Input
                  type="password"
                  placeholder="Repetir Contrasenha"
                  name="repeatPassword"
                  onChange={handleChange}
                  value={values.repeatPassword || ''}
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
