import React from 'react'

const MenuCard = ({menuData,}) => {
   console.log(menuData,);
  return (
    <>   
    <section className='main-card--cointainer'>
        {menuData.map((curlElm)=>{
        return(

        
     <div className='card-container' key={curlElm.id}>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>{curlElm.id}</span>
                <span className='card-author subtle'>{curlElm.category}</span>
                <h2 className='card-title'>{curlElm.name}</h2>
                <span className='card-description subtle'>
                    Hii order now this itme now available in this location so know this
                    deails just visit this store
                    Hii order now this itme now available in this location so know this
                    deails just visit this store
                </span>
                <div className='card-read'>Read</div>
            </div>
            <img src={curlElm.image} className="card-media"></img>
            <span className='card-tag subtle'>Order Now</span>

        </div>

    </div>
    );
        })}
    </section>
    </>

  )
}

export default MenuCard;