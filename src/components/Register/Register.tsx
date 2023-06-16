// src/components/Register
import React, { useState } from 'react';

function Register(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');

  const validatePassword = ():boolean => {
    let isValid = true;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setError('Passwords does not match');
      }
    }
    return isValid;
  };

  return (
    <div>
      <div className="auth">
        <h1>Register</h1>
        {error && <div>{error}</div>}
        <form name="registration_form">
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
