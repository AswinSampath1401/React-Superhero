import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router'

const SuperHeroDetails = () => {
    const {id} = useParams()
    const [superHeroData,setSuperHeroData] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            await fetch(`https://www.superheroapi.com/api.php/102724775376151/${id}`)
                .then(res=>res.json())
                .then(result=>{
                    console.log(result)
                    setSuperHeroData(result)
                })
                .catch(err=>console.log(err))
        }
        fetchData()
    },[])
    return superHeroData.length===0 ? (
        <div>
            Loading .. {id}
        </div>
    ) : (
        <div>
            {JSON.stringify(superHeroData)}
            <div>
                <a href='/'><button>Go Back</button></a>
            </div>
        </div>
    )
}

export default SuperHeroDetails
