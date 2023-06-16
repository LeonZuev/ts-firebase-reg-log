import React, { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { signOut } from 'firebase/auth';
import AuthContext from '../../contexts/AuthContext';
import UserContext from '../../contexts/UserContext';
import { auth } from '../../api/firebase';

function Profile():JSX.Element {
  const user = useContext(AuthContext); // используем контекст - получили юзера в нутри профайла
  // хук принимает контекст, а использует данные из контекста
  const phone = useContext(UserContext);
  return (
    <div>
      <div className="profile">
        <h1>Profile</h1>
      {/* используем имэйл, получанный у юзера */}
        <p>Email: {user?.email}</p>
        <p>Phone: {phone}</p>
        <button type="button" onClick={() => signOut(auth)}>Sign Out</button>
      </div>
    </div>
  );
}

export default Profile;
