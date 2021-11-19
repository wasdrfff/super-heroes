import { Link } from 'react-router-dom'
import { THero } from '../../types/typeTHero'
import './style.scss'
type TProps = {
    hero: THero;
}
export const HeroCard = (props: TProps) => {
    return (


        <div className='hero-card'>
            <Link to={`/heroes/${props.hero.id}`} >
                <img className='hero-card__image' src={props.hero.image.medium_url} alt='Hero' />
            </Link>
            <div>
                <div className='hero-card__info'>
                    <Link to={`/heroes/${props.hero.id}`} className='hero-card__name'>
                        <span className='hero-card__name'>{props.hero.name}</span>
                    </Link>
                    <span className='hero-card__issue'>{props.hero.count_of_issue_appearances} issues</span>
                </div>
                <span className='hero-card__publisher'>{props.hero.publisher.name}</span>
            </div>
        </div>


    )
}