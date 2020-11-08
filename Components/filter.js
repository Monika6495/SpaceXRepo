import React, { Component } from 'react'; 
import{Dropdown,DropdownButton} from 'react-bootstrap'

const handleSelect=(e)=>{
    console.log("Inside handleSelect: " + e);
  }

class filter extends Component{


  state={
    sLaunch:false,
  }

 launchHandler = (e)=>{
     this.setState({sLaunch:e})
 }
  render(){
    console.log("SLaunch State : " + this.state.sLaunch)
    return(
      <>
<DropdownButton 
      alignRight
      title="Successful Launch"
      id="dropdown-menu-align-right"
     onSelect ={this.launchHandler}
        >
              <Dropdown.Item eventKey="true">true</Dropdown.Item>
              <Dropdown.Item eventKey="false">false</Dropdown.Item>
      </DropdownButton>
 
      </>
    )
  }
}
// const filter = () => {
//     return(
//         <>
//         <div style={{ display:'flex', flexDirection:'row',}}>
//             {/* //dropdown1 */}
  

//    {/* //dropdown2 */}


 
//    {/* //dropdown3 */}




// </div>


// </>
//     )

// }

export default filter;