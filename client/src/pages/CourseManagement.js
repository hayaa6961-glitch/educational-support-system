import Layout from "../components/Layout";
import "./CourseManagement.css";

function CourseManagement() {

  const courses = [
    {
      id: 1,
      code: "SWE401",
      name: "Software Engineering",
      instructor: "Dr. Ahmed",
      students: 45
    },
    {
      id: 2,
      code: "CS305",
      name: "Database Systems",
      instructor: "Dr. Sarah",
      students: 38
    },
    {
      id: 3,
      code: "CS420",
      name: "Artificial Intelligence",
      instructor: "Dr. Khalid",
      students: 29
    },
    {
      id: 4,
      code: "CS210",
      name: "Web Development",
      instructor: "Dr. Nora",
      students: 41
    }
  ];

  return (
    <Layout>

      <h1>Course Management</h1>

      <p>Manage university courses and instructors.</p>

      <table className="course-table">

        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Students</th>
          </tr>
        </thead>

        <tbody>

          {courses.map((course) => (

            <tr key={course.id}>

              <td>{course.code}</td>

              <td>{course.name}</td>

              <td>{course.instructor}</td>

              <td>{course.students}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </Layout>
  );
}

export default CourseManagement;