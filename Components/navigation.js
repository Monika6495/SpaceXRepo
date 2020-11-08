import Link from 'next/link';
import Filter from './filter';

const Navbar = () =>(
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">SpaceX</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/aboutSpaceX"><a className="nav-link">About</a></Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

