import React from 'react'

const StatusBar = () => {
    return (
        <>
            <div className="flex-grow-0 mt-2 d-none d-lg-block p-2" style={{
                width: "250px",
            }}>
                <h3 style={{
                    fontSize: "1.5rem",
                }}>Course Status</h3>
                <div className="course-status-button-group w-100 d-flex flex-row">
                    <button className="w-100 p-2 ">
                        <i className="fa fa-ban"></i>
                        Unpublish
                    </button>
                    <button className="w-100 p-2 ">
                        <i className="fa fa-check"></i>
                        Published
                    </button>
                </div>
                <ul className="
                      course-status-list d-flex flex-column w-100 p-0 gap-1 mt-3 fs-6
                      ">
                    <li className="w-100 p-2"><a href="#">
                        <i className="fa-solid fa-file-import"></i>
                        Import Existing Content</a></li>
                    <li className="w-100 p-2"><a href="#">
                        <i className="
                            fa fa-upload
                            "></i>
                        Import from Commons</a></li>
                    <li className="w-100 p-2"><a href="#">
                        <i className="
                            fa fa-home
                            "></i>
                        Choose Home Page</a></li>
                    <li className="w-100 p-2"><a href="#">
                        <i className="
                            fa fa-comments
                            "></i>
                        View Course Stream</a></li>
                    <li className="w-100 p-2"><a href="#">
                        <i className="
                            fa fa-bullhorn
                            "></i>
                        New Announcement</a></li>
                    <li className="w-100 p-2"><a href="#">
                        <i className="
                            fa fa-chart-line
                            "></i>
                        New Analytics</a></li>
                    <li className="w-100 p-2"><a href="#">
                        <i className="
                            fa fa-bell
                            "></i>
                        Course Notifications</a></li>
                </ul>
                <br />
                    <div>
                        <div>
                            <div className="
                            d-flex flex-row justify-content-between
                            ">
                                <h2 className="fs-6 fw-bold m-0 text-center ">
                                    To Do
                                </h2>
                            </div>
                            <hr className="m-0 " />
                                <ul className="comming-up-list" style={{
                                    paddingLeft: "0px",
                                }}>
                                    <li className="d-flex gap-2 pt-2 ">
                                        <i className="
                                    fa fa-check-circle
                                    pt-2 text-red" style={{
                                        color: "#D41B2C",
                                    }}></i>
                                        <div className="d-flex flex-column gap-0 ">
                                            <a href="#" className="p-0 ">
                                                Grade A1 - ENV + HTML
                                            </a>
                                            <span>
                                                100pts | Sep 7 at 6:00pm
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                        </div>
                        <br />
                            <div>
                                <div className="
                            d-flex flex-row justify-content-between
                            ">
                                    <h2 className="fs-6 fw-bold m-0 text-center ">
                                        Comming Up
                                    </h2>
                                    <a href="#" style={{
                                        textDecoration: "none",
                                        color: "#D41B2C",
                                    }}>
                                        <i className="
                                    fa fa-calendar
                                    " style={{
                                        color: "#9c9c9c",
                                    }}></i>
                                        View Calendar
                                    </a>
                                </div>
                                <hr className="m-0 " />
                                    <ul className="comming-up-list d-flex flex-column gap-2 pt-2 " style={{
                                        paddingLeft: "0px",
                                    }}>
                                        <li className="d-flex gap-2 ">
                                            <i className="fa fa-calendar pt-2 "></i>
                                            <div className="d-flex flex-column gap-0 ">
                                                <a href="#" className="p-0 ">
                                                    CS5610.12631.2024
                                                </a>
                                                <span>
                                                    Sep 7 at 6:00pm
                                                </span>
                                            </div>
                                        </li>
                                        <li className="d-flex gap-2">
                                            <i className="fa fa-calendar pt-2 "></i>
                                            <div className="d-flex flex-column gap-0 ">
                                                <a href="#" className="p-0 ">
                                                    CS5610.12631.2024
                                                </a>
                                                <span>
                                                    Sep 9 at 6:00pm
                                                </span>
                                            </div>
                                        </li>
                                        <li className="d-flex gap-2">
                                            <i className="fa fa-calendar pt-2 "></i>
                                            <div className="d-flex flex-column gap-0 ">
                                                <a href="#" className="p-0 ">
                                                    CS5610.12631.2024
                                                </a>
                                                <span>
                                                    Sep 14 at 6:00pm
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                            </div>
                    </div>
            </div>
        </>
    )
}

export default StatusBar