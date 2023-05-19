import React, {useEffect, useRef, useState} from 'react';
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
import {useFetching} from "@/hooks/useFetching";
import UserService from "@/API/UserService";


function Login() {
    const router = useRouter()
    const phoneNumInput = useRef(null)
    const passwordInput = useRef(null)
    const [isFailLogin, setIsFailLogin] = useState(false)
    const [fetchLogin, isAuthorizing, error] = useFetching(async () => {
        const loginResponse = await UserService.login({
            'phone': '5555',
            'password': 'abc123',
        })

        if(loginResponse.status===200){
            console.log("Authorized")
            router.push("/mainscan")
        }
        else{
            console.log("Not Authorized")
        }
    })

    useEffect(() => {
        console.log(error)
    }, [error])

    async function login(e){
        e.preventDefault()

        await fetchLogin()
    }

    function clearForm(){
        phoneNumInput.current.value=""
        passwordInput.current.value=""
        setIsFailLogin(false)
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
                <input ref={phoneNumInput} type="text" className={styles.email} id='email' placeholder='Ваш номер телефона' required/>
                <input ref={passwordInput} type="password" className={styles.password} id='password' placeholder='Пароль' required />
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
