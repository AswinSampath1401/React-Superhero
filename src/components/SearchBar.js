import React, { useState } from 'react'

const SearchBar = () => {

    const [superHeroName,setSuperHeroName] = useState('');
    const [superHeroData, setSuperHeroData] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const fetchData = async ()=>{
        await fetch(`https://www.superheroapi.com/api.php/102724775376151/search/${superHeroName}`)
                            .then(res=>res.json())
                            .then((data)=>{
                                console.log(data);
                                setSuperHeroData(data)
                            });
        }
        fetchData();
        //setSuperHeroName('');
    }

    return (
        <div className='searchContainer'>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input className='inputBox' value={superHeroName} type='text' onChange={(e)=>setSuperHeroName(e.target.value)}></input>
                <button type='submit'>▶🦸‍♂️</button>
            </form>
            {
                JSON.stringify(superHeroData)
            }
        </div>
    )
}

export default SearchBar
