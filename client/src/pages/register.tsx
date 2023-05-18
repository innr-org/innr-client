import React, {useState} from 'react';
import styles from '@/styles/Register.module.css'

function register() {
    const [isAccepted, setIsAccepted] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.innr__text}>
                <h1 className={styles.innr__h1}>Преобразуйте <br /> кожу c Innr </h1>
                <p className={styles.innr__p}>Создайте аккаунт чтобы начать</p>
            </div>
            <form action='#' className={styles.register__form}>
                <input type="text" className={styles.form__name} placeholder='ФИО' />
                <input type="email" className={styles.form__email} id='email' placeholder='Ваш e-mail'/>
                <input type="password" className={styles.form__password} id='password' placeholder='Пароль' required />
                <input type="password" className={styles.form__password} id='password' placeholder='Повторите пароль' required />
                <div className={styles.agreement}>
                    {/* <input className={styles.checkbox} type="checkbox" id="checkbox" name="checkbox" value="" /> */}
                    
                    <label className={styles.accept}>
                     <input checked={isAccepted} onChange={() => setIsAccepted(prevState => !prevState)} className={styles.checkbox} type="checkbox" name="accept" />
                        <p className={styles.agreement__text}>
                            Я принимаю правила <a href='#' className={styles.underline}>пользовательского соглашения</a> и условия <a href='#' className={styles.underline}>политики конфиденциальности</a>
                        </p>
                    </label>
                </div>
                <input disabled={!isAccepted} type="submit" className={styles.create__account__btn + " " + (isAccepted ? styles.active : "")} name="submit" id="submit" value="Создать аккаунт"/>
            </form>
            <p className={styles.create__account}>
                У вас уже есть аккаунт? <a href="#" className={styles.login}>Войти</a>
            </p>
        </div>
    );
}

export default register;