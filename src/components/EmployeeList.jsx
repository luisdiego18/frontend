import React, { useState } from "react";

const array = [
  { id: 1, firstName: "John", lastName: "Smith", phoneNumber: 3051234567 },
  { id: 2, firstName: "Charles", lastName: "Rogers", phoneNumber: 3051234567 },
  { id: 3, firstName: "Mia", lastName: "Lee", phoneNumber: 3051234567 },
  { id: 4, firstName: "Tom", lastName: "Gordon", phoneNumber: 3051234567 },
];

function EmployeeList(props) {
  const [data, setData] = useState(array);

  return (
    <div>
      <table className="table ">
        <thead>
          <tr className="bg-primary text-white">
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
