//import ProtoType from 'prop-types'

const Button = ({color,text,onClick}) => {
    const onclick=()=>{
        console.log('click')
    }
  return  <button onClick={onclick} style={{backgroundColor:color}} className='btn'>{text}</button>
}
// Button.prototype={
//     color:'red'
// }
// Button.protoType={
//     text:ProtoType.string,
//     color:ProtoType.string,
//     onclick:ProtoType.string.isRequired,
// }

export default Button

