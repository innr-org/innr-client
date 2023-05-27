import React, {ChangeEvent, LegacyRef, useEffect, useRef, useState} from 'react';
import {useRouter} from "next/router";
import styles from '../styles/Login.module.css';
import Image from 'next/image';
import green from '../../public/assets/images/green.svg';
import lines from '../../public/assets/images/lines.svg';
import facebook from '../../public/assets/images/fb.svg';
import google from '../../public/assets/images/gg.svg';

function Login() {
    const router = useRouter()
    const phoneNumInput = useRef(null);
    const passwordInput = useRef(null);
    const [invalidInfo, setInvalidInfo] = useState<string>("")
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const [isAuth, setIsAuth] = useState<boolean>(false)

    async function login(e: any){
        e.preventDefault()
        if(phoneNumInput.current !== null && passwordInput.current !== null) {
            if(phoneNumInput.current.value === '' && passwordInput.current.value === ''){
                console.log("FORM IS EMPTY")
                setInvalidInfo("Form is empty. Please write phone number and password!")
                setIsAuth(false)
            }

            else{
                const details = {
                    'phone': phoneNumInput.current.value,
                    'password': passwordInput.current.value,
                };


                try {
                    const formBody: any[] = [];
                    for (const property in details) {
                        const encodedKey = encodeURIComponent(property);
                        const encodedValue = encodeURIComponent(details[property as keyof typeof details]);
                        formBody.push(encodedKey + "=" + encodedValue);
                    }
                    const formBodyString = formBody.join("&");

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
                        setIsAuth(true)
                        router.push('/mainscan')
                    }
                    else if (response.status===401) {
                        console.log("LOGIN ERROR, 401 Unauthorized")
                        clearForm()
                        setIsAuth(false)
                    }


                }
                catch (err) {
                    console.error(err)
                }

                setIsClicked(true)
            }
        }
        else{
            console.log("DEV ERROR: REF IS UNDEFINED")
        }
    }


    function clearForm()
    {
        if (phoneNumInput.current != null && passwordInput.current != null)
        {
            phoneNumInput.current.value=""
            passwordInput.current.value=""
        }
    }

    useEffect(() => {
        if(isClicked===true){
            if(isAuth===false){
                setInvalidInfo("Invalid password or username doesn't exist")
            }
        }
    }, [isAuth, isClicked])

    return (
        <div className={styles.container}>
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
                    onChange={() => setInvalidInfo("")}
                />
                <input
                    ref={passwordInput}
                    type="password"
                    className={styles.password}
                    id='password'
                    placeholder='Пароль'
                    required
                    onChange={() => setInvalidInfo("")}
                />
                <p style={{color: '#BF4342', fontSize: '14px', fontWeight: 700}}>{invalidInfo}</p>
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
