import { createContext, useState } from "react";

export const EnrollmentContext = createContext();

export function EnrollmentProvider({ children }) {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  function enroll(course) {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  }

  function unenroll(id) {
    setEnrolledCourses(
      enrolledCourses.filter((course) => course.id !== id)
    );
  }

  return (
    <EnrollmentContext.Provider
      value={{
        enrolledCourses,
        enroll,
        unenroll,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}