import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7012/api/staff", 
});

export const getStaffs = (params) => api.get("/", { params });
export const createStaff = (data) => api.post("/", data);
export const updateStaff = (id, data) => api.put(`/${id}`, data);
export const deleteStaff = (id) => api.delete(`/${id}`);
