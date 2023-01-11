import React from 'react'

const SearchBox = (props) => {
  return (
    <div className='col col-sm-4'>
     <input className='form-control'
      placeholder='search the films...'
      value={props.Value}
      onChange={(event)=>props.setSearchFilm(event.target.Value)}/>
    </div>
  )
}

export default SearchBox
