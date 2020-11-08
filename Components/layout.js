import Head from 'next/head';
import Navbar from './navigation';

const Layout = (props)=>(
    <div>
        <Head>
          <title>SpaceX</title>  
          <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
        
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </Head>
        <Navbar/>
        <div className ="container">
        {props.children}
        </div>
       
    </div>
);

export default Layout; 