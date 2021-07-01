import React, { useState } from 'react'
require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY

const SearchBar = () => {

    const [superHeroName, setSuperHeroName] = useState('');
    const [superHeroData, setSuperHeroData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            await fetch(`https://www.superheroapi.com/api.php/${API_KEY}/search/${superHeroName}`)
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    setSuperHeroData(data.results)
                });
        }
        fetchData();
        //setSuperHeroName('');
    }

    return (
        <> 
            <div className='searchContainer'>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <input placeholder='Search Super Hero' className='inputBox' value={superHeroName} type='text' onChange={(e) => setSuperHeroName(e.target.value)}></input>
                    <button className='submitbtn' type='submit'>▶🦸‍♂️</button>
                </form>
                <div className='result-container'>
                    {
                        superHeroData.map((item) => (
                            <div className='popularCharacterItem' key={item.id}>
                                <h1>{item.name}</h1>
                                <a href={'/' + item.id}><img className='popularImage' alt={item.name} src={item.image.url}></img></a>
                            </div>
                        ))
                    }
                </div>
                {
                    superHeroData.length ? ( <div className='end-of-search'></div>) : (<div></div>)
                }
            </div>

        </>
    )
}

export default SearchBar
