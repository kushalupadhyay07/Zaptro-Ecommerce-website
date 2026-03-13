import React, { useContext } from 'react'
import { Context } from '../../store/DataContext'
import { Link } from 'react-router-dom';

export default function Components() {
  let {fetchdata}=useContext(Context);
  let uniqueCategory = [...new Set(fetchdata.map(item => item.category))];
console.log(uniqueCategory);
  return (
    <div className='flex justify-around gap-2 box-border h-12 items-center border-2  bg-amber-300'>
      {
        uniqueCategory.map((item,index)=>{
          return <>
           <div key={index}><Link to="/product" className='border-2 button-bg rounded-2xl ' style={{padding:"2px"}} >{item}</Link></div>
          </>
        })
      }
    </div>
  )
}
