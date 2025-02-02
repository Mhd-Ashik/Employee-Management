import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

const api = axios.create({
  baseURL: REST_API_BASE_URL,
});

export const listEmployees = () => api.get('/');

export const createEmployee = (employee) => api.post('/', employee);

export const getEmployee = (employeeId) => api.get(`/${employeeId}`);

export const updateEmployee = (employeeId, employee) => api.put(`/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => api.delete(`/${employeeId}`);