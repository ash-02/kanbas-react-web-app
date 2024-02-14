import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaFileInvoice } from "react-icons/fa";

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
                                    <div className="col" style={{
                                        width: "300px"
                                    }}>
                                        <div className="card">
                                            <img src={
                                                `/assets/images/${course.image}`
                                            } className="card-img-top" style={{
                                                height: "150px"
                                            }} alt="course-banner" />
                                            <div className="card-body">
                                                <a className="card-title" href="${course.link}" style={{
                                                    textDecoration: "none",
                                                    color: "navy",
                                                    fontWeight: "bold"
                                                }}>
                                                    {course.name}
                                                </a>
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