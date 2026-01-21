import React from "react";
import { exportExcel, exportPdf } from "../services/exportService";

function ExportButtons() {
  const handleExport = async (type) => {
    try {
      let response;
      if (type === "excel") {
        response = await exportExcel();
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "staffs.xlsx");
        document.body.appendChild(link);
        link.click();
      } else if (type === "pdf") {
        response = await exportPdf();
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "staffs.pdf");
        document.body.appendChild(link);
        link.click();
      }
    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to export file. Try again.");
    }
  };

  return (
    <div className="d-flex justify-content-end mt-2 gap-2">
      <button onClick={() => handleExport("excel")} className="btn btn-success">
        Export Excel
      </button>
      <button onClick={() => handleExport("pdf")} className="btn btn-primary">
        Export PDF
      </button>
    </div>
  );
}

export default ExportButtons;
