import React from 'react'
import '../App.css'

export default function RightApp() {
  return (
    <>
    
    <div className="subContent rightApp"><br/>
            <span className="headerText activityHeader">Activity</span><br/>
            <div className="activityContainer"><br/>
                <div className="activityCard">
                    <img src="./bg-1.jpg" alt="" className="cardImg"/>
                    <span className="cardText">New post from @anshdeshraj</span>
                </div>
            </div>
            <div className="activityContainer"><br/>
                <div className="activityCard">
                    <img src="./bg-1.jpg" alt="" className="cardImg"/>
                    <span className="cardText">@anshdeshraj just joined the platform</span>
                </div>
            </div>
        </div> 

    </>
  )
}
