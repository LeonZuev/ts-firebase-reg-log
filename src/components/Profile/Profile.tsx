import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import UserContext from '../../contexts/UserContext';

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
        <span>Sign Out</span>
      </div>
    </div>
  );
}

export default Profile;
