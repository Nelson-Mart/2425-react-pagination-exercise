export function StudentList({ students }) {
  // TO DO
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          <p>{student.firstName} - {student.age}</p>
        </li>
      ))}
    </ul>
  );
}
