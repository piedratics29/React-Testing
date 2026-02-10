import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        Municipality of HELOOOOOOO
      </div>

      <nav className="header__nav">
        <a href="#">Home</a>
        <a href="#">Departments</a>
        <a href="#">Projects</a>
        <a href="#">About Us</a>
        <a href="#">Contacts</a>
      </nav>

      <button className="header__cta">
        Ask the Mayor
      </button>
    </header>
  )
}

export default Header
