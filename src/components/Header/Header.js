import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut} from 'firebase/auth'

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav className='navigation'>
                <CustomLink to='/'> Home</CustomLink>
                <CustomLink to='/houses'> Houses</CustomLink>
                {
                    user ?
                    <button onClick={() => signOut(auth)} className='btn btn-info'>Sign out</button>
                    :
                    <CustomLink to='/login'> Login</CustomLink>
                }
            </nav>
        </div>
    );
};

export default Header;