import React from "react";

const page = () => {
  return (
    <div className="">
      {/* page-header */}
      <div className="page-header">
        <h1 className="page-title">Profile</h1>
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
      {/* End page-header */}
      {/* Row */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-profile  overflow-hidden">
            <div className="card-body text-center profile-bg">
              <div className=" card-profile">
                <div className="row justify-content-center">
                  <div className="">
                    <div className="">
                      <a href="#">
                        <img
                          src="/assets/images/users/female/2.jpg"
                          className="avatar-xxl rounded-circle"
                          alt="profile"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-white mb-0">Vanessa Dyer</h3>
              <p className="mb-2 text-white">Web Developer</p>
              <div className="text-center mb-4">
                <span>
                  <i className="fa fa-star text-warning" />
                </span>
                <span>
                  <i className="fa fa-star text-warning" />
                </span>
                <span>
                  <i className="fa fa-star text-warning" />
                </span>
                <span>
                  <i className="fa fa-star-half-o text-warning" />
                </span>
                <span>
                  <i className="fa fa-star-o text-warning" />
                </span>
              </div>
              <button className="btn btn-orange btn-sm">
                <span className="fa fa-twitter" /> Follow
              </button>
              <a href="#" className="btn btn-info btn-sm">
                <i className="fa fa-pencil-alt" aria-hidden="true" /> Edit
                profile
              </a>
            </div>
            <div className="card-body">
              <div className="nav-wrapper p-0">
                <ul
                  className="nav nav-pills nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0 mt-md-2 mt-0 mt-lg-0 active show"
                      id="tabs-icons-text-1-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-1"
                      role="tab"
                      aria-controls="tabs-icons-text-1"
                      aria-selected="true"
                    >
                      <i className="fa fa-home mr-2" />
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0 mt-md-2 mt-0 mt-lg-0"
                      id="tabs-icons-text-2-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-2"
                      role="tab"
                      aria-controls="tabs-icons-text-2"
                      aria-selected="false"
                    >
                      <i className="fa fa-user mr-2" />
                      Friends
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0 mt-md-2 mt-0 mt-lg-0"
                      id="tabs-icons-text-3-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-3"
                      role="tab"
                      aria-controls="tabs-icons-text-3"
                      aria-selected="false"
                    >
                      <i className="fa fa-picture-o mr-2" />
                      Photos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0 mt-md-2 mt-0 mt-lg-0"
                      id="tabs-icons-text-4-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-4"
                      role="tab"
                      aria-controls="tabs-icons-text-4"
                      aria-selected="false"
                    >
                      <i className="fa fa-newspaper-o mr-2 mt-1" />
                      Timeline
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-0 mb-md-0 mt-md-2 mt-0 mt-lg-0"
                      id="tabs-icons-text-5-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-5"
                      role="tab"
                      aria-controls="tabs-icons-text-5"
                      aria-selected="false"
                    >
                      <i className="fa fa-cog mr-2" />
                      More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body pb-0">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade active show"
                  id="tabs-icons-text-1"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-1-tab"
                >
                  <div className="table-responsive mb-3">
                    <table className="table row table-borderless w-100 m-0">
                      <tbody className="col-lg-6 p-0">
                        <tr>
                          <td>
                            <strong>Full Name :</strong> Vanessa Dyer
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Location :</strong> Uk
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Languages :</strong> English, German,
                            Spanish.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>DOB :</strong> 21/05/1991
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="col-lg-6 p-0">
                        <tr>
                          <td>
                            <strong>Occupation :</strong> Web Developer
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Website :</strong> abaic.com
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Email :</strong> amnhjygrkj@abaic.com
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Phone :</strong> +222-6652-6325
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4>
                    <strong>About Me</strong>
                  </h4>
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                  <div className="media-heading mt-3">
                    <h4>
                      <strong>Biography</strong>
                    </h4>
                  </div>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus
                  </p>
                  <p className="mb-4">
                    because it is pleasure, but because those who do not know
                    how to pursue pleasure rationally encounter consequences
                    that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself,
                    because it is pain, but because occasionally circumstances
                    occur in which toil and pain can procure him some great
                    pleasure.
                  </p>
                </div>
                <div
                  aria-labelledby="tabs-icons-text-2-tab"
                  className="tab-pane fade"
                  id="tabs-icons-text-2"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="content content-full-width" id="content">
                        {/* begin profile-content */}
                        <div className="profile-content">
                          {/* begin tab-content */}
                          <div className="tab-content p-0">
                            {/* begin #profile-friends tab */}
                            <div
                              className="tab-pane fade in active show"
                              id="profile-friends"
                            >
                              <h4 className="mt-0 mb-4">Friend List (14)</h4>
                              {/* begin row */}
                              <div className="row row-space-2">
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/female/2.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Latoya Laver
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <button
                                          type="button"
                                          className="btn btn-primary btn-sm dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="true"
                                        >
                                          Friends
                                        </button>
                                        <ul
                                          className="dropdown-menu dropdown-menu-right"
                                          role="menu"
                                        >
                                          <li>
                                            <a href="#">View profile</a>
                                          </li>
                                          <li>
                                            <a href="#">Follow</a>
                                          </li>
                                          <li>
                                            <a href="#">Message</a>
                                          </li>
                                          <li>
                                            <a href="#">Suggestion</a>
                                          </li>
                                          <li>
                                            <a href="#">Un friend</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/female/4.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Polly Amon
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <button
                                          type="button"
                                          className="btn btn-primary btn-sm dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="true"
                                        >
                                          Friends
                                        </button>
                                        <ul
                                          className="dropdown-menu dropdown-menu-right"
                                          role="menu"
                                        >
                                          <li>
                                            <a href="#">View profile</a>
                                          </li>
                                          <li>
                                            <a href="#">Follow</a>
                                          </li>
                                          <li>
                                            <a href="#">Message</a>
                                          </li>
                                          <li>
                                            <a href="#">Suggestion</a>
                                          </li>
                                          <li>
                                            <a href="#">Un friend</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/male/2.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle ">
                                        <b className="text-inverse">
                                          Paul Molive
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <button
                                          type="button"
                                          className="btn btn-primary btn-sm dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="true"
                                        >
                                          Friends
                                        </button>
                                        <ul
                                          className="dropdown-menu dropdown-menu-right"
                                          role="menu"
                                        >
                                          <li>
                                            <a href="#">View profile</a>
                                          </li>
                                          <li>
                                            <a href="#">Follow</a>
                                          </li>
                                          <li>
                                            <a href="#">Message</a>
                                          </li>
                                          <li>
                                            <a href="#">Suggestion</a>
                                          </li>
                                          <li>
                                            <a href="#">Un friend</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/female/1.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle ">
                                        <b className="text-inverse">
                                          Corinna Eifert
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <button
                                          type="button"
                                          className="btn btn-primary btn-sm dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="true"
                                        >
                                          Friends
                                        </button>
                                        <ul
                                          className="dropdown-menu dropdown-menu-right"
                                          role="menu"
                                        >
                                          <li>
                                            <a href="#">View profile</a>
                                          </li>
                                          <li>
                                            <a href="#">Follow</a>
                                          </li>
                                          <li>
                                            <a href="#">Message</a>
                                          </li>
                                          <li>
                                            <a href="#">Suggestion</a>
                                          </li>
                                          <li>
                                            <a href="#">Un friend</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/female/3.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle ">
                                        <b className="text-inverse">
                                          Kenna Pride
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/male/3.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Mark Sunseri
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/female/5.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Kenna Pride
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/female/6.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Anna Sthesia
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/male/5.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Trenton Tookes
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className=" mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/male/6.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Elias Arboleda
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/female/7.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Sarah Yevo
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/male/7.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Sergio Silverio
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/female/9.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Kathern Risner
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                                <div className="col-xl-6">
                                  <div className="mb-2 border shadow">
                                    <div className="media  media-xs overflow-visible">
                                      <a
                                        className="media-left"
                                        href="javascript:;"
                                      >
                                        <img
                                          alt=""
                                          className="avatar avatar-md brround"
                                          src="/assets/images/users/female/8.jpg"
                                        />
                                      </a>
                                      <div className="media-body valign-middle">
                                        <b className="text-inverse">
                                          Honey Maloney
                                        </b>
                                      </div>
                                      <div className="media-body valign-middle text-right overflow-visible">
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                          >
                                            Friends
                                          </button>
                                          <ul
                                            className="dropdown-menu dropdown-menu-right"
                                            role="menu"
                                          >
                                            <li>
                                              <a href="#">View profile</a>
                                            </li>
                                            <li>
                                              <a href="#">Follow</a>
                                            </li>
                                            <li>
                                              <a href="#">Message</a>
                                            </li>
                                            <li>
                                              <a href="#">Suggestion</a>
                                            </li>
                                            <li>
                                              <a href="#">Un friend</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end col-6 */}
                              </div>
                              {/* end row */}
                            </div>
                            {/* end #profile-friends tab */}
                          </div>
                          {/* end tab-content */}
                        </div>
                        {/* end profile-content */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabs-icons-text-3"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-3-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 profile-image">
                      <div className="card shadow">
                        <img src="/assets/images/photos/14.jpg" alt="gallery" />
                      </div>
                    </div>
                    <div className="col-lg-4 profile-image">
                      <div className="card shadow">
                        <img src="/assets/images/photos/19.jpg" alt="gallery" />
                      </div>
                    </div>
                    <div className="col-lg-4 profile-image">
                      <div className="card shadow">
                        <img src="/assets/images/photos/20.jpg" alt="gallery" />
                      </div>
                    </div>
                    <div className="col-lg-4 profile-image">
                      <div className="card shadow">
                        <img src="/assets/images/photos/4.jpg" alt="gallery" />
                      </div>
                    </div>
                    <div className="col-lg-4 profile-image">
                      <div className="card shadow">
                        <img src="/assets/images/photos/5.jpg" alt="gallery" />
                      </div>
                    </div>
                    <div className="col-lg-4 profile-image">
                      <div className="card shadow">
                        <img src="/assets/images/photos/6.jpg" alt="gallery" />
                      </div>
                    </div>
                    <div className="col-lg-4 profile-image">
                      <div className="card shadow">
                        <img src="/assets/images/photos/10.jpg" alt="gallery" />
                      </div>
                    </div>
                    <div className="col-lg-4 profile-image">
                      <div className="card shadow">
                        <img src="/assets/images/photos/8.jpg" alt="gallery" />
                      </div>
                    </div>
                    <div className="col-lg-4 profile-image">
                      <div className="card shadow">
                        <img src="/assets/images/photos/9.jpg" alt="gallery" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabs-icons-text-4"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-4-tab"
                >
                  <div className="row profile ng-scope">
                    <div className="col-md-12">
                      <div className="card">
                        <form className="mt ng-pristine ng-valid" action="#">
                          <div className="form-group mb-0">
                            <label className="sr-only" htmlFor="new-event">
                              New event
                            </label>
                            <textarea
                              className="form-control "
                              id="new-event"
                              placeholder="Post something..."
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                          <div className="btn-toolbar">
                            <div className="">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary mr-2"
                              >
                                <i className="fa fa-camera fa-lg" />
                              </a>{" "}
                              <a href="#" className="btn btn-sm btn-info">
                                <i className="fa fa-map-marker fa-lg" />
                              </a>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-danger btn-sm ml-3"
                            >
                              Post
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="activities">
                        <section className="event card border">
                          <div className="d-flex">
                            <span className="thumb-sm  pull-left mr-sm">
                              <img
                                className="avatar avatar-md brround"
                                src="/assets/images/users/female/8.jpg"
                                alt="..."
                              />
                            </span>
                            <div>
                              <h4 className="event-heading">
                                <a href="#">John doe</a>
                                <span>
                                  <small className="text-muted">
                                    <a href="#">@nils</a>
                                  </small>
                                </span>
                              </h4>
                              <p className="text-xs text-muted">
                                February 22, 2014 at 01:59 PM
                              </p>
                            </div>
                          </div>
                          <p className="text-sm ">
                            There is no such thing as maturity. There is instead
                            an ever-evolving process of maturing. Because when
                            there is a maturity, there is ...
                          </p>
                          <div className="border-top post-comments">
                            <ul className="post-links mb-0 pt-2 pl-2 pr-2">
                              <li>
                                <a href="#">1 hour</a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="text-danger">
                                    <i className="fa fa-heart" /> Like
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">Comment</a>
                              </li>
                            </ul>
                          </div>
                        </section>
                        <section className="event card border">
                          <div className="d-flex">
                            <span className="thumb-sm  pull-left mr-sm">
                              <img
                                className="avatar avatar-md brround"
                                src="/assets/images/users/male/7.jpg"
                                alt="..."
                              />
                            </span>
                            <div>
                              <h4 className="event-heading">
                                <a href="#">john doe</a>
                                <span>
                                  <small className="text-muted">
                                    <a href="#">@jess</a>
                                  </small>
                                </span>
                              </h4>
                              <p className="text-xs text-muted">
                                February 22, 2014 at 01:59 PM
                              </p>
                            </div>
                          </div>
                          <p className="text-sm mb-0">
                            Check out this awesome photo I made in Italy last
                            summer. Seems it was lost somewhere deep inside my
                            brand new HDD 40TB. Thanks god I found it!
                          </p>
                          <div>
                            <div className="clearfix border-top post-comments">
                              <ul className="post-links mt-sm pull-left p-2">
                                <li>
                                  <a href="#">1 hour</a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-danger">
                                      <i className="fa fa-heart-o" /> Like
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">Comment</a>
                                </li>
                              </ul>
                            </div>
                            <ul className="post-comments mt-sm mb-0">
                              <li className="d-flex">
                                <span className="thumb-sm  float-left mr-sm">
                                  <img
                                    className="avatar avatar-md brround"
                                    src="/assets/images/users/female/5.jpg"
                                    alt="..."
                                  />
                                </span>
                                <div className="comment-body">
                                  <h6 className="author fw-semi-bold">
                                    Ignacio Abad <small>6 mins ago</small>
                                  </h6>
                                  <p className="text-xs">
                                    Hey, have you heard anything about that?
                                  </p>
                                </div>
                              </li>
                              <li>
                                <span className="thumb-sm float-left mr-sm mr-4">
                                  <img
                                    className="avatar avatar-md brround"
                                    src="/assets/images/users/male/3.jpg"
                                    alt="..."
                                  />
                                </span>
                                <div className="msb-reply d-flex">
                                  <textarea
                                    placeholder="Write your comment..."
                                    defaultValue={""}
                                  />
                                  <button>
                                    <i className="fa fa-paper-plane-o" />
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabs-icons-text-5"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-5-tab"
                >
                  <p>
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus
                  </p>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus
                  </p>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus
                  </p>
                  <p className="mb-4">
                    because it is pleasure, but because those who do not know
                    how to pursue pleasure rationally encounter consequences
                    that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself,
                    because it is pain, but because occasionally circumstances
                    occur in which toil and pain can procure him some great
                    pleasure.
                  </p>
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
