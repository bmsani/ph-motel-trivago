import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/solid'
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [name, setName] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [inputError, setInputError] = useState('');
    const [agree, setAgree] = useState(false)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ]  = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true})
      const [updateProfile, updating, profileError] = useUpdateProfile(auth);
      const navigate = useNavigate();

    const handleName = event => {
        setName(event.target.value);
        
    }
    const handleEmail = event => {
        setEmail(event.target.value);
        
    }

    const handlePassword = event =>{
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value)
    }
    

    const handleFromSubmit = async (event) => {
        console.log(event.target);
        event.preventDefault();
        if(password !== confirmPassword){
            setInputError("password didn't match");
            return
        }

        await signInWithEmailAndPassword(email, password)
        await updateProfile({ displayName :name});
        toast('Updated profile');
        navigate('/')
        
        
    }

    return (
        <div className='w-25 mx-auto'>
            <Form onSubmit={handleFromSubmit}>
                <Form.Group className="mb-3" controlId="fromBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree? 'text-primary fw-bold': 'text-muted'}`} htmlFor="terms">Accept Genius Car Terms and Condition</label>
                <p>{inputError}</p>
                <Button disabled={!agree} variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account? <Link to='/login'>Please Login</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Register;