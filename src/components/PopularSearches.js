import React, { useEffect, useState } from 'react'
import PopularSearchItem from './PopularSearchItem';

const PopularSearches = () => {
    const [popularSuperHeroData, setPopularSuperHeroData] = useState([]);
    useEffect(() => {
        const setData = async () => {
            const popularID = [75,150,253,384,491,514,655,726]
            const data = []
            for (const id of popularID) {
                // console.log('Id is ',id)
                await fetch(`https://www.superheroapi.com/api.php/102724775376151/${id}`)
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
            {
                <PopularSearchItem popularSearchData={popularSuperHeroData} />
            }
        </div>
    ) : (
        <div>
           Loading....
        </div>
    )
}

export default PopularSearches
