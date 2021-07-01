import React from 'react'

const PopularSearchItem = ({popularSearchData}) => {
    return (
        <div className='popularCharacterContainer'>
            {
                popularSearchData.map((item)=>(
                    <div className='popularCharacterItem' key={item.id}>
                       <h2>{item.name}</h2> 
                    <a href={'/'+ item.id}><img className='popularImage' alt={item.name} src={item.image.url}></img></a>
                    </div>
                ))
            }
        </div>
    )
}

export default PopularSearchItem
