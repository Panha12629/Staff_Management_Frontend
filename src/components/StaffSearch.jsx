import React, { useState } from "react";

function StaffSearch({ setSearchParams }) {
  const [staffId, setStaffId] = useState("");
  const [gender, setGender] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (fromDate && toDate && fromDate > toDate) {
      alert("From date cannot be after To date");
      return;
    }

    setSearchParams({
      staffId: staffId || undefined,
      gender: gender || undefined,
      fromDate: fromDate || undefined,
      toDate: toDate || undefined,
    });
  };

  const handleReset = () => { setStaffId(""); setGender(""); setFromDate(""); setToDate(""); setSearchParams({}); };

  return (
    <form onSubmit={handleSearch} className="card p-3 mb-4">
      <h5 className="mb-3">Search Staff</h5>
      <div className="row g-2">
        <div className="col-md-3">
          <input  type="text"  className="form-control"  placeholder="Staff ID"  value={staffId}  onChange={(e) => setStaffId(e.target.value)}  />
        </div>
        <div className="col-md-2">
          <select  className="form-select"   value={gender}  onChange={(e) => setGender(e.target.value ? Number(e.target.value) : "")} >
            <option value="">All</option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
          </select>
        </div>
        <div className="col-md-2">
          <input  type="date"  className="form-control"  value={fromDate}  onChange={(e) => setFromDate(e.target.value)}  />
        </div>
        <div className="col-md-2">
          <input  type="date"  className="form-control"  value={toDate}  onChange={(e) => setToDate(e.target.value)}  />
        </div>
        <div className="col-md-3 d-flex gap-2">
          <button type="submit" className="btn btn-primary w-50">
            Search
          </button>
          <button type="button" className="btn btn-secondary w-50" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

export default StaffSearch;
