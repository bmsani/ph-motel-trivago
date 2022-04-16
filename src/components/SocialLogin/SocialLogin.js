import React from 'react';
import GoogleIcon from '../../images/icons/search.png'
import GithubIcon from '../../images/icons/github.png'
import FacebookIcon from '../../images/icons/facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement

    if (error || gitError) {

        errorElement = <div>
            <p className='text-danger'>Error:{error?.message} {gitError?.message}</p>
        </div>

    }

    if (user || gitUser) {
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            </div>
            <div>
                {errorElement}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark w-75 d-block mx-auto my-2 text-start ps-4'>
                    <img className='me-2' style={{ width: '30px' }} src={GoogleIcon} alt="" />
                    Sign in with Google
                </button>
                <button
                    className='btn btn-dark w-75 d-block mx-auto my-2 text-start ps-4'>
                    <img className='me-2' style={{ width: '30px' }} src={FacebookIcon} alt="" />
                    Sign in with Facebook
                </button>
                <button
                    onClick={() => signInWithGithub()}

                    className='btn btn-dark w-75 d-block mx-auto my-2 text-start ps-4'>
                    <img className='me-2' style={{ width: '30px' }} src={GithubIcon} alt="" />
                    Sign in with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;