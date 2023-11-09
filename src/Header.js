import ProfileMenu from "./ProfileMenu";
import './App.css'; 

function Header () {
    return(
        <header className="">
      <h1>MARH Games</h1>
      <nav>
        <ul>
          <li><a href="">Accueil</a></li>
          <li><a href="">Tournoi</a></li>
          <li><a href="">Infos pratiques</a></li>
          <ProfileMenu />
        </ul>
      </nav>
    </header>
    )
}

export default Header;