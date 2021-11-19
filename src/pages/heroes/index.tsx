import { useEffect, useState } from 'react'
import { Header } from '../../components/header/index'
import { HeroCard } from '../../components/heroCard/index'
import { THero } from '../../types/typeTHero'
import './style.scss'



export const Heroes = () => {

    const [heroesList, setHeroesList] = useState<THero[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const loadHeroesList = () => {
        setIsLoading(true)
        fetch(`/api/characters/?api_key=${process.env.REACT_APP_SECRET_KEY
            }&format=json&publish_month=1&publish_year=2012&limit=${6}&offset=${heroesList.length
            }`, {
            mode: 'no-cors'
        })
            .then(resp => resp.json())
            .then((json) => {
                setHeroesList([...heroesList, ...json.results])
                setIsLoading(false)
            })

    }

    useEffect(() => {
        fetch(`/api/characters/?api_key=${process.env.REACT_APP_SECRET_KEY
            }&format=json&publish_month=1&publish_year=2012&limit=${6}&offset=${0
            }`, {
            mode: 'no-cors'
        })
            .then(resp => resp.json())
            .then((json) => {
                setHeroesList(json.results)
                setIsLoading(false)
            })

    }, [])
    console.log(heroesList)
    return (
        <div className='heroes'>
            <Header />
            <div className='heroes__content'>
                {heroesList.map((hero: THero) => {
                    return <HeroCard hero={hero} />
                })}
            </div>
            <button className='heroes__button' onClick={loadHeroesList}>
                {isLoading ? 'loading...' : 'SHOW MORE'}
            </button>
        </div>
    )
}