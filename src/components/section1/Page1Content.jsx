import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-6 flex gap-10 items-center h-[90vh]  px-18'>
   <LeftText />
   <RightText users={props.users} />
    </div>
  )
}

export default Page1Content
