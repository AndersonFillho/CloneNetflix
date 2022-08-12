import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='topo--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='NetFlix'></img>
                </a>
            </div>
            <div className='topo--usu'>
                <a href='/'>
                    <img src='https://i.pinimg.com/1200x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.jpg' alt='Usuário'></img>
                </a>
            </div>
        </header>
    );
}