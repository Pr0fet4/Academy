import user from '../assets/user.svg';

import '../styles/user.scss';

export function User() {
  return(
    <div className="user-icon">
    <img src={user} alt="usuário" />
  </div>
  );
}