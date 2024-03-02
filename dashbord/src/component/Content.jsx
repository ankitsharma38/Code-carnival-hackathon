import React from "react";
import ContentHadder from "./ContentHadder";
import "../styles/content.css";
import Card from "./Card";
import { Outlet, Route, Routes } from "react-router-dom";
import TeacherList from "./TeacherList";
import NewPatientAdd from "./NewPatientAdd";
import MedicineDetail from "./MedicineDetail";
import DoctorDetail from "./DoctorDetail";
const Content = () => {
  return (
    <div className="content">
      <ContentHadder />
      <Card />
      <div>
        <Routes>
          <Route path="/patientrecodrd" element={<TeacherList />} />
          <Route path="/addnewpatient" element={<NewPatientAdd />} />
          <Route path="/medicinedetail" element={<MedicineDetail />} />
          <Route path="/doctordetail" element={<DoctorDetail />} />
          {/* <Route path="/signout" element={<SignOut />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Content;
