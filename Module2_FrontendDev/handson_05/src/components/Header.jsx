function Header({ siteName, enrolledCount }) {
  return (
    <header className="header">
      <h1>{siteName}</h1>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Courses</li>
          <li>Profile</li>
        </ul>
      </nav>

      <div className="enrolled">
        <strong>Enrolled:</strong> {enrolledCount}
      </div>
    </header>
  );
}

export default Header;