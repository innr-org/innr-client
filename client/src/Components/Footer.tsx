import React from 'react'
import classes from '../styles/Footer.module.css'

function Footer() {
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>
                <div className={classes.circle}></div>

                <a href='#' className={classes.footerLogoLink}>Innr</a>

                <ul className={classes.footerUsefulLinks}>
                    Полезные ссылки
                    <li className={classes.footerUsefulLink}><a href="#">О нас</a></li>
                    <li className={classes.footerUsefulLink}><a href="#">Innr для партнеров</a></li>
                    <li className={classes.footerUsefulLink}><a href="#">Часто задаваемые вопросы</a></li>
                    <li className={classes.footerUsefulLink}><a href="#">Связаться с нами</a></li>
                </ul>

                <h3 className={classes.footerSocialLinks}>Мы в социальных сетях</h3>
                <div className={classes.footerSocialLinks}>
                    <a href="#"><img className={classes.footerSocialIcon} src="../footer/insta.svg" alt="insta-icon" /></a>
                    <a href="#"><img className={classes.footerSocialIcon} src="../footer/tiktok.svg" alt="tiktok-icon" /></a>
                </div>

                <a href="#" className={classes.footerMailLink}>Innr, innr@team.com</a>
            </footer>
        </div>
    );
}

export default Footer;