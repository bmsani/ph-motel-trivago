import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, restError] = useSendPasswordResetEmail(
    auth
  );

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  let errorElement

  if (error) {

    errorElement = <div>
        <p className='text-danger'>Error:{error?.message}</p>
    </div>

}



  const handleEmail = event => {
    setEmail(event.target.value);

  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  if(user){
    navigate(from, {replace:true});
  }

  const handleFromSubmit = event => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password)

  }
  const handleForgetPassword = async (event) => {
      await sendPasswordResetEmail(email)
      toast('email sent')
  }
  return (
    <div className='w-25 mx-auto'>
      <Form onSubmit={handleFromSubmit}>
      <h2 className='text-center py-5'>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>New to motel? <Link to='/register'>Please Register</Link></p>
        <p>Forget Password? <button 
        className='text-primary btn btn-link' to='/register' onClick={handleForgetPassword}>Reset Password</button> </p>
      </Form>
      {errorElement}

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>

  );
};

export default Login;