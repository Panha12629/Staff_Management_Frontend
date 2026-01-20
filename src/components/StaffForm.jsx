import React, { useEffect, useState } from "react";
import { createStaff, updateStaff } from "../services/api";

function StaffForm({ editingStaff, onSave }) {
  const [staffId, setStaffId] = useState("");
  const [fullName, setFullName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState(1);

  useEffect(() => {
    if (editingStaff) {
      setStaffId(editingStaff.staffId || "");
      setFullName(editingStaff.fullName || "");
      setBirthday(editingStaff.birthday?.split("T")[0] || "");
      setGender(editingStaff.gender || 1);
    } else {
      setStaffId("");
      setFullName("");
      setBirthday("");
      setGender(1);
    }
  }, [editingStaff]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { staffId, fullName, birthday, gender };

    if (editingStaff) {
      await updateStaff(editingStaff.id, payload);
    } else {
      await createStaff(payload);
    }

    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">
      <h5>{editingStaff ? "Edit Staff" : "Add Staff"}</h5>
      <div className="row g-2">
        <div className="col-md-3">
          <input type="text"  className="form-control"  placeholder="Staff ID"  value={staffId}  onChange={(e) => setStaffId(e.target.value)}  maxLength={8} required/>
        </div>
        <div className="col-md-3">
          <input  type="text"  className="form-control"  placeholder="Full Name" value={fullName}  onChange={(e) => setFullName(e.target.value)} maxLength={100}  required />
        </div>
        <div className="col-md-3">
          <input  type="date"  className="form-control"  value={birthday}  onChange={(e) => setBirthday(e.target.value)}  required />
        </div>
        <div className="col-md-2">
          <select  className="form-select"  value={gender}  onChange={(e) => setGender(Number(e.target.value))}  >
            <option value={1}>Male</option>
            <option value={2}>Female</option>
          </select>
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary w-100">
            {editingStaff ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default StaffForm;
