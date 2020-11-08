import Layout from '../Components/layout';
import Fetch from '../components/Layout';

import Display from '../Components/Display';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Filter from '../Components/filter';
import{Dropdown,DropdownButton} from 'react-bootstrap';


// const router = useRouter()

const Index = ({ data,launch })=> {
  
  var [value,setValue]=useState("");
  var handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }

  
    var dataList = data;
    const LaunchTrue = launch;
   // var Parsed = JSON.Parse(data);

    if(value === true){
    
    dataList=  data.filter((element)=>element.launch_success === true)
    return dataList;
    }
          return(
        <Layout>
        <div>
        {/* <DropdownButton 
      alignRight
      title="Successful Launch"
      id="dropdown-menu-align-right"
     onSelect ={handleSelect}
        >
              <Dropdown.Item eventKey={true}>true</Dropdown.Item>
              <Dropdown.Item eventKey="false">false</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {value}</h4> */}
       <h1>Welcome to Space X Programs </h1> 
      
       <Display passedData ={dataList} launch ={LaunchTrue} />
      
        </div>
    
        </Layout>
          )
    }
   
// if({value} == '') {
Index.getInitialProps = async (ctx)=>{
  

    var res = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`);
    
    // if(ctx.value =='true')
    // {
      
    //   res = await fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true'); 
    // } 
    const data = await res.json();  
    return { data: data }
}
//}

  
export default Index;