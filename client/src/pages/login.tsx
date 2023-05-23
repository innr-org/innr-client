import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import styles from '../styles/Login.module.css';
import Image from 'next/image';
import green from '../../public/assets/images/green.svg';
import lines from '../../public/assets/images/lines.svg';
import facebook from '../../public/assets/images/fb.svg';
import google from '../../public/assets/images/gg.svg';
import Modal from "@/Components/UI/modal/Modal";
import Button from "@/Components/UI/button/Button";


function Login() {
    const phoneNumInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    const [isFailLogin, setIsFailLogin] = useState(false)
    const querystring = require('qs');
    const router = useRouter()

    // RegEx for validation phone number with or without spaces, dots, etc
    // This regular expression will match phone numbers entered with delimiters (spaces, dots, brackets, etc.)
    const phoneNumberRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/

    // /^\+?[1-9][0-9]{7,14}$/  -> The basic international phone number validation

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    async function login(e: any){
        e.preventDefault()

        const details = {
            'phone': '+7 776 521 3035',
            'password': 'Sdfgh67@',
        };
        // const details = {
        //     'phone': phoneNumInput.current?.value,
        //     'password': passwordInput.current?.value,
        // };
        try {
            const formBody: any[] = [];
            for (const property in details) {
                const encodedKey = encodeURIComponent(property);
                const encodedValue = encodeURIComponent(details[property as keyof typeof details]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            const formBodyString = formBody.join("&");
            console.log(formBodyString);
            

            const response = await fetch('http://164.92.164.196:8080/api/auth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBodyString
            })
            console.log(response)

            if (response.status===200) {
                console.log("Authorized")
                router.push('/mainscan')
            }
            else if (response.status===401) {
                console.log("LOGIN ERROR, 401 Unauthorized")
                setIsFailLogin(true)
            }
        }
        catch (err) {
            console.error(err)
        }

    }
    

    function clearForm()
    {
        if (phoneNumInput.current !== null && passwordInput.current !== null)
        {
            phoneNumInput.current.value=""
            passwordInput.current.value=""
            // setIsFailLogin(false)
        }
    }

    function phoneNumberValidation(event: ChangeEvent<HTMLInputElement>)
    {
        if (phoneNumInput.current !== null)
        {   
            if (phoneNumberRegex.test(phoneNumInput.current.value))
            {
                // console.log('valid')
                setIsPhoneNumberValid(true)
            }
            else
            {
                // console.log('invalid')
                setIsPhoneNumberValid(false)
            }
        }
    }

    function passwordValidation(event: ChangeEvent<HTMLInputElement>)
    {
        if (passwordInput.current !== null)
        {   
            if (passwordRegex.test(passwordInput.current.value))
            {
                // console.log('valid')
                setIsPasswordValid(true)
            }
            else
            {
                // console.log('invalid')
                setIsPasswordValid(false)
            }
        }
    }

    return (
        <div className={styles.container}>
            <Modal visible={isFailLogin} setVisible={setIsFailLogin} className={styles.failLoginModal}>
                <p>Ошибка при авторизации.</p>
                <p>Неправильные данные. Попробуйте еще раз.</p>
                <Button onClick={clearForm} className={styles.closeModal}>Закрыть</Button>
            </Modal>
            <Image 
                className={styles.green}
                src={green} 
                alt='green' 
            />
            <div className={styles.welcome__text}>
                <Image 
                    className={styles.lines}
                    src={lines} 
                    alt='lines' 
                />
                <h1 className={styles.welcome__h1}>Добро пожаловать!</h1>
            </div>
            <form className={styles.login__form} onSubmit={(e) => login(e)}>
                <input
                    ref={phoneNumInput}
                    type="text"
                    className={styles.email}
                    id='email'
                    placeholder='Ваш номер телефона'
                    required
                    onChange={() => phoneNumberValidation()}
                />
                { isPhoneNumberValid 
                    ? 
                    <p style={{color: '#C8FA60', fontSize: '16px', fontWeight: 700}}>Valid Phone Number</p>
                    :
                    <p style={{color: '#BF4342', fontSize: '16px', fontWeight: 700}}>Invalid Phone Number</p>
                }
                <input
                    ref={passwordInput}
                    type="password"
                    className={styles.password}
                    id='password'
                    placeholder='Пароль'
                    required
                    onChange={() => passwordValidation()}
                />
                { isPasswordValid
                    ?
                    <p style={{color: '#C8FA60', fontSize: '16px', fontWeight: 700}}>Valid Password</p>
                    :
                    <p style={{color: '#BF4342', fontSize: '16px', fontWeight: 700}}>Invalid Password</p>
                }
                {/* <button className={styles.enter__btn}>Войти в систему</button> */}
                <div className={styles.forget__password}>
                    <a href='#' className={styles.forget__password__a}>Забыли пароль?</a>
                </div>
                <input onClick={(e) => login(e)} type="submit" className={styles.enter__btn} name="submit" id="submit"  value="Войти в систему"/>
            </form>
            <div className={styles.create__account}>
                <p className={styles.create__account__p}>Еще нет аккаунта?</p>
                <a href='#' className={styles.create__account__a}>Зарегистрироваться</a>
            </div>
            <div className={styles.login__via}>
                <p className={styles.login__via__a}>или войти через</p>
            </div>
            <div className={styles.socials}>
                <a href='#' className={styles.facebook}>
                    <Image 
                        className={styles.fb__img}
                        src={facebook} 
                        alt='facebook' 
                    />
                    <p className={styles.fb__text}>Facebook</p>
                </a>
                <a href='#' className={styles.google}>
                    <Image 
                        className={styles.fb__google}
                        src={google} 
                        alt='google' 
                    />
                    <p className={styles.gg__text}>Google</p>
                </a>
            </div>
        </div>
    );
};

export default Login;
