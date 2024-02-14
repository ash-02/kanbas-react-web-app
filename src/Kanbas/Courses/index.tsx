import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Breadcumb from "../Components/Breadcumb";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Editor from "./Assignments/Editor";
import Grades from "./Grades";
import './index.css';

function Courses() {
    return (
        <div className="p-4 h-100 ">
            <div className="">
                <Breadcumb />
                <hr />
            </div>
            <div className=" d-flex flex-row" style={{
            }}>
                <CourseNavigation />
                <div
                className="flex-grow-1 "
                style={{ left: "320px", top: "50px", height: "100%" }} >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<Editor/>} />
                    <Route path="Grades" element={<Grades/>} />
                </Routes>
            </div>
            </div>
        </div>
    );
}

export default Courses;