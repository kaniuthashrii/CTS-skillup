import { Link } from "react-router-dom";
import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";

function Header({ siteName }) {
  const { enrolledCourses } = useContext(EnrollmentContext);

  return (
    <header className="header">
      <h1>{siteName}</h1>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <div className="enrolled">
        <strong>Enrolled:</strong> {enrolledCourses.length}
      </div>
    </header>
  );
}

export default Header;