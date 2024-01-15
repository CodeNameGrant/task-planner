import { Navigate, Route, Routes } from 'react-router-dom';
import { Appointments } from '../features/appointments';
import { Tasks } from '../features/tasks';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/tasks" element={<Tasks />} />

      <Route path="*" element={<Navigate to={'/appointments'} />} />
    </Routes>
  );
}
