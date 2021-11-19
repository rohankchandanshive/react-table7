
  
// class ToggleHideCol extends React.Component{
//     state = {
//         flag: false,
//     }


    
       
//     ToggleButton(e) {
//         console.log("flag",e)
//         this.props.onVisibility(
//             {flag : !this.props.value}
//         );
//     }
   
//     render() {

//         console.log("Hello",this.props);
//         return(
//             <div>
//                 <button onClick={() => this.ToggleButton(this.props)}>
//                   { this.state.flag === false ? "Hide":"Show" }
//                 </button>
//             </div>
//         )
//     }
// }

import React from "react"
const ToggleHideCol = ({
  value: initialValue,
}) => {
  // We need to keep and update the state of the cell normally
  const [visibility, setvisibility] = React.useState(initialValue);
  console.log("visooooooooooooo")
  const onChange = e => {
      console.log('onChange',e)
    setvisibility(!e)
  }
  // We'll only update the external data when the input is blurred
//   const onBlur = () => {
//     updateMyData(index, id, value)
//   }
  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setvisibility(initialValue)
  }, [initialValue])

  return <input type='button' onClick={onChange} >{visibility === false ? "Hide":"Show" }Hello</input>
}
  
export default ToggleHideCol;