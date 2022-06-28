import React, { useEffect } from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";
import { UserForm } from "../components/UserForm";


const SIGNIN_USER = gql`
    mutation signIn($email: String!, $password: String!) {
       signIn(email: $email, password: $password)
    }
`;


export const SignIn = (props) => {

  useEffect(() => {
    document.title = "Sign In — — Notedly";
  });

  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      // Сохраняем токен
      localStorage.setItem('token', data.signIn);
      // Обновляем локальный кэш
      client.writeData({ data: { isLoggedIn: true } });
      // Перенаправляем пользователя на домашнюю страницу
      props.history.push('/');
    }
  });


  return (
    <React.Fragment>
      <UserForm action={signIn} formType="signIn" />
      {loading && <p>Loading...</p>}
      {error && <p>Error signing in!</p>}
    </React.Fragment>
  );
};