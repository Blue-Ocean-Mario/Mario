
import background from "../assets/images/basketballbg.png";
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { TextInput, Button, PasswordInput} from '@mantine/core';
import { useForm } from '@mantine/form';


const serverURL = 'http://localhost:3001'

function LoginView({ login, userId }) {
  const divRef = useRef(null);

  useEffect(() => {
    //get request /auth path
    axios
      .get(serverURL + '/auth')
      .then((res) => {
        if (res.data.id !== null) {
          login(res.data.id);
        }
      })
    // check from server if the user already signed in?
    // /LOGIN path > if wrong sign in, say something > 401
    // /

    // if not do below vv

    // eslint-disable-next-line no-undef
    window.google.accounts.id.initialize({
      client_id: '143714965385-rruq4eamet32hpn61alm2913qgbfed0o.apps.googleusercontent.com',
      callback: handleCredentialResponse,
      auto_select: true,
    });
    // eslint-disable-next-line no-undef
    window.google.accounts.id.renderButton(document.getElementById("google-button"), {
      size: 'medium',
      type: 'standard',
      shape: 'circle',
      text: 'continue_with'
    });
    // else set user id to returned id
  }, [])

  const handleCredentialResponse = (response) => {
    console.log('success');
    login('blblba');
  }

  // Activates when user wants to log in. Alerts if log in credentials are not right
  const handleSubmit = (values) => {
    console.log(values);
  }

  // creates a form element using Mantine
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <div style={{backgroundColor:'#16141c'}}>
      <div
        id="LoginView"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
      >
        <div id="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: "2"
          }}
        >
          <div id="google-button" ref={divRef}></div>
          <span style={{margin: '10px'}}>OR</span>
          <form
            id='myform'
            style={{
              width: "100%",
              textAlign: "center"
            }}
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
          >
            <TextInput
              placeholder="your@email.com"
              styles={(theme) => ({
                root: {
                  width: '100%'
                }
              })}
              {...form.getInputProps('email')}
            />
            <PasswordInput
              placeholder="password"
              styles={(theme) => ({
                root: {
                  marginTop: '20px',
                  width: '100%'
                }
              })}
              {...form.getInputProps('password')}
            />
            <Button
              type='submit'
              styles={(theme) => ({
                root: {
                  marginTop: '20px',
                  marginBottom: '20px',
                  backgroundColor: '#0d5f65',
              }})}
            >
              Sign In
            </Button>
          </form>
          <small
            style={{color: 'white'}}
          >
            Don't have an account?
            <small
             onClick={() => console.log('register')}
             style={{textDecoration: 'underline', cursor: 'pointer'}}
            >
              Register here
            </small>
          </small>
        <img
          alt="ball"
          src={background}
          style={{
            opacity:'0.5',
            position: 'absolute',
            top: '-40%',
            zIndex: '-1'
          }}
        />
        </div>
      </div>
    </div>
  );
}

export default LoginView;
