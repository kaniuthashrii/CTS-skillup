import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";
import StudentProfile from "../components/StudentProfile";

function ProfilePage() {
  const { enrolledCourses, unenroll } =
    useContext(EnrollmentContext);

  return (
    <>
      <StudentProfile />

      <section
        style={{
          margin: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Enrolled Courses</h2>

        {enrolledCourses.length === 0 ? (
          <p>No courses enrolled.</p>
        ) : (
          enrolledCourses.map((course) => (
            <div
              key={course.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <span>
                {course.name} ({course.code})
              </span>

              <button
                onClick={() => unenroll(course.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );
}

export default ProfilePage;