import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);

    return (
        <>
            <div className="
            flex-grow-1
            ">
                <div id="main-button-group" className="d-flex flex-row justify-content-end gap-2">
                    <button className="p-2">Collapse All</button>
                    <button className="p-2">View Progress</button>
                    <select name="Publish" id="Publish" className="p-2">
                        <option value="Publish All" selected>Publish All</option>
                        <option value="Publish">Publish</option>
                        <option value="Unpublish">Unpublish</option>
                    </select>
                    <button className="bg-danger text-white p-2 "><i className="fa fa-plus m-0 "></i> Module</button>
                    <button className="p-2"><i className="fa fa-ellipsis-v px-1" style={{ padding: "0%" }}></i></button>
                </div>
                {/* <!-- Add buttons here --> */}
                <ul className="list-group wd-modules">
                    {modulesList.map((module) => (
                        <li
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson) => (
                                        <li className="list-group-item">
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ModuleList;