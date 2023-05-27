import React from 'react';
import Div from '@/Components/UI/Div/Div'
import cl from '../styles/Admin.module.css'

function Admin() {
    return (
        <div className={cl.admin}>
            <div className={cl.container}>
                <Div className={cl.title}>Приветствуем вас специалист</Div>
                <Div className={cl.subTitle}>Пожалуйста, заполните анкету</Div>
                <form action="">
                    <label>
                        <h2 className={cl.specText}>Специализация</h2>
                        <input className={cl.specInput} type="text"/>
                    </label>
                    <label>
                        <h2 className={cl.experienceText}>Опыт</h2>
                        <select className={cl.experience}>
                            <option value="">Меньше года</option>
                            <option value="">1 год</option>
                            <option value="">2 года</option>
                            <option value="">3 года</option>
                            <option value="">4 года</option>
                            <option value="">5 лет</option>
                            <option value="">5-10 лет</option>
                            <option value="">Больше 10 лет</option>
                        </select>
                    </label>
                </form>

            </div>
        </div>
    );
}

export default Admin;
