import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
    const { pathname } = useLocation();
    return (
        // <ul className="wd-navigation">
        //     {links.map((link, index) => (
        //         <li key={index} 
        //             className={pathname.includes(link) ? "wd-active" : ""}>
        //             <Link to={link}>{link}</Link>
        //         </li>
        //     ))}
        // </ul>
        <>
            <div className="d-none d-md-block h-100 ">
                <ul className="wd-navigation">
                    {
                        links.map((link, index) => (
                            <li key={index}
                                className={pathname.includes(link) ? "wd-active" : ""}>
                                <Link to={link}>{link}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="course-nav-small-screen d-md-none" style={{
                height: "100vh"
            }}>
                <div className="d-md-none d-flex flex-row justify-content-between align-items-center bg-black text-white px-4">
                    <a href="/Kanbas/navigation/index.html" style={{
                        textDecoration: "none",
                        color: "white"
                    }}>
                        <i className="
                fa fa-bars
                "></i>
                    </a>
                    <div className="p-2">
                        <h6 className="m-0" style={{
                            textAlign: "center",
                        }}>
                            CS5610.12631.2024
                            <br />
                            <span>
                                Home
                            </span>
                        </h6>
                    </div>
                    <div>
                        <i className="
                fa fa-caret-down
                "></i>
                    </div>
                </div>
                <ul className="h-100">
                    <Link to="/kanbas/courses/home/screen.html">
                        <li>
                            <a href="/kanbas/courses/home/screen.html">
                                <i className="fa fa-home"></i>
                                Home
                            </a>
                        </li>
                    </Link>
                    <li className="wd-active"><a href="/kanbas/courses/modules/screen.html">
                        <i className="
                fa fa-th-large
                "></i>
                        Modules</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-plug
                "></i>
                        Piazza</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-plug
                "></i>
                        Zoom Meetings</a></li>
                    <li><a href="/kanbas/courses/assignments/index.html">
                        <i className="
                fa fa-pencil-square-o
                "></i>
                        Assignments</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-rocket
                "></i>
                        Quizzes</a></li>
                    <li><a href="/kanbas/courses/grades/screen.html">
                        <i className="
                fa fa-book
                "></i>
                        Grades</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-users
                "></i>
                        People</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-plug
                "></i>
                        Panopto Video</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-comments
                "></i>
                        Discussions</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-bullhorn
                "></i>
                        Announcements</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-file
                "></i>
                        Pages</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-folder
                "></i>
                        Files</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-list
                "></i>
                        Rubrics</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-bullseye
                "></i>
                        Outcomes</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-circle-o
                "></i>
                        Collaborations</a></li>
                    <li><a href="#">
                        <i className="
                fa fa-book
                "></i>
                        Syllabus</a></li>
                    <li><a href="/kanbas/courses/settings/index.html">
                        <i className="
                fa fa-cogs
                "></i>
                        Settings</a></li>
                </ul>
            </div>
        </>
    );
}

export default CourseNavigation;