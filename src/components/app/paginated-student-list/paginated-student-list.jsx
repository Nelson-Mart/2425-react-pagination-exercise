import { useEffect, useState } from "react";
import { StudentList } from "./student-list/student-list";
import { Pagination } from "./pagination/pagination";
import { API_TOKEN, API_URL } from "../../../constants/constants";

export function PaginatedStudentList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [students, setStudents] = useState([]);

  const pageCount = students.length;

  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
  fetch(`${API_URL}`, {
    headers: {
      "Authorization": `Bearer ${API_TOKEN}`
    }
  })
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      setStudents(jsonData.data);
    })
    .catch((error) => {
      console.error("Error fetching students:", error);
    });
}, []); 

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <StudentList students={students[currentPage]} />
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChanged={handlePageChanged}
      />
    </>
  );
}
