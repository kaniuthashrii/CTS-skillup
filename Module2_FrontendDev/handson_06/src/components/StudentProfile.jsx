import { useState } from "react";

function StudentProfile() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    semester: ""
  });

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }

  return (
    <section
      style={{
        background: "white",
        margin: "30px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h2>Student Profile</h2>

      <br />

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="semester"
        placeholder="Semester"
        value={student.semester}
        onChange={handleChange}
      />

      <br />
      <br />

      <h3>Preview</h3>

      <p><strong>Name:</strong> {student.name}</p>

      <p><strong>Email:</strong> {student.email}</p>

      <p><strong>Semester:</strong> {student.semester}</p>

    </section>
  );
}

export default StudentProfile;