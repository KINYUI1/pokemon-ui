import { useState, useEffect } from "react"

function Squad({card}) {
    const [cardData, setCardData] = useState('')
    const [cardImg, setCardImg] = useState('')
        useEffect(()=>{
        const fetchCard = async ()=>{
            try {
                const res = await fetch(card.url);
                const data = await res.json();
                setCardData(data)
                setCardImg(data.sprites.front_default)
                // console.log(data);
            
            
            } catch (error) {
                console.error(error);
            }
        }
    
        fetchCard()
        },[])

        return <div className='border-2 w-50 rounded-md mt-2'>
        <img className='h-40 ' src={cardImg} alt={card.name} />
        <div className='font-bold flex gap-3 m-2'>
          <div>
            <h2 >{card.name}</h2>
            <h3>Height: {cardData.height}</h3>
          </div>
          <button className='m-3 bg-red-600 p-2 rounded-md'>Delete</button>
        </div>
        <h6 className='m-2'>Base Experience: {cardData.base_experience}</h6>
    </div> 
}
export default Squad