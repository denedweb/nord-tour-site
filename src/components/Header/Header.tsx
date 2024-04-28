import { Navbar } from "../Navbar/Navbar";

import './Header.scss';

type Props = {
  handleOpenLogIn: () => void;
}

export const Header: React.FC<Props> = ({ handleOpenLogIn }) => {
  return (
    <div className="header">
      <div className="header__logo logo" />

      <div className="header__content">
        <Navbar />

        <div className="header__user-icon icon" onClick={handleOpenLogIn}/>
      </div>
    </div>
  );
};