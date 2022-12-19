import React from 'react'
//import propTypes from  'prop-Types'
import Button from './Button'

const Heading = ({title,onAdd,showAdd}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
     <Button color={showAdd?'red':'green'} 
     text={showAdd?'close':'add'} 
     onclick={onAdd}/>
    </header>

  )
}
Heading.defaultProps={
    title:'task traker'
}
//  Heading.propTypes={
//     title:propTypes.string.isRequired,
// }

export default Heading
