import React from 'react';
import "./sidebarrow.css"

const Sidebarrow = ({Icon,selected, title}) => {
   
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
        <Icon className="sidebardRow_icon" />
        <h2 className='siderbarRow_title' >{title}</h2>
    </div>
  )
}

export default Sidebarrow