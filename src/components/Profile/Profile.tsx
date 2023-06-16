import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

function Profile():JSX.Element {
  const user = useContext(AuthContext); // получили юзера в нутри профайла
  // хук принимает контекст, а использует данные из контекста
  return (
    <div>
      <div className="profile">
        <h1>Profile</h1>
      {/* используем имэйл, получанный у юзера */}
        <p>Email: {user?.email}</p>
        <span>Sign Out</span>
      </div>
    </div>
  );
}

export default Profile;
