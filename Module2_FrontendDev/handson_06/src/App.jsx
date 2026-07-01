import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ProfilePage from "./pages/ProfilePage";
import CourseDetailPage from "./pages/CourseDetailPage";

import "./App.css";
import { useContext } from "react";
import { EnrollmentContext } from "./context/EnrollmentContext";

function App() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  
  const { enroll } = useContext(EnrollmentContext);

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

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
    }

    fetchCourses();
  }, []);

  function handleEnroll(id) {
  const selectedCourse = courses.find((course) => course.id === id);

  if (selectedCourse) {
    enroll(selectedCourse);
  }

  navigate("/profile");
}
  return (
    <>
      <Header siteName="Student Portal" />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/courses"
          element={
            <CoursesPage
              courses={courses}
              onEnroll={handleEnroll}
            />
          }
        />

        <Route
          path="/profile"
          element={<ProfilePage />}
        />

        <Route
          path="/courses/:courseId"
          element={<CourseDetailPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;