import React from 'react'; 
import {Card,CardGroup,CardDeck} from 'react-bootstrap';
// import './display.css';

class Display extends React.Component{
    state={
       images:''
    }
   
    render(){
        return(
            <div >
               <ul className='list-group'>
               <li className="list-group-item">
               
                    {this.props.passedData.map((s )=> {
                      var i =0;
                       return(  
                        <Card style={{ width:'13rem' ,textAlign:'center', display:'inline-block', margin:'20px'}}>
                        <Card.Img variant="top" src={s.links.mission_patch_small} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                          {s.mission_name}
                           #
                          {s.flight_number}
                          <p>
                           Mission Ids : {s.mission_id} <br/>
                           Launch Year : {s.launch_year} <br/>
                           {s.launch_success ?  ' Successfully Launch' : 'Un-Successful Launch'} <br/>
                           {s.rocket.first_stage.cores[i].land_success ? 'UnSuccessful Landing' : 'SuccessFul Landing'} 
                         
                           </p>
                      
                          </Card.Text>
                        </Card.Body>
                     </Card> 
                       )
                       i++;
                      
                  }) }
               </li>
               </ul>
               <style jsx>{`
    .horizontal {
     display:flex!important;
     flex-direction:row!important;
    }
    
  `}</style>
            </div>
 
        )
}
}

export default Display;


// .card {
//   position: relative;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: column;
//   flex-direction: row;
//   min-width: 0;
//   word-wrap: break-word;
//   background-color: #fff;
//   background-clip: border-box;
//   border: 1px solid rgba(0,0,0,.125);
//   border-radius: .25rem;
// }