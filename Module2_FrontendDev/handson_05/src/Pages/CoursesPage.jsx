import CourseCard from "../components/CourseCard";

function CoursesPage({ courses, onEnroll }) {
  return (
    <section className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          {...course}
          onEnroll={onEnroll}
        />
      ))}
    </section>
  );
}

export default CoursesPage;