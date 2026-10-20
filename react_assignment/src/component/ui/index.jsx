const Button = ({name,onClick})=>{
  return(
           <button onClick={onClick}  className='btn'>
            {name}
            </button>

  )
}

export default Button