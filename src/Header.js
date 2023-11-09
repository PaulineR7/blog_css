import ProfileMenu from "./ProfileMenu";
import './App.css'; 

function Header () {
    return(
        <header className="">
      <h1>Le blog</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Articles</li>
          <li>Contact</li>
          <ProfileMenu />
        </ul>
      </nav>
    </header>
    )
}

export default Header;