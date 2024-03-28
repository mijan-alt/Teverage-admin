"use client"
import React from "react";

const page = () => {
  const quotations = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      number: "+1234567890",
      freightType: "Air Freight",
      departureCity: "New York",
      deliveryCity: "Los Angeles",
      weight: "500 lbs",
      height: "6 ft",
      radio: "Option A",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      number: "+9876543210",
      freightType: "Sea Freight",
      departureCity: "London",
      deliveryCity: "Sydney",
      weight: "1000 lbs",
      height: "5 ft",
      radio: "Option B",
    },
    {
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      number: "+1122334455",
      freightType: "Road Freight",
      departureCity: "Berlin",
      deliveryCity: "Paris",
      weight: "300 lbs",
      height: "4.5 ft",
      radio: "Option C",
    },
  ];

    return (
      <div className="side-app">
        {/* page-header */}
        <div className="page-header">
          <h1 className="page-title">Data Tables</h1>
          <div className="ml-auto">
            <div className="input-group">
              <a
                className="btn btn-primary btn-icon text-white mr-2"
                id="daterange-btn"
                data-toggle="tooltip"
                title=""
                data-placement="bottom"
                data-original-title="Calendar"
              >
                <span>
                  <i className="fe fe-calendar" />
                </span>
              </a>
              <a
                href="#"
                className="btn btn-secondary btn-icon mr-2"
                data-toggle="tooltip"
                title=""
                data-placement="bottom"
                data-original-title="Rating"
              >
                <span>
                  <i className="fe fe-star" />
                </span>
              </a>
              <a
                href="#"
                className="btn btn-success btn-icon mr-2"
                data-toggle="tooltip"
                title=""
                data-placement="bottom"
                data-original-title="Email"
              >
                <span>
                  <i className="fe fe-mail" />
                </span>
              </a>
              <a
                href="#"
                className="btn btn-warning btn-icon mr-2"
                data-toggle="tooltip"
                title=""
                data-placement="bottom"
                data-original-title="Chat"
              >
                <span>
                  <i className="fe fe-message-square" />
                </span>
              </a>
              <a
                href="#"
                className="btn btn-info btn-icon mr-2"
                data-toggle="tooltip"
                title=""
                data-placement="bottom"
                data-original-title="Add New"
              >
                <span>
                  <i className="fe fe-plus" />
                </span>
              </a>
              <a
                href="#"
                className="btn btn-danger btn-icon"
                data-toggle="tooltip"
                title=""
                data-placement="bottom"
                data-original-title="Support"
              >
                <span>
                  <i className="fe fe-help-circle" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">Vertical Scrollable Data Table</h3>
                </div>
                <div className="card-options">
                  <a
                    href=""
                    className="mr-4 text-default"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <span className="fe fe-more-horizontal fs-20" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right" role="menu">
                    <li>
                      <a href="#">
                        <i className="fe fe-eye mr-2" />
                        View
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fe fe-plus-circle mr-2" />
                        Add
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fe fe-trash-2 mr-2" />
                        Remove
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fe fe-download-cloud mr-2" />
                        Download
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fe fe-settings mr-2" />
                        More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div
                    id="example3_wrapper"
                    className="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="dataTables_length" id="example3_length">
                          <label>
                            Show{" "}
                            <select
                              name="example3_length"
                              aria-controls="example3"
                              className="custom-select custom-select-sm form-control form-control-sm"
                            >
                              <option value={10}>10</option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div id="example3_filter" className="dataTables_filter">
                          <label
                            data-dashlane-rid="a78cc79fd1b487b5"
                            data-form-type=""
                            data-dashlane-label="true"
                          >
                            Search:
                            <input
                              type="search"
                              className="form-control form-control-sm"
                              placeholder=""
                              aria-controls="example3"
                              data-dashlane-rid="b4d1aa3255af7ae1"
                              data-form-type=""
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          id="example3"
                          className="table table-striped table-bordered text-nowrap dataTable no-footer dtr-inline collapsed"
                          role="grid"
                          aria-describedby="example3_info"
                          style={{ width: 987 }}
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc"
                                tabIndex={0}
                                aria-controls="example3"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 88 }}
                                aria-sort="ascending"
                                aria-label="First name: activate to sort column descending"
                              >
                                Name
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example3"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 84 }}
                                aria-label="Last name: activate to sort column ascending"
                              >
                                Email
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example3"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 172 }}
                                aria-label="Position: activate to sort column ascending"
                              >
                                Phone Number
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example3"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 75 }}
                                aria-label="Office: activate to sort column ascending"
                              >
                                Freight type
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example3"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 32 }}
                                aria-label="Age: activate to sort column ascending"
                              >
                                Departure City
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example3"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 87 }}
                                aria-label="Start date: activate to sort column ascending"
                              >
                                Delivery City
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example3"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 61 }}
                                aria-label="Salary: activate to sort column ascending"
                              >
                                Weight
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example3"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 44 }}
                                aria-label="Extn.: activate to sort column ascending"
                              >
                                Height
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example3"
                                rowSpan={1}
                                colSpan={1}
                              
                               
                              >
                                Radio
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {quotations.map((quote, index) => (
                              <tr
                                key={index}
                                role="row"
                                className={index % 2 === 0 ? "even" : "odd"}
                              >
                                <td>{quote.name}</td>
                                <td>{quote.email}</td>
                                <td>{quote.number}</td>
                                <td>{quote.freightType}</td>
                                <td>{quote.departureCity}</td>
                                <td>{quote.deliveryCity}</td>
                                <td>{quote.weight}</td>
                                <td>{quote.height}</td>
                                <td>{quote.radio}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="example3_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 57 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="example3_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="example3_previous"
                            >
                              <a
                                href="#"
                                aria-controls="example3"
                                data-dt-idx={0}
                                tabIndex={0}
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="example3"
                                data-dt-idx={1}
                                tabIndex={0}
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example3"
                                data-dt-idx={2}
                                tabIndex={0}
                                className="page-link"
                              >
                                2
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example3"
                                data-dt-idx={3}
                                tabIndex={0}
                                className="page-link"
                              >
                                3
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example3"
                                data-dt-idx={4}
                                tabIndex={0}
                                className="page-link"
                              >
                                4
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example3"
                                data-dt-idx={5}
                                tabIndex={0}
                                className="page-link"
                              >
                                5
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example3"
                                data-dt-idx={6}
                                tabIndex={0}
                                className="page-link"
                              >
                                6
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next"
                              id="example3_next"
                            >
                              <a
                                href="#"
                                aria-controls="example3"
                                data-dt-idx={7}
                                tabIndex={0}
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Row */}
      </div>
    );
};

export default page;
