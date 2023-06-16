/* eslint-disable import/no-extraneous-dependencies */
import { User } from 'firebase/auth'; // импортировали тип юзера из фаербэйс
import { createContext } from 'react';

const AuthContext = createContext<User | null>(null); // задали тип и начальное состояние контекста

export default AuthContext;
