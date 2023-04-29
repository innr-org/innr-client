import React from 'react';
import styles from '../styles/Login.module.css';
import Image from 'next/image';
import green from '../../public/assets/images/green.svg';
import lines from '../../public/assets/images/lines.svg';
import facebook from '../../public/assets/images/fb.svg';
import google from '../../public/assets/images/gg.svg';


function Login() {
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
            <form className={styles.login__form}>
                <input type="email" className={styles.email} id='email' placeholder='Ваш e-mail' required/>
                <input type="password" className={styles.password} id='password' placeholder='Пароль' required />
                {/* <button className={styles.enter__btn}>Войти в систему</button> */}
                <div className={styles.forget__password}>
                    <a href='#' className={styles.forget__password__a}>Забыли пароль?</a>
                </div>
                <input type="submit" className={styles.enter__btn} name="submit" id="submit"  value="Войти в систему"/>
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
