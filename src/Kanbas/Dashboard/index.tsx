import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaFileInvoice } from "react-icons/fa";
import "./index.css";

function Dashboard() {
    return (
        <>
            <div className="p-4">
                <h1>Dashboard</h1>
                <hr />
                <h2>Published Courses ({courses.length})
                </h2>
                <hr />
                <div className="row overflow-auto">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {
                            courses.map((course) => {
                                return (
                                    <div className="col">
                                        <div className="card">
                                            <img src={
                                                `/assets/images/${course.image}`
                                            } className="card-img-top" style={{
                                                height: "150px"
                                            }} alt="course-banner" />
                                            <div className="card-body">
                                                <Link to={`/kanbas/courses/${course._id}`} className="text-black">
                                                    {course.name}
                                                </Link>
                                                <p className="card-text">
                                                    {course.number}
                                                    <br />
                                                    {course.startDate} | {course.endDate}
                                                </p>
                                                <Link to={`/kanbas/courses/${course._id}`}>
                                                    <FaFileInvoice />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;