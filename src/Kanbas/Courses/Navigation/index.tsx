import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleNav = (link: string) => {
        console.log(link);
        navigate("/kanbas/courses/" + link);
    };

    // const handleMobileNavClick = (link: string) => {
    //     console.log(link);
    //     navigate("/kanbas/courses/" + link);
    //     window.location.reload();
    // }

    return (
        <>
            <div className="d-none d-md-block h-100 ">
                <ul className="wd-navigation">
                    {
                        links.map((link, index) => (
                            <li key={index}
                                className={pathname.includes(link) ? "wd-active" : ""}>
                                <Link onClick={
                                    () => handleNav(link.toLowerCase())
                                } to={link}>{link}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="course-nav-small-screen d-md-none p-5 flex-grow-1 ">
                <ul className="h-100">
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
        </>
    );
}

export default CourseNavigation;