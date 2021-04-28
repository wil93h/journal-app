import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div 
            className="journal__entry-picture"
            style={{
                backgroundSize:'cover',
                backgroundImage:'url(https://www.astrobitacora.com/wp-content/uploads/2016/09/crab-nebula-esa-1024.jpg?resolution=1920,1)'
            }}
            ></div>
            <div className="journal__entrey-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                HolaHolaHolaHolaHolaHolaHola
                </p>
            </div> 

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>2</h4>
            </div>
            
      </div>
    )
}
 