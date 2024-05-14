import { useEffect, useState } from "react";
import { logo } from "../constants/constants";
import { Input } from "../ui";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";
import { Validation } from "./";


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      dispatch(signUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  }

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn])
  

  return (
    <main className="form-signin w-25 m-auto text-center">
      <form>
        <img className="mb-2" src={logo} alt="" width="63" />
        <h1 className="h3 mb-3 fw-normal">Please register</h1>
        <Validation />

        <Input key={1} state={name} setState={setName} label={'Username'} id={'floatingInput'} />
        <Input key={2} state={email} setState={setEmail} label={'Email address'} id={'floatingInput'} type={'email'} />
        <Input key={3} state={password} setState={setPassword} label={'Password'} id={'floatingPassword'} type={'password'} />
      
        <button className="btn btn-primary w-100 py-2 mt-2" type="submit" disabled={isLoading} onClick={registerHandler}>
          {isLoading ? 'Loading...' : 'Register'}
        </button>
      </form>
    </main>
  )
}

export default Register;