import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router'
import SuperHeroItem from './SuperHeroItem';
import Loading from './Loading';
import Header from './Header';

require('dotenv').config()

const API_KEY = process.env.REACT_APP_API_KEY;

const SuperHeroDetails = () => {
    const {id} = useParams()
    const [superHeroData,setSuperHeroData] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            await fetch(`https://www.superheroapi.com/api.php/${API_KEY}/${id}`)
                .then(res=>res.json())
                .then(result=>{
                    console.log(result)
                    setSuperHeroData(result)
                })
                .catch(err=>console.log(err))
        }
        fetchData()
    },[id])
    return superHeroData.length===0 ? (
        <>
        <Header/>
       <Loading />
       </>
    ) : (
        <div>
           <SuperHeroItem superHeroData={superHeroData} />
        </div>
    )
}

export default SuperHeroDetails
