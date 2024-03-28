import React from "react";

const page = () => {
  return (
    <div>
      {/* page-header */}
      <div className="page-header">
        <h1 className="page-title">
          <span className="subpage-title">Welcome To</span> Logistics Dashboard
        </h1>
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
              {" "}
              <span>
                <i className="fe fe-help-circle" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* End page-header */}
      {/* Row */}
      <div className="row">
        <div className="col-sm-6 col-lg-6 col-xl-3">
          <div className="card text-center">
            <div className="card-body">
              <h6 className="mb-3">Total Revenue</h6>
              <h2 className="mb-2 number-font">
                <i className="zmdi zmdi-compass text-primary mr-2" />
                $2,891
              </h2>
              <p className="mb-0 text-muted">
                <span className="text-danger">
                  <i className="fa fa-chevron-circle-down text-danger ml-1" />{" "}
                  -1.6%
                </span>
                last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6 col-xl-3">
          <div className="card text-center">
            <div className="card-body">
              <h6 className="mb-3">Total Profit</h6>
              <h2 className="mb-2 number-font">
                <i className="zmdi zmdi-chart text-secondary mr-2" />
                $2,892
              </h2>
              <p className="mb-0 text-muted">
                <span className="text-danger">
                  <i className="fa fa-chevron-circle-down text-danger ml-1" />{" "}
                  -0.6%
                </span>
                last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6 col-xl-3">
          <div className="card text-center">
            <div className="card-body">
              <h6 className="mb-3">Total Cost</h6>
              <h2 className="mb-2 number-font">
                <i className="mdi mdi-cash-multiple text-success mr-2" />
                $12,789
              </h2>
              <p className="mb-0 text-muted">
                <span className="text-success">
                  <i className="fa fa-chevron-circle-up text-success ml-1" />{" "}
                  +0.16%
                </span>
                last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6 col-xl-3">
          <div className="card text-center">
            <div className="card-body">
              <h6 className="mb-3">Total Shipments</h6>
              <h2 className="mb-2 number-font">
                <i className="mdi mdi-truck  text-warning mr-2" />
                679
              </h2>
              <p className="mb-0 text-muted">
                <span className="text-success">
                  <i className="fa fa-chevron-circle-up text-success ml-1" />{" "}
                  +0.2%
                </span>
                last month
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Row */}
      {/* Row */}
      <div className="row">
        <div className="col-md-12 col-lg-12 col-xl-8">
          <div className="card overflow-hidden">
            <div className="card-header">
              <div>
                <h3 className="card-title">Delivery Status</h3>
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
              <div className="">
                <div
                  className="chartjs-size-monitor"
                  style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                    visibility: "hidden",
                    zIndex: -1,
                  }}
                >
                  <div
                    className="chartjs-size-monitor-expand"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                      pointerEvents: "none",
                      visibility: "hidden",
                      zIndex: -1,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: 1000000,
                        height: 1000000,
                        left: 0,
                        top: 0,
                      }}
                    />
                  </div>
                  <div
                    className="chartjs-size-monitor-shrink"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                      pointerEvents: "none",
                      visibility: "hidden",
                      zIndex: -1,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "200%",
                        height: "200%",
                        left: 0,
                        top: 0,
                      }}
                    />
                  </div>
                </div>
                <canvas
                  id="delivery-status"
                  className="h-270 chartjs-render-monitor"
                  style={{ display: "block", width: 635, height: 270 }}
                  width={635}
                  height={270}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-12 col-xl-4">
          <div className="card overflow-hidden">
            <div className="card-header">
              <div>
                <h3 className="card-title">Warehouse Operating Costs</h3>
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
            <div className="card-body p-0">
              <div className="list-group projects-list">
                <a
                  href="#"
                  className="list-group-item list-group-item-action flex-column align-items-start border-0"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-sembold text-dark">
                      Order Picking
                    </h6>
                    <h6 className="text-dark mb-0 font-weight-sembold text-dark">
                      3,876
                    </h6>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted">
                      <i className="fe fe-arrow-down text-success " /> 03% last
                      month
                    </span>
                    <span className="text-muted">5 days ago</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-left-0 border-right-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-sembold text-dark">
                      Storage
                    </h6>
                    <h6 className="text-dark mb-0 font-weight-sembold text-dark">
                      2,178
                    </h6>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted">
                      <i className="fe fe-arrow-down text-danger " /> 16% last
                      month
                    </span>
                    <span className="text-muted">2 days ago</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-left-0 border-right-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-sembold text-dark">
                      Shipping
                    </h6>
                    <h6 className="text-dark mb-0 font-weight-sembold text-dark">
                      1,367
                    </h6>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted">
                      <i className="fe fe-arrow-up text-success" /> 06% last
                      month
                    </span>
                    <span className="text-muted">1 days ago</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-left-0 border-right-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-sembold text-dark">
                      Receiving
                    </h6>
                    <h6 className="text-dark mb-0 font-weight-sembold text-dark">
                      678
                    </h6>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted">
                      <i className="fe fe-arrow-down text-danger " /> 25% last
                      month
                    </span>
                    <span className="text-muted">10 days ago</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-left-0 border-right-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-sembold text-dark">
                      Other
                    </h6>
                    <h6 className="text-dark mb-0 font-weight-sembold text-dark">
                      5,678
                    </h6>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted">
                      <i className="fe fe-arrow-up text-success " /> 16% last
                      month
                    </span>
                    <span className="text-muted">5 days ago</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Row */}
      {/* Row */}
      <div className="row">
        <div className="col-md-12 col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-widget">
                <div className="row">
                  <div className="col-6">
                    <h6 className="mb-2">Inventory To Sales</h6>
                    <h2 className="text-left fs-30 mb-3 number-font">
                      <span className="num-font">5,758</span>
                    </h2>
                  </div>
                  <div className="col-6">
                    <div className="float-right text-right">
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
                        <ul
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        >
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
                  </div>
                </div>
              </div>
              <p className="mt-1 text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua nisi
                ut aliquip Lorem ipsum dolor sit Neque porro .
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card-widget mb-5 mb-md-0">
                    <div className="mb-1">
                      <div className="clearfix">
                        <div className="float-left">
                          <strong className="h4 font-weight-bold num-font">
                            657
                          </strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted h6">This week</small>
                        </div>
                      </div>
                    </div>
                    <div className="progress progress-sm mt-0 mb-2 h-1">
                      <div
                        className="progress-bar bg-primary w-45"
                        role="progressbar"
                      />
                    </div>
                    <div className="text-muted">
                      <i className="fa fa-caret-up text-success" /> 10% decrease
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card-widget">
                    <div className="mb-1">
                      <div className="clearfix">
                        <div className="float-left">
                          <strong className="h4 font-weight-bold num-font">
                            592
                          </strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted h6">This month</small>
                        </div>
                      </div>
                    </div>
                    <div className="progress progress-sm mt-0 mb-2 h-1">
                      <div
                        className="progress-bar bg-secondary w-45"
                        role="progressbar"
                      />
                    </div>
                    <div className="text-muted">
                      <i className="fa fa-caret-down text-danger" /> 14%
                      increases
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-widget">
                <div className="row">
                  <div className="col-6">
                    <h6 className="mb-2">Inventory Turnover</h6>
                    <h2 className="text-left fs-30 mb-3 number-font">
                      <span className="num-font">30.89</span>
                    </h2>
                  </div>
                  <div className="col-6">
                    <div className="float-right text-right">
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
                        <ul
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        >
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
                  </div>
                </div>
              </div>
              <p className="mt-1 text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua nisi
                ut aliquip Lorem ipsum dolor sit Neque porro .
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card-widget mb-5 mb-md-0">
                    <div className="mb-1">
                      <div className="clearfix">
                        <div className="float-left">
                          <strong className="h4 font-weight-bold num-font">
                            4.9
                          </strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted h6">This week</small>
                        </div>
                      </div>
                    </div>
                    <div className="progress progress-sm mt-0 mb-2 h-1">
                      <div
                        className="progress-bar bg-success w-45"
                        role="progressbar"
                      />
                    </div>
                    <div className="text-muted">
                      <i className="fa fa-caret-up text-success" /> 09% decrease
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card-widget">
                    <div className="mb-1">
                      <div className="clearfix">
                        <div className="float-left">
                          <strong className="h4 font-weight-bold num-font">
                            9.2
                          </strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted h6">This month</small>
                        </div>
                      </div>
                    </div>
                    <div className="progress progress-sm mt-0 mb-2 h-1">
                      <div
                        className="progress-bar bg-warning w-45"
                        role="progressbar"
                      />
                    </div>
                    <div className="text-muted">
                      <i className="fa fa-caret-down text-danger" /> 11%
                      increases
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Row */}
      {/* Row */}
      <div className="row">
        <div className="col-md-12 col-lg-12 col-xl-4">
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Deliveries by Country</h3>
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
              <div className="mb-5">
                <p className="mb-2">
                  Australia<span className="float-right text-muted">65%</span>
                </p>
                <div className="progress progress-sm  h-2">
                  <div
                    className="progress-bar bg-primary w-65"
                    role="progressbar"
                  />
                </div>
              </div>
              <div className="mb-5">
                <p className="mb-2">
                  Brazil<span className="float-right text-muted">70%</span>
                </p>
                <div className="progress h-2">
                  <div
                    className="progress-bar bg-secondary w-70"
                    role="progressbar"
                  />
                </div>
              </div>
              <div className="mb-5">
                <p className="mb-2">
                  Canada<span className="float-right text-muted">40%</span>
                </p>
                <div className="progress progress-sm  h-2">
                  <div
                    className="progress-bar bg-info w-40"
                    role="progressbar"
                  />
                </div>
              </div>
              <div className="mb-5">
                <p className="mb-2">
                  Germany<span className="float-right text-muted">80%</span>
                </p>
                <div className="progress progress-sm  h-2">
                  <div
                    className="progress-bar bg-danger w-80"
                    role="progressbar"
                  />
                </div>
              </div>
              <div className="mb-5">
                <p className="mb-2">
                  Denmark<span className="float-right text-muted">50%</span>
                </p>
                <div className="progress progress-sm  h-2">
                  <div
                    className="progress-bar bg-warning w-50"
                    role="progressbar"
                  />
                </div>
              </div>
              <div className="mb-0">
                <p className="mb-2">
                  France<span className="float-right text-muted">60%</span>
                </p>
                <div className="progress progress-sm  h-2">
                  <div
                    className="progress-bar bg-success w-60"
                    role="progressbar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-12 col-xl-8">
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Order Details</h3>
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
                <table className="table table-bordered  mb-0 text-nowrap">
                  <thead>
                    <tr>
                      <th />
                      <th>Customer</th>
                      <th>Order ID</th>
                      <th>Order Date</th>
                      <th>Order Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="/assets/images/users/female/1.jpg"
                          className="avatar brround"
                          alt=""
                        />
                      </td>
                      <td>Emily Poole</td>
                      <td>PRO12345</td>
                      <td>Online Payment</td>
                      <td>
                        <span className="badge badge-success">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/assets/images/users/female/3.jpg"
                          className="avatar brround"
                          alt=""
                        />
                      </td>
                      <td>Sarah Alsop</td>
                      <td>PRO23457</td>
                      <td>Cash on delivered</td>
                      <td>
                        <span className="badge badge-secondary">
                          Delivering
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/assets/images/users/male/4.jpg"
                          className="avatar brround"
                          alt=""
                        />
                      </td>
                      <td>Ruth Hart</td>
                      <td>PRO94567</td>
                      <td>Online Payment</td>
                      <td>
                        <span className="badge badge-danger">Shipped</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/assets/images/users/female/5.jpg"
                          className="avatar brround"
                          alt=""
                        />
                      </td>
                      <td>Peter Ince</td>
                      <td>PRO56789</td>
                      <td>Cash on delivered</td>
                      <td>
                        <span className="badge badge-primary">Add Cart</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/assets/images/users/male/6.jpg"
                          className="avatar brround"
                          alt=""
                        />
                      </td>
                      <td>Sophie Ross</td>
                      <td>PRO30978</td>
                      <td>Online Payment</td>
                      <td>
                        <span className="badge badge-danger">Shipped</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
