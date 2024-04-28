import './Modal.scss';

type Props = {
  handleCloseLogIn: () => void;
}

export const Modal: React.FC<Props> = ({ handleCloseLogIn }) => {
  const handleModalClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
};
  
  return (
    <div className="modal-bg" onClick={handleCloseLogIn}>
      <div className="modal" onClick={handleModalClick}>
        <h2 className="modal__title">Sign up to Nord</h2>

        <form
          action=""
          method="get"
          className="modal__form"
        >
          <div className="modal__block modal__block--name">
            <label
              className="modal__text"
              htmlFor="full name"
            >
              Full name
            </label>

            <input
              type="text"
              className="modal__input"
              id="full name"
              name="name"
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="modal__block modal__block--email">
            <label
              className="modal__text"
              htmlFor="email"
            >
              Email adress
            </label>

            <input
              type="email"
              className="modal__input"
              id="email"
              name="email"
              placeholder="Enter email adress"
              required
            />
          </div>

          <div className="modal__block modal__block--phone">
            <label
              className="modal__text"
              htmlFor="phone"
            >
              Phone
            </label>

            <input
              type="tel"
              className="modal__input"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="modal__block modal__block--password">
            <label
              className="modal__text"
              htmlFor="password"
            >
              Password
            </label>

            <input
              type='password'
              className="modal__input"
              id="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="modal__button">
            Continue
          </button>
        </form>

        <div className="modal__or-block">
          <div className="modal__center-line" />

          <p className="modal__or">OR</p>

          <div className="modal__center-line" />
        </div>

        <form action="" method="post" className="google">
          <button
            type="submit"
            className="modal__button modal__button--google"
          >
            Continue with Google
          </button>
        </form>

        <div className="modal__sign-in">
          <p className="modal__text">Already have an account?</p>
          <div className="modal__text modal__link">Sign in</div>
        </div>
      </div>
    </div>
  );
};