import CourseCard from "../components/CourseCard";

function CoursesPage({ courses, onEnroll }) {
  return (
    <main>
      <section className="hero">
        <h2>Available Courses</h2>
        <p>Select a course to view details or enroll.</p>
      </section>

      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            onEnroll={onEnroll}
          />
        ))}
      </section>
    </main>
  );
}

export default CoursesPage;