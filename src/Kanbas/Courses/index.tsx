import { Navigate, Route, Routes } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Navigation from "../Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Editor from "./Assignments/Editor";
import Grades from "./Grades";
import './index.css';
import { HiMiniBars3 } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa";
import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from "react";

function Courses() {

    const [openMobileCourseNav, setOpenMobileCourseNav] = useState(false);
    const [openMobileMainNav, setOpenMobileMainNav] = useState(false);
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    return (
        <div className="p-md-4 p-0 h-100 ">
            <div className="">
                <div className="bc p-2 d-md-flex flex-row gap-4 align-items-center d-none " >
                    <HiMiniBars3 />
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb
                        m-0
                        ">
                            <li className="breadcrumb-item m-0 ">
                                {course?._id}
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <Routes>
                                    <Route path="/" element={<Navigate to="Home" />} />
                                    <Route path="Home" element={<span>Home</span>} />
                                    <Route path="Modules" element={<span>Modules</span>} />
                                    <Route path="Piazza" element={<span>Piazza</span>} />
                                    <Route path="Assignments" element={<span>Assignments</span>} />
                                    <Route path="Assignments/:assignmentId" element={<span>Assignment Editor</span>} />
                                    <Route path="Grades" element={<span>Grades</span>} />
                                </Routes>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="d-md-none d-flex flex-row justify-content-between align-items-center bg-black text-white px-4">
                    <Button
                        onClick={() => {
                            setOpenMobileMainNav(!openMobileMainNav);
                            setOpenMobileCourseNav(false);
                        }}
                        aria-controls="mobile-main-nav"
                        aria-expanded={openMobileMainNav}
                        className="bg-transparent border-0 text-white"
                    >
                        <HiMiniBars3 />
                    </Button>
                    <div className="p-2">
                        <h6 className="m-0" style={{
                            textAlign: "center"
                        }}>
                            {course?._id}
                            <br />
                            <Routes>
                                <Route path="/" element={<Navigate to="Home" />} />
                                <Route path="Home" element={<span>Home</span>} />
                                <Route path="Modules" element={<span>Modules</span>} />
                                <Route path="Piazza" element={<span>Piazza</span>} />
                                <Route path="Assignments" element={<span>Assignments</span>} />
                                <Route path="Assignments/:assignmentId" element={<span>Assignment Editor</span>} />
                                <Route path="Grades" element={<span>Grades</span>} />
                            </Routes>
                        </h6>
                    </div>
                    <div>
                        <Button
                            onClick={() => {
                                setOpenMobileCourseNav(!openMobileCourseNav);
                                setOpenMobileMainNav(false);
                            }}
                            aria-controls="mobile-course-nav"
                            aria-expanded={openMobileCourseNav}
                            className="bg-transparent border-0 text-white"
                        >
                            <FaCaretDown />
                        </Button>
                    </div>
                </div>
                <hr className={
                    openMobileCourseNav ? "d-none d-md-block" : ""
                } />
            </div>
            <Collapse in={openMobileCourseNav}>
                <div id="mobile-course-nav">
                    <CourseNavigation />
                </div>
            </Collapse>
            <Collapse in={openMobileMainNav}>
                <div id="mobile-main-nav">
                    <Navigation />
                </div>
            </Collapse>
            <div className={
                openMobileCourseNav || openMobileMainNav ? "d-none" : " d-flex flex-row p-2 gap-4"
            }>
                <div className="
                d-none d-md-block
                ">
                    <CourseNavigation />
                </div>
                <div
                    className="flex-grow-1 w-md-100 w-50"
                    style={{ left: "320px", top: "50px", height: "100%" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<Editor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;