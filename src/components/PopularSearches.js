import React, { useEffect, useState } from 'react'
import PopularSearchItem from './PopularSearchItem';
import Loading from './Loading';
require('dotenv').config()

const API_KEY = process.env.REACT_APP_API_KEY;

const PopularSearches = () => {
    const [popularSuperHeroData, setPopularSuperHeroData] = useState([]);
    useEffect(() => {
        const setData = async () => {
            const popularID = [75,150,253,384,491,514,655,726]
            const data = []
            for (const id of popularID) {
                // console.log('Id is ',id)
                await fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${id}`)
                    .then(res => res.json())
                    .then(result => {
                        data.push(result)
                    })
                    .catch(err => console.log(err))
            }
            console.log(data)
            setPopularSuperHeroData(data);
        }
        setData()
    }, [])

    return popularSuperHeroData.length ? (
        <div className='popularCharacterContainer'>
            <h1 className='popularSearchHeading'>Popular Searches</h1>
            {
                <PopularSearchItem popularSearchData={popularSuperHeroData} />
            }
        </div>
    ) : (
        <>
        <Loading />
        </>
    )
}

export default PopularSearches
