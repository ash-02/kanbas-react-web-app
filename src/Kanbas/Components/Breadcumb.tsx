import { HiMiniBars3 } from "react-icons/hi2";
import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

const Breadcumb = () => {

    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    return (
        <div className="bc p-2 d-md-flex flex-row gap-4 align-items-center d-none ">
            <HiMiniBars3 />
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb
                        m-0
                        ">
                    <li className="breadcrumb-item m-0 "><a>
                        {course?._id}
                    </a></li>
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
    )
}

export default Breadcumb