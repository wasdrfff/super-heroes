
import { FC, useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components/header"
import { THero } from "../../types/typeTHero"
import './style.scss'


export const Hero: FC = () => {
    const params: { id: string } = useParams()
    const [hero, setHero] = useState<THero>()
    
    const loadHero = useCallback(() => {
        fetch(`/api/characters/?api_key=${process.env.REACT_APP_SECRET_KEY
            }&format=json&filter=id:${params.id}`,
            {
                mode: 'no-cors'
            })
            .then(resp => resp.json())
            .then((json) => setHero(json.results[0]))
    },[params.id])

    useEffect(() => {
        loadHero()
    }, [loadHero])
    if (!hero) {
        return <h1>loading</h1>
    }
    return (
        <div className="hero">
            <Header />
            <div className='hero__content'>
                <img className='hero__image' src={hero.image.medium_url} alt='hero' />
                <div className='hero__info'>
                    <h1 className='hero__name'>{hero.name}</h1>

                    <table className='table-info'>
                        <tr className='table-info__row'>
                            <td className='table-info__label'>
                                Real Name:
                            </td>
                            <td className='table-info__value'>{hero.real_name}</td>
                        </tr>
                        <tr className='table-info__row'>
                            <td className='table-info__label'>
                                Publisher:
                            </td>
                            <td className='table-info__value'>
                                {hero.publisher.name}
                            </td>
                        </tr>
                        <tr className='table-info__row'>
                            <td className='table-info__label'>
                                Gender:
                            </td>
                            <td className='table-info__value'>
                                {hero.gender === 1 ? 'Male' : 'Female'}
                            </td>
                        </tr>
                        <tr className='table-info__row'>
                            <td className='table-info__label'>
                                Updated:
                            </td>
                            <td className='table-info__value'>
                                {hero.date_last_updated}
                            </td>
                        </tr>
                    </table>

                    <p className='hero__description'>{hero.deck}</p>
                </div>
            </div>
        </div>
    )
}