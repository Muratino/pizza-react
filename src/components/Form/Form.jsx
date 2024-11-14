import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailForgotten, setEmailForgotten] = useState(false);
    const [passwordForgotten, setpasswordForgotten] = useState(false);
    const [emailError, setEmailError] = useState('Gmail не может быть пустым');
    const [passwordError, setPasswordError] = useState('Password не может быть пустым');
    const [disabled, setDisabled] = useState(false);


    useEffect(() => {
        if(emailError || passwordError){
            setDisabled(false);
        } else {
            setDisabled(true)
        }

    },[emailError, passwordError])


    const blureForm = (e) => {
        switch (e.target.name) { // eslint-disable-line
            case 'email':
                setEmailForgotten(true);
                break
            case 'password':
                setpasswordForgotten(true);
                break;
        }
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!validateEmail.test(String(e.target.value).toLowerCase())) {
            setEmailError('Gmail некорректен');
        } else {
            setEmailError('');
        }
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setPasswordError('Password некорректен');
            if (!e.target.value) {
                setPasswordError('Password не может быть пустым');
            }
        } else {
            setPasswordError('');
        }
    }

    return (
        <div className="form">
            <form className='form__elem'>
                <h2>Введите свои данные для заказа</h2>
                {(emailForgotten && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                <input
                    onBlur={blureForm}
                    onChange={onChangeEmail}
                    value={email} type="text" name='email' placeholder='Gmail' />
                {(passwordForgotten && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                <input
                    onBlur={blureForm}
                    onChange={onChangePassword}
                    value={password} type='password' name='password' placeholder='password' />
                <button 
                    disabled={!disabled}
                    type='submit'>Отправить</button>
            </form>
        </div>
    );
}

export default Form;