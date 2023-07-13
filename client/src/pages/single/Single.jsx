import React from 'react'
import './single.css'
import SideBar from '../../Components/sidebar/SideBar'
import SinglePost from '../../Components/singlePost/SinglePost'

const Single = () => {
  return (
    <div className='single'>
        <SinglePost />
        <SideBar />
    </div>
  )
}

export default Single