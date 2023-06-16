/* eslint-disable import/no-extraneous-dependencies */
// src/components/Register
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../api/firebase';

function Register(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');
  // функция отвечает за проверку введённых данных
  const validatePassword = (): boolean => {
    let isValid = true;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setError('Passwords does not match');
      }
    }
    return isValid;
  };
  // кидаем запрос на создание нового пользователя в случае если пароль проходит
  // получаем ответ и распечатываем "ответ" либо "ошибку"
  const register = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setError('');
    if (validatePassword()) {
      // Создаем нового пользователя с использованием полученных email и password
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => setError(err.message));
    }
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <div className="auth">
        <h1>Register</h1>
        {error && <div>{error}</div>}
        <form onSubmit={register} name="registration_form">
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            value={confirmPassword}
            required
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <span>
          Already have an account?
        </span>
      </div>
    </div>
  );
}

export default Register;
