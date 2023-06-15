import React from 'react';
import { Outlet } from 'react-router-dom';

export default function UsersPage(): JSX.Element {
  return (
    <>
      <div>UsersPage</div>
      <Outlet />
    </>
  );
}
