import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightText = (props) => {
  console.log(props.users.color);
  
  return (
    <div id='right'className='h-full rounded-4xl p-6 w-2/3 flex  overflow-x-auto flex-nowrap gap-10'>
     
{props.users.map(function(elem,idx){

  return < RightCard key={idx} color={elem.color} id={idx} img={elem.img } tag={elem.tag} />
})}

      {/* <RightCard />
      <RightCard />
      <RightCard /> */}
    
      {/* yahn card 3 chahiye isliye 3 baar import kiya h or map kiya h  */}
    </div>
  )
}

export default RightText
