import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
   
    const btn = document.querySelectorAll('.s-item')
    btn.forEach(navitem => {
        navitem.addEventListener("click", ()=>{
            btn.forEach(item =>{
                if(item !==navitem){
                    item.classList.remove('.active')
                }
            });
           navitem.classList.add('.active') 
        })
    });

  return (
    <div className= "s-main_container">
        
    <div className= "s-container">
         <NavLink to ="home" className= "s-item"title={"Home"}>
           <div className= "s-item_left">
           <img src="./home.svg" alt="" />
                Home
           </div>
           <span className='s-bar'></span>
           <div className="s-item_right">
             <span> 1 </span>
           </div>
            </NavLink>

            <NavLink to ="today" className="s-item" title={"Today"}>
            <div className= "s-item_left">
           <img src="./calendar.svg" alt="" />
                Today
           </div>
           <span className='s-bar'></span>
           <div className="s-item_right">
             <span> 1 </span>
           </div>
            </NavLink>

            <NavLink to ="personal" className="s-item" title={"Personal"}>
            <div className= "s-item_left">
           <img src="./Rsquare.svg" alt="" />
                Personal
           </div>
           <span className='s-bar'></span>
           <div className="s-item_right">
             <span> 1 </span>
           </div>
            </NavLink>

            <NavLink to ="work" className="s-item" title={"Work"}>
            <div className="s-item_left">
           <img src="./Gsquare.svg" alt="" />
                Work
           </div>
           <span className='s-bar'></span>
           <div className="s-item_right">
             <span> 1 </span>
           </div>
            </NavLink>
    </div>
    </div>
  )
}

export default Sidebar