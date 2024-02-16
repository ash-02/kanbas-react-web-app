import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <h1>Grades</h1>
            {/* <div className="table-responsive"> */}
            <div className="flex-fill flex-grow-1 p-2 w-md-100 w-100">
                <div className="d-flex flex-column flex-grow-1 gap-2 ">
                    <div className="additional-button-grp">
                        <div className="float-end ">
                            <button>
                                <i className="
                                    fa fa-file
                                    "></i>
                                Import
                            </button>
                            <button>
                                <i className="
                                    fa fa-file
                                    "></i>
                                Export
                                <i className="
                                    fa fa-caret-down
                                    "></i>
                            </button>
                            <button>
                                <i className="
                                    fa fa-cogs
                                    "></i>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex flex-column w-100 flex-md-row justify-content-start align-items-md-center align-items-start gap-4  w-100 ">
                        <div className="input-groups flex-grow-1 d-flex flex-column ">
                            <label htmlFor="student">
                                <h6>
                                    Student Names
                                </h6>
                            </label>
                            <div className="input-group mb-3 ">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1">
                                    <i className="fa fa-search"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Search Students" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="input-groups flex-grow-1 ">
                            <label htmlFor="student">
                                <h6>
                                    Assignment Names
                                </h6>
                            </label>
                            <div className="input-group mb-3 ">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1">
                                    <i className="fa fa-search"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Search Students" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className="additional-button-grp" style={{
                        float: "left",
                    }}>
                        <button>
                            <i className="
                                fa fa-filter
                                "></i>
                            Apply Filters
                        </button>
                    </div>
                </div>
                <hr />
                <div className="gradesTable w-100 ">
                    <table>
                        <thead>
                            <th>
                                Student Name
                            </th>
                            {as.map((assignment) => (<th>{assignment.title}</th>))}
                        </thead>
                        {/* <tbody>
                                <tr>
                                    <td>
                                        <p>
                                            John Doe
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Alice Wonderland
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Princess Leia
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Luke Skywalker
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Han Solo
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Lando Calrissian
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            John Doe
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Alice Wonderland
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Princess Leia
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Luke Skywalker
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Han Solo
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            Lando Calrissian
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="97"
                                            style="width: 50%; text-align: center;">
                                    </td>
                                    <td>
                                        <p>
                                            10%
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            100%
                                        </p>
                                    </td>
                                </tr>
                            </tbody> */}
                        {/* <tbody>
                            {es.map((enrollment) => {
                                const user = users.find((user) => user._id === enrollment.user);
                                return (
                                    <tr>
                                        <td>{user?.firstName} {user?.lastName}</td>
                                        {assignments.map((assignment) => {
                                            const grade = grades.find(
                                                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                            return (<td>{grade?.grade || ""}</td>);
                                        })}
                                    </tr>);
                            })}
                        </tbody> */}
                        <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
            {/* <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {as.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table> */}
        </div>
        // </div>
    );
}

export default Grades;