import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ExportButtons({ staffs }) {
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(staffs);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Staffs");
    XLSX.writeFile(wb, "staffs.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["ID", "Staff ID", "Full Name", "Birthday", "Gender"];
    const tableRows = staffs.map((s) => [ s.id, s.staffId, s.fullName,  new Date(s.birthday).toLocaleDateString(),  s.gender === 1 ? "Male" : "Female", ]);
    doc.autoTable({ head: [tableColumn], body: tableRows });
    doc.save("staffs.pdf");
  };

  return (
    <div className="d-flex justify-content-end mt-2 gap-2">
      <button onClick={exportExcel} className="btn btn-success">
        Export Excel
      </button>
      <button onClick={exportPDF} className="btn btn-primary">
        Export PDF
      </button>
    </div>
  );
}

export default ExportButtons;
