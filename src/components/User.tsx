import React from "react";

interface IUser {
  name: string;
  email: string;
}

interface IProps {
  user: IUser;
}

const User: React.FC<IProps> = ({ user, children }) => {
  return (
    <div>
      <strong>Nome: {user.name}</strong><br />
      <strong>E-mail: {user.email}</strong><br /><br />

      { children }
    </div>
  )
}

export default User;