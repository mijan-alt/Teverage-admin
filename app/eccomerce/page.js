import React from "react";

const page = () => {
  return (
    <div className="">
      {/* page-header */}
      <div className="page-header">
        <h1 className="page-title">
          <span className="subpage-title">Welcome To</span> E-Commerce Dashboard
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
              data-placement="top"
              data-original-title="Support"
            >
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
        <div className="col-sm-6 col-md-12 col-lg-6 col-xl-3">
          <div className="card">
            <div className="card-header">
              <div className="d-flex">
                <span className="avatar mr-3 br-3 align-self-center avatar-sm cover-image bg-primary-transparent text-primary">
                  <i className="fe fe-briefcase" />
                </span>
                <h3 className="card-title mt-1">Orders</h3>
              </div>
            </div>
            <div className="card-body">
              <div>
                <p className="card-text text-muted mb-1">Total Orders</p>
                <h2 className="mb-2 number-font">78,765</h2>
                <div className="progress progress-md h-1 mb-1">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-60" />
                </div>
                <small className="text-muted">
                  <span className="text-success font-weight-semibold">
                    <i className="fe fe-arrow-up mr-1" />
                    1.87%
                  </span>{" "}
                  this month
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6 col-xl-3">
          <div className="card">
            <div className="card-header">
              <div className="d-flex">
                <span className="avatar mr-3 br-3 align-self-center avatar-sm cover-image bg-secondary-transparent text-secondary">
                  <i className="fe fe-shopping-cart" />
                </span>
                <h3 className="card-title mt-1">Products</h3>
              </div>
            </div>
            <div className="card-body">
              <div>
                <p className="card-text text-muted mb-1">Total Orders</p>
                <h2 className="mb-2 number-font">1,256,789</h2>
                <div className="progress progress-md h-1 mb-1">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary w-40" />
                </div>
                <small className="text-muted">
                  <span className="text-danger font-weight-semibold">
                    <i className="fe fe-arrow-down mr-1" />
                    0.67%
                  </span>{" "}
                  this month
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6 col-xl-3">
          <div className="card">
            <div className="card-header">
              <div className="d-flex">
                <span className="avatar mr-3 br-3 align-self-center avatar-sm cover-image bg-success-transparent text-success">
                  <i className="fe fe-dollar-sign" />
                </span>
                <h3 className="card-title mt-1">Returns</h3>
              </div>
            </div>
            <div className="card-body">
              <div>
                <p className="card-text text-muted mb-1">Total Returns</p>
                <h2 className="mb-2 number-font">5,789</h2>
                <div className="progress progress-md h-1 mb-1">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-success w-20" />
                </div>
                <small className="text-muted">
                  <span className="text-danger font-weight-semibold">
                    <i className="fe fe-arrow-down mr-1" />
                    0.12%
                  </span>{" "}
                  this month
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6 col-xl-3">
          <div className="card">
            <div className="card-header">
              <div className="d-flex">
                <span className="avatar mr-3 br-3 align-self-center avatar-sm cover-image bg-warning-transparent text-warning">
                  <i className="fe fe-eye" />
                </span>
                <h3 className="card-title mt-1">Visitors</h3>
              </div>
            </div>
            <div className="card-body">
              <div>
                <p className="card-text text-muted mb-1">Total Visitors</p>
                <h2 className="mb-2 number-font">23,678</h2>
                <div className="progress progress-md h-1 mb-1">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning w-70" />
                </div>
                <small className="text-muted">
                  <span className="text-success font-weight-semibold">
                    <i className="fe fe-arrow-up mr-1" />
                    1.67%
                  </span>{" "}
                  this month
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Row */}
      {/* Row */}
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
          <div className="card overflow-hidden">
            <div className="card-header cards-tabs-option">
              <div>
                <h3 className="card-title">Order Summary</h3>
              </div>
              <div className="card-options">
                <div className="tab-menu-heading card-tabs-heading">
                  <div className="tabs-menu card-tabs-menu">
                    <ul className="nav card-navs">
                      <li>
                        <a
                          href="#tab-session1"
                          className="active"
                          data-toggle="tab"
                        >
                          Month
                        </a>
                      </li>
                      <li>
                        <a href="#tab-session2" data-toggle="tab">
                          Year
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div>
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
                  id="order-summary"
                  className="chartwidget chartjs-render-monitor"
                  style={{ display: "block", width: 635, height: 272 }}
                  width={635}
                  height={272}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Order Activity</h3>
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
              <div className="list-group projects-list pt-0 pb-0 pl-0 pr-0">
                <a
                  href="#"
                  className="list-group-item list-group-item-action flex-column align-items-start border-0"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-semibold ">
                      Order Picking
                    </h6>
                    <h6 className="mb-0 font-weight-semibold text-dark">
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
                    <h6 className="mb-1 font-weight-semibold ">Storage</h6>
                    <h6 className="mb-0 font-weight-semibold text-dark">
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
                    {" "}
                    <h6 className="mb-1 font-weight-semibold ">Shipping</h6>
                    <h6 className="mb-0 font-weight-semibold text-dark">
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
                    <h6 className="mb-1 font-weight-semibold ">Receiving</h6>
                    <h6 className="mb-0 font-weight-semibold text-dark">678</h6>
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
                    <h6 className="mb-1 font-weight-semibold ">Other</h6>
                    <h6 className="mb-0 font-weight-semibold text-dark">
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
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Recently Viewed</h3>
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
              <div
                id="myCarousel1"
                className="owl-carousel owl-carousel-icons owl-loaded owl-drag"
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-964px, 0px, 0px)",
                      transition: "all 0.25s ease 0s",
                      width: 1930,
                    }}
                  >
                    <div
                      className="owl-item cloned"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/5.png" alt="" />
                            <div className="memmbername">
                              Kids Wear
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-o"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/4.png" alt="" />
                            <div className="memmbername">
                              Hand Bags
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-half-full"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/1.png" alt="" />
                            <div className="memmbername">
                              Office Chair
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-o"> </i>
                                <i className="fa fa-star-o"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/2.png" alt="" />
                            <div className="memmbername">
                              Mens Wear
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-half-full"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/9.png" alt="" />
                            <div className="memmbername">
                              Electronics
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-o"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/3.png" alt="" />
                            <div className="memmbername">
                              Accessories
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-half-full"> </i>
                                <i className="fa fa-star-o"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/5.png" alt="" />
                            <div className="memmbername">
                              Kids Wear
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-o"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/4.png" alt="" />
                            <div className="memmbername">
                              Hand Bags
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-half-full"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/1.png" alt="" />
                            <div className="memmbername">
                              Office Chair
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-o"> </i>
                                <i className="fa fa-star-o"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/2.png" alt="" />
                            <div className="memmbername">
                              Mens Wear
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-half-full"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/9.png" alt="" />
                            <div className="memmbername">
                              Electronics
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-o"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "135.833px", marginRight: 25 }}
                    >
                      <div className="item">
                        <div className="memberblock mb-0">
                          <a href="" className="member">
                            {" "}
                            <img src="/assets/images/products/3.png" alt="" />
                            <div className="memmbername">
                              Accessories
                              <p className="text-warning mb-0">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star-half-full"> </i>
                                <i className="fa fa-star-o"> </i>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
          <div className="card overflow-hidden">
            <div className="card-header">
              <div>
                <h3 className="card-title">Products Categories</h3>
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
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <div id="categroies" className="h-200">
                    <svg
                      height={200}
                      version="1.1"
                      width={217}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        left: "-0.5px",
                        top: "-0.140625px",
                      }}
                    >
                      <desc
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        Created with Raphaël 2.2.0
                      </desc>
                      <defs
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="none"
                        stroke="#5964ff"
                        d="M108.375,160A60,60,0,0,0,159.02754037090398,67.83915184616637"
                        strokeWidth={2}
                        opacity={1}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          opacity: 1,
                        }}
                      />
                      <path
                        fill="#5964ff"
                        stroke="#77778e"
                        d="M108.375,163A63,63,0,0,0,161.56016738944916,66.23110943847469L184.35381055635594,51.75872776924956A90,90,0,0,1,108.375,190Z"
                        strokeOpacity="0.2"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="none"
                        stroke="#ff5964"
                        d="M159.02754037090398,67.83915184616637A60,60,0,0,0,77.28034596148149,48.68604000639939"
                        strokeWidth={2}
                        opacity={0}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          opacity: 0,
                        }}
                      />
                      <path
                        fill="#ff5964"
                        stroke="#77778e"
                        d="M161.56016738944916,66.23110943847469A63,63,0,0,0,75.72561325955556,46.12034200671936L64.32424011209878,27.30522334239913A85,85,0,0,1,180.13276552544727,54.438798448735696Z"
                        strokeOpacity="0.2"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="none"
                        stroke="#17d092"
                        d="M77.28034596148149,48.68604000639939A60,60,0,0,0,48.49303401803312,96.23833146933949"
                        strokeWidth={2}
                        opacity={0}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          opacity: 0,
                        }}
                      />
                      <path
                        fill="#17d092"
                        stroke="#77778e"
                        d="M75.72561325955556,46.12034200671936A63,63,0,0,0,45.49893571893478,96.05024804280646L23.542214858880257,94.67096958156428A85,85,0,0,1,64.32424011209878,27.30522334239913Z"
                        strokeOpacity="0.2"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="none"
                        stroke="#fda008"
                        d="M48.49303401803312,96.23833146933949A60,60,0,0,0,71.10324105076361,147.01931501872414"
                        strokeWidth={2}
                        opacity={0}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          opacity: 0,
                        }}
                      />
                      <path
                        fill="#fda008"
                        stroke="#77778e"
                        d="M45.49893571893478,96.05024804280646A63,63,0,0,0,69.2396531033018,149.37028076966035L55.573341488581804,166.61069627652589A85,85,0,0,1,23.542214858880257,94.67096958156428Z"
                        strokeOpacity="0.2"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="none"
                        stroke="#3ec7e8"
                        d="M71.10324105076361,147.01931501872414A60,60,0,0,0,108.35615044438848,159.9999970391187"
                        strokeWidth={2}
                        opacity={0}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          opacity: 0,
                        }}
                      />
                      <path
                        fill="#3ec7e8"
                        stroke="#77778e"
                        d="M69.2396531033018,149.37028076966035A63,63,0,0,0,108.3552079666079,162.99999689107466L108.34829646288368,184.99999580541817A85,85,0,0,1,55.573341488581804,166.61069627652589Z"
                        strokeOpacity="0.2"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="108.375"
                        y={90}
                        textAnchor="middle"
                        fontFamily='"Arial"'
                        fontSize="15px"
                        stroke="none"
                        fill="#000000"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          fontFamily: "Arial",
                          fontSize: 15,
                          fontWeight: 800,
                        }}
                        fontWeight={800}
                        transform="matrix(1.3636,0,0,1.3636,-39.4091,-36.7273)"
                        strokeWidth="0.7333333333333334"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy={6}
                        >
                          Mens
                        </tspan>
                      </text>
                      <text
                        x="108.375"
                        y={110}
                        textAnchor="middle"
                        fontFamily='"Arial"'
                        fontSize="14px"
                        stroke="none"
                        fill="#000000"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          fontFamily: "Arial",
                          fontSize: 14,
                        }}
                        transform="matrix(1.25,0,0,1.25,-27.0938,-25.5)"
                        strokeWidth="0.8"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy={5}
                        >
                          35%
                        </tspan>
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="mb-3">
                    <h5 className="mb-2 d-block">
                      <span className="fs-12">Mens</span>
                      <span className="float-right fs-12">
                        <b>1,234</b>
                        <span className="text-muted ml-1">(40%)</span>
                      </span>
                    </h5>
                    <div className="progress progress-md h-1">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-40" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-2 d-block">
                      <span className="fs-12">Womens</span>
                      <span className="float-right fs-12">
                        <b>1,234</b>
                        <span className="text-muted ml-1">(40%)</span>
                      </span>
                    </h5>
                    <div className="progress progress-md h-1">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary w-40" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-2 d-block">
                      <span className="fs-12">Electronics</span>
                      <span className="float-right fs-12">
                        <b>1,234</b>
                        <span className="text-muted ml-1">(40%)</span>
                      </span>
                    </h5>
                    <div className="progress progress-md h-1">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success w-40" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-2 d-block">
                      <span className="fs-12">Baby&amp; Kids </span>
                      <span className="float-right fs-12">
                        <b>1,234</b>
                        <span className="text-muted ml-1">(40%)</span>
                      </span>
                    </h5>
                    <div className="progress progress-md h-1">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning w-40" />
                    </div>
                  </div>
                  <div className="mb-0">
                    <h5 className="mb-2 d-block">
                      <span className="fs-12">Home &amp; Furniture </span>
                      <span className="float-right fs-12">
                        <b>1,234</b>
                        <span className="text-muted ml-1">(40%)</span>
                      </span>
                    </h5>
                    <div className="progress progress-md h-1">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info w-40" />
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
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="card overflow-hidden">
            <div className="card-header cards-tabs-option">
              <div>
                <h3 className="card-title">Return Item Reasons</h3>
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
              <div className="row text-center">
                <div className=" col-xl-3 col-sm-6 mb-5 mb-xl-0">
                  <p className="data-attributes mb-3">
                    <span
                      data-peity='{ "fill": ["#ff5964", "rgba(119, 119, 142, 0.2)"],   "innerRadius": 18, "radius": 28 }'
                      style={{ display: "none" }}
                    >
                      2/7
                    </span>
                    <svg className="peity" height={56} width={56}>
                      <path
                        d="M 28 0 A 28 28 0 0 1 55.29798154109106 34.2305861507768 L 45.54870241927283 32.00537681121366 A 18 18 0 0 0 28 10"
                        fill="#ff5964"
                      />
                      <path
                        d="M 55.29798154109106 34.2305861507768 A 28 28 0 1 1 27.999999999999996 0 L 27.999999999999996 10 A 18 18 0 1 0 45.54870241927283 32.00537681121366"
                        fill="rgba(119, 119, 142, 0.2)"
                      />
                    </svg>
                  </p>
                  <h3 className="mb-0 number-font1">37</h3>
                  <p className="text-muted mb-0">Defective Items</p>
                </div>
                <div className=" col-xl-3 col-sm-6  mb-5 mb-xl-0">
                  <p className="data-attributes mb-3">
                    <span
                      data-peity='{ "fill": ["#17d092", "rgba(119, 119, 142, 0.2)"],   "innerRadius": 18, "radius": 28 }'
                      style={{ display: "none" }}
                    >
                      5/7
                    </span>
                    <svg className="peity" height={56} width={56}>
                      <path
                        d="M 28 0 A 28 28 0 1 1 0.7020184589089382 34.23058615077681 L 10.451297580727175 32.00537681121366 A 18 18 0 1 0 28 10"
                        fill="#17d092"
                      />
                      <path
                        d="M 0.7020184589089382 34.23058615077681 A 28 28 0 0 1 27.999999999999996 0 L 27.999999999999996 10 A 18 18 0 0 0 10.451297580727175 32.00537681121366"
                        fill="rgba(119, 119, 142, 0.2)"
                      />
                    </svg>
                  </p>
                  <h3 className="mb-0 number-font1">55</h3>
                  <p className="text-muted mb-0">Damaged Items</p>
                </div>
                <div className=" col-xl-3 col-sm-6 mb-5 mb-xl-0 mb-md-0">
                  <p className="data-attributes mb-3">
                    <span
                      data-peity='{ "fill": ["#fda008", "rgba(119, 119, 142, 0.2)"],   "innerRadius": 18, "radius": 28 }'
                      style={{ display: "none" }}
                    >
                      4/9
                    </span>
                    <svg className="peity" height={56} width={56}>
                      <path
                        d="M 28 0 A 28 28 0 0 1 37.57656401311873 54.311393382005434 L 34.15636257986204 44.91446717414635 A 18 18 0 0 0 28 10"
                        fill="#fda008"
                      />
                      <path
                        d="M 37.57656401311873 54.311393382005434 A 28 28 0 1 1 27.999999999999996 0 L 27.999999999999996 10 A 18 18 0 1 0 34.15636257986204 44.91446717414635"
                        fill="rgba(119, 119, 142, 0.2)"
                      />
                    </svg>
                  </p>
                  <h3 className="mb-0 number-font1">45</h3>
                  <p className="text-muted mb-0">Late Delivery</p>
                </div>
                <div className=" col-xl-3 col-sm-6  mb-5 mb-xl-0 mb-md-0 mb-sm-0">
                  <p className="data-attributes mb-3">
                    <span
                      data-peity='{ "fill": ["#3ec7e8", "rgba(119, 119, 142, 0.2)"],   "innerRadius": 18, "radius": 28 }'
                      style={{ display: "none" }}
                    >
                      6/7
                    </span>
                    <svg className="peity" height={56} width={56}>
                      <path
                        d="M 28 0 A 28 28 0 1 1 6.108718490895164 10.542285547955466 L 13.92703331557546 16.7771835665428 A 18 18 0 1 0 28 10"
                        fill="#3ec7e8"
                      />
                      <path
                        d="M 6.108718490895164 10.542285547955466 A 28 28 0 0 1 27.999999999999996 0 L 27.999999999999996 10 A 18 18 0 0 0 13.92703331557546 16.7771835665428"
                        fill="rgba(119, 119, 142, 0.2)"
                      />
                    </svg>
                  </p>
                  <h3 className="mb-0 number-font1">60</h3>
                  <p className="text-muted mb-0">Item Does Not Fit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Row */}
      {/* Row */}
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="card overflow-hidden">
            <div className="card-header">
              <div>
                <h3 className="card-title">Products Details</h3>
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
                <table className="table table-vcenter border mb-0 text-nowrap">
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Product</th>
                      <th>Product Cost</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>C234</td>
                      <td>Mi LED Smart TV 4A 80</td>
                      <td>
                        <b>$14,500</b>
                      </td>
                      <td>2,977</td>
                      <td>
                        <span className="badge badge-success">Available</span>
                      </td>
                    </tr>
                    <tr>
                      <td>C389</td>
                      <td>Thomson R9 122cm (48 inch) Full HD LED TV </td>
                      <td>
                        <b>$30,000</b>
                      </td>
                      <td>678</td>
                      <td>
                        <span className="badge badge-primary">Limited</span>
                      </td>
                    </tr>
                    <tr>
                      <td>C936</td>
                      <td>Vu 80cm (32 inch) HD Ready LED TV</td>
                      <td>
                        <b>$13,200</b>
                      </td>
                      <td>4,922</td>
                      <td>
                        <span className="badge badge-warning">Avilable</span>
                      </td>
                    </tr>
                    <tr>
                      <td>C493</td>
                      <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
                      <td>
                        <b>$15,100</b>
                      </td>
                      <td>1,234</td>
                      <td>
                        <span className="badge badge-secondary">Limited</span>
                      </td>
                    </tr>
                    <tr>
                      <td>C729</td>
                      <td>HP 200 Mouse &amp; Wireless Laptop Keyboard </td>
                      <td>
                        <b>$5,987</b>
                      </td>
                      <td>4,789</td>
                      <td>
                        <span className="badge badge-danger">No Stock</span>
                      </td>
                    </tr>
                    <tr>
                      <td>C529</td>
                      <td>Digisol DG-HR3400 Router </td>
                      <td>
                        <b>$11,987</b>
                      </td>
                      <td>938</td>
                      <td>
                        <span className="badge badge-success">Limited</span>
                      </td>
                    </tr>
                    <tr>
                      <td>C367</td>
                      <td>Dell WM118 Wireless Optical Mouse</td>
                      <td>
                        <b>$4,700</b>
                      </td>
                      <td>5,876</td>
                      <td>
                        <span className="badge badge-secondary">Available</span>
                      </td>
                    </tr>
                    <tr>
                      <td>C529</td>
                      <td>Digisol DG-HR3400 Router </td>
                      <td>
                        <b>$11,987</b>
                      </td>
                      <td>938</td>
                      <td>
                        <span className="badge badge-success">Limited</span>
                      </td>
                    </tr>
                    <tr>
                      <td>C367</td>
                      <td>Dell WM118 Wireless Optical Mouse</td>
                      <td>
                        <b>$4,700</b>
                      </td>
                      <td>5,876</td>
                      <td>
                        <span className="badge badge-secondary">Available</span>
                      </td>
                    </tr>
                    <tr>
                      <td>C298</td>
                      <td>Dell 16 inch Laptop Backpack </td>
                      <td>
                        <b>$678</b>
                      </td>
                      <td>2,539</td>
                      <td>
                        <span className="badge badge-cyan">Available</span>
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
