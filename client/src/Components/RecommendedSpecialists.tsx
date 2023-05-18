import React from 'react'
import RecommendedSpecialistPerson from './RecommendedSpecialistPerson/RecommendedSpecialistPerson'
import classes from '../styles/RecommendedSpecialists.module.css'
import RecommendationButtons from './RecommendationButtons/RecommendationButtons';

function RecommendedSpecialists() {
    return (
        <div>
            <h2 className={classes.title}>Рекомендуемые специалисты</h2>
            <RecommendedSpecialistPerson
                src={'/recommendations/person.png'}
                name={'Адель Алибекова'}
                city={'Астана'}
                specialty={'Врач дерматолог'}
                experience={'7+ лет'}
            >
            </RecommendedSpecialistPerson>
            <RecommendedSpecialistPerson
                src={'/recommendations/person.png'}
                name={'Адель Алибекова'}
                city={'Астана'}
                specialty={'Врач дерматолог'}
                experience={'7+ лет'}
            >
            </RecommendedSpecialistPerson>
            <RecommendedSpecialistPerson
                src={'/recommendations/person.png'}
                name={'Адель Алибекова'}
                city={'Астана'}
                specialty={'Врач дерматолог'}
                experience={'7+ лет'}
            >
            </RecommendedSpecialistPerson>

        </div>
    );
}

export default RecommendedSpecialists;