import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav style={{ padding: '1rem', backgroundColor:'burgundy', justifyContent:'center'  }}>
            <ul style={{ listStyle:'none', color:'white', display:'flex', gap:'1rem'}}>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>

    )
}

export default Navbar