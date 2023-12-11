import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="bg-success">
        <div className="navbar">
          <div className="navbarSectionMain">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/favorites">
              Favoritos
            </Link>
          </div>
        </div>
      </header>
      <h1 className="text-success">Natural Pics</h1>
    </>
  );
};
export default Header;
