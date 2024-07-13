import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {


  return (
    <div>
      <div className='sContainer'>
          <div className='searchContainer'>
            <h1 className='homeNoteLogin'>Parkin No:</h1>
            <div className='search'>
        
            <input type="text" id='searchInput' className='searchText'/>
            </div>

            <h1 className='homeNoteLogin'>Date: from</h1>
            <div className='search'>
            <input type="date" id='searchInput' className='searchText'/>
            </div>

            <h1 className='homeNoteLogin'>Date: to</h1>
            <div className='search'>
            <input type="date" id='searchInput' className='searchText'/>
            </div>

            <div className='btnMain'>
                <button className='btn' id='button'>Book Spot</button>
            </div>
        </div>
      </div>
      <div className='MContainer' >
        <div><h1 className='mainNoteLogin'>Parking Spots</h1></div>
        <div >
          
          <div className='slot'>
            <div>
              1
            </div>
            <div>
              <p>name</p>
              <p>date</p>
            </div>
          
          </div>





          <div className='slot'>2</div>
        </div>
      
      </div>
  </div>
  

  )
}

export default Main