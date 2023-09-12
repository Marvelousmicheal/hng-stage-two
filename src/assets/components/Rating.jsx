import React from 'react'

function Rating() {
  return (
  <>
    <div className="flex w-full gap-12">
              <div className="flex gap-5">
                <img src="imdb.png" alt="imdi-logo" /> <h5 className="text-xs font-normal">86.0/100</h5>
              </div>
              <div className="flex gap-5">
                <img src="tomatoes.png" alt="tomatoes-logo" /> <h5 className="text-xs font-normal">97%</h5>
              </div>
            </div>
  
  </>
  )
}

export default Rating