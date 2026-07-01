import { Link } from "react-router-dom";

function CourseCard({
  id,
  name,
  code,
  credits,
  grade,
  onEnroll,
}) {
  return (
    <div className="course-card">
      <h3>
        <Link
          to={`/courses/${id}`}
          style={{
            textDecoration: "none",
            color: "#2c3e50",
          }}
        >
          {name}
        </Link>
      </h3>

      <p>
        <strong>Code:</strong> {code}
      </p>

      <p>
        <strong>Credits:</strong> {credits}
      </p>

      <p>
        <strong>Grade:</strong> {grade}
      </p>

      <button onClick={() => onEnroll(id)}>
        Enroll
      </button>
    </div>
  );
}

export default CourseCard;