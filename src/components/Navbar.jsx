import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../constants/constants';
import { removeItem } from '../helpers/persistance-storage';
import { logoutUser } from '../slice/auth';

function Navbar() {
  const { loggedIn, user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    navigate("/login");
    dispatch(logoutUser());
    removeItem("token");
  }

  return (
    <div className="border-bottom py-3 mb-4">
      <div className='container d-flex flex-column flex-md-row align-items-center pb-2'>
        <Link to={'/'}>
          <img src={logo} alt="logo" height={'40px'} />
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          {loggedIn ? (
            <>
              <p className='me-3 py-2 m-0 link-body-emphasis text-decoration-none'>{user.username}</p>
              <Link to={'/create-article'}>
                <button className='btn btn-outline-success mx-2'>Create +</button>
              </Link>
              <button className='btn btn-outline-danger' onClick={logoutHandler}>Logout</button>
            </>
          ) : (
            <>
              <Link className='me-3 py-2 link-body-emphasis text-decoration-none' to={'/login'}>
                Login
              </Link>
              <Link className="py-2 link-body-emphasis text-decoration-none" to={'/register'}>
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Navbar;