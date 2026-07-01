import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Runs once when the component loads
  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();

        const names = [
          "Data Structures",
          "Web Development",
          "Database Management",
          "Operating Systems",
          "Computer Networks",
        ];

        const courseData = data.slice(0, 5).map((post, index) => ({
          id: index + 1,
          name: names[index],
          code: `CS10${index + 1}`,
          credits: index % 2 === 0 ? 4 : 3,
          grade: ["A", "B+", "A-", "A", "B"][index],
        }));

        setCourses(courseData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  // Runs whenever courses change
  useEffect(() => {
    if (courses.length > 0) {
      console.log("Courses updated");
    }
  }, [courses]);

  function handleEnroll(id) {
    if (!enrolledCourses.includes(id)) {
      setEnrolledCourses([...enrolledCourses, id]);
    }
  }

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header
        siteName="Student Portal"
        enrolledCount={enrolledCourses.length}
      />

      <main>
        <section className="hero">
          <h2>Welcome to Student Portal</h2>
          <p>React Fundamentals - Components, Props & Hooks</p>
        </section>

        <section className="search">
          <input
            type="text"
            placeholder="Search Courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>

        {loading && (
          <h2 style={{ textAlign: "center" }}>
            Loading Courses...
          </h2>
        )}

        {error && (
          <h2 style={{ textAlign: "center", color: "red" }}>
            {error}
          </h2>
        )}

        {!loading && !error && (
          <section className="course-grid">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onEnroll={handleEnroll}
              />
            ))}
          </section>
        )}

        <StudentProfile />
      </main>

      <Footer />
    </>
  );
}

export default App;