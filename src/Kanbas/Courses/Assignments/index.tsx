import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, 
    FaList, FaCaretDown, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);

    return (
        <>
            <div className="d-flex flex-md-row flex-column justify-content-start justify-content-md-between align-items-md-center align-items-start gap-4 ">
                <input className="assignment-search-input" type="text" placeholder="Search for Assignments" />
                <div className="assiginments-button-grp d-flex gap-2 ">
                    <button className="p-2 px-4">
                        <FaPlus />
                        Group
                    </button>
                    <button className="add-assignment p-2 px-4">
                        <FaPlus />
                        Assignment
                    </button>
                    <button className="p-2">
                        <FaEllipsisV />
                    </button>
                </div>
            </div>
            <hr />
            {/* {< !--Add buttons and other fields here -->} */}
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div className="d-flex flex-row justify-content-between align-items-center p-2">
                        <div className="d-flex flex-row justify-content-between align-items-center gap-2">
                            <FaEllipsisV />
                            <FaCaretDown />
                            <h3 className="fs-5 fw-bold ">
                                Assignments
                            </h3>
                        </div>
                        <span className="float-end d-flex justify-content-center align-items-center gap-2">
                            <div className="
                                            p-2
                                            border
                                            border-1
                                            rounded-4
                                            ">
                                40% of Total
                            </div>
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle />
                            <FaEllipsisV />
                        </span>
                    </div>

                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="d-flex flex-row flex-grow-1 w-100 justify-content-between align-items-center p-2 px-2 bg-white ">
                                <div className="d-flex flex-row justify-content-center align-items-center gap-4">
                                    <FaEllipsisV />
                                    <FaList />
                                    <div className="assignment-title-link d-flex flex-column">
                                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                        <span>{
                                            assignment.due ? "Due " + assignment.due : "No due date"
                                        } | 100 pts </span>
                                    </div>
                                </div>
                                <span className="d-flex flex-row gap-2 align-items-center ">
                                    <FaCheckCircle className="text-success" />
                                    <a href="/kanbas/courses/assignments/Edit/screen.html" style={{
                                        color: "black"
                                    }}>
                                        <FaEllipsisV />
                                    </a>
                                </span>
                            </li>
                        ))
                        }
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Assignments;