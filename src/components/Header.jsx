import '../assets/style/header.css'
import imagen from '../assets/img/logo.jpg'

function Header() {
    return ( 
        <nav>
            <div class="contenedor">
                <ul  class="nav-ul_menu" >
                    <img id="logo" src={imagen}></img>
                </ul>
            </div>
        </nav>    
    );
}

export default Header;