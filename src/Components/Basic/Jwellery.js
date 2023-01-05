import React, { useState } from 'react'
import MenuCard from './MenuCard'
import Menu  from './MenuApi';
const Jwellery = () => {
    const[menuData,setmenudata]=useState(Menu)
    console.log(menuData)
    const filteritem=(category)=>{
        const updatelist=Menu.filter((curlElm)=>{
            return curlElm.category===category;
    })
    setmenudata(updatelist)
    }
  return (
    <div>Jwellery
        <nav className='navbar'>
            <div className='btn-group'>
                    <button className='btn-group__item' onClick={()=>filteritem("Lac Jewellery")}>Lac Jewellery</button>
                    <button className='btn-group__item' onClick={()=>filteritem("Meenakari Jewellery")}>Meenakari Jewellery</button>
                    <button className='btn-group__item' onClick={()=>filteritem("Temple Jewellery")}>Temple Jewellery</button>
                    <button className='btn-group__item' onClick={()=>filteritem("Fashion Jewellery")}>Fashion Jewellery</button>
                    <button className='btn-group__item' onClick={()=>filteritem("Bridal Jewellery")}>Bridal Jewellery</button>
                    <button className='btn-group__item' onClick={()=>setmenudata(Menu)}>All</button>
            </div>
        </nav>
        <MenuCard menuData={menuData}/>

    </div>
  )
}

export default Jwellery;