import axios from "axios";

const exportApi = axios.create({
  baseURL: "https://localhost:7012/api/export", 
});

export const exportExcel = () =>
  exportApi.get("/excel", { responseType: "blob" }); 

export const exportPdf = () =>
  exportApi.get("/pdf", { responseType: "blob" });
