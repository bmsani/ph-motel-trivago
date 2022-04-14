import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/solid'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [inputError, setInputError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ]  = useCreateUserWithEmailAndPassword(auth)
      const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
        
    }

    const handlePassword = event =>{
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigate('/')
    }

    const handleFromSubmit = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setInputError("password didn't match");
            return
        }

        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='w-25 mx-auto'>
            <Form onSubmit={handleFromSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>{inputError}</p>
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button></Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;