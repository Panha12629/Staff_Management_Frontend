import React, { useEffect, useState } from "react";
import { getStaffs, deleteStaff } from "../services/api";
import StaffForm from "./StaffForm";
import StaffSearch from "./StaffSearch";
import ExportButtons from "./ExportButtons";

function StaffList() {
  const [staffs, setStaffs] = useState([]);
  const [editingStaff, setEditingStaff] = useState(null);
  const [searchParams, setSearchParams] = useState({});

  const loadStaffs = () => {
    getStaffs(searchParams)
      .then(res => res.data?.success ? setStaffs(res.data.data) : setStaffs([]))
      .catch(() => setStaffs([]));
  };

  useEffect(() => { loadStaffs(); }, [searchParams]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this staff?")) {
      deleteStaff(id).then(loadStaffs);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Staff Management</h2>

      <StaffSearch setSearchParams={setSearchParams} />

      <StaffForm  editingStaff={editingStaff}   onSave={() => { setEditingStaff(null); loadStaffs(); }} />

      <ExportButtons staffs={staffs} />

      <div className="table-responsive mt-3">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>Staff ID</th>
              <th>Full Name</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffs.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No staff found
                </td>
              </tr>
            ) : (
              staffs.map((staff, index) => (
                <tr key={staff.id}>
                  <td>{index + 1}</td>
                  <td>{staff.staffId}</td>
                  <td>{staff.fullName}</td>
                  <td>{new Date(staff.birthday).toLocaleDateString()}</td>
                  <td>{staff.gender === 1 ? "Male" : "Female"}</td>
                  <td>
                    <button  onClick={() => setEditingStaff(staff)}   className="btn btn-sm btn-warning me-2" >
                      Edit
                    </button>
                    <button  onClick={() => handleDelete(staff.id)}   className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffList;
