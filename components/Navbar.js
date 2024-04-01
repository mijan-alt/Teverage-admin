"use client";
import React from "react";
import Hamburger from "@/svgs/svg";
import { Setting } from "@/svgs/svg";
import { useLogisticContext } from "@/contexts/LogisticProvider";
import { Notification } from "@/svgs/svg";
import { Search } from "@/svgs/svg";
import { Minimize } from "@/svgs/svg";
import { Threedots } from "@/svgs/svg";

const Navbar = () => {
  const { sideBarVisible, setSideBarVisible } = useLogisticContext();
  return (
    <div className="app-header header d-flex navbar-collapse">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="header-brand" href="/index">
            <img
              src="/assets/images/brand/logo.png"
              className="header-brand-img main-logo"
              alt="Tevergae logo"
            />
            <img
              src="/assets/images/brand/logo-light.png"
              className="header-brand-img dark-main-logo"
              alt="Teverage logo"
            />
            <img
              src="/assets/images/brand/icon-light.png"
              className="header-brand-img dark-icon-logo"
              alt="Teverage Logo"
            />
            <img
              src="/assets/images/brand/icon.png"
              className="header-brand-img icon-logo"
              alt="Teverage Logo"
            />
          </a>
          {/* logo*/}
          <div className="app-sidebar__toggle -mt-2" data-toggle="sidebar">
            <a
              className="open-toggle"
              onClick={() => setSideBarVisible((prev) => !prev)}
            >
              <Hamburger width={34} height={34} />
            </a>
            {/* <a className="close-toggle" href="#">
              <i className="fe fe-x" />
            </a> */}
          </div>
          <div className="d-none dropdown d-md-flex header-settings">
            <a className="nav-link icon" data-toggle="dropdown">
              <Setting width={24} height={24} />
              <span className="lay-outstyle ml-2">Settings</span>
            </a>
            <div className="dropdown-menu dropdown-menu-left dropdown-menu-arrow">
              <a className="dropdown-item" href="#">
                Option 1
              </a>
              <a className="dropdown-item" href="#">
                Option 2
              </a>
              <a className="dropdown-item" href="#">
                Option 3
              </a>
              <a className="dropdown-item" href="#">
                Option 4
              </a>
              <a className="dropdown-item" href="#">
                Option 5
              </a>
            </div>
          </div>
          <div className="d-flex order-lg-2 ml-auto header-right">
            <div
              className="d-md-flex header-search"
              id="bs-example-navbar-collapse-1"
            >
              <form className="navbar-form" role="search">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="input-group-btn">
                    <button type="reset" className="btn btn-default">
                      <i className="fe fe-x" />
                    </button>
                    <button type="submit" className="btn btn-default">
                      {/* <i className="fe fe-search" /> */}
                      <Search/>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* Search */}
            <div className="d-md-flex">
              <a href="#" className="nav-link icon full-screen-link">
                {/* <i className="fe fe-minimize fullscreen-button" /> */}
                <Minimize/>
              </a>
            </div>
            <div className="dropdown d-md-flex header-message">
              <a className="nav-link icon" data-toggle="dropdown">
                {/* <i className="fe fe-bell" /> */}
                <Notification/>
                <span className="nav-unread badge badge-danger badge-pill">
                  3
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a className="dropdown-item text-center" href="#">
                  Notifications
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item d-flex pb-4" href="#">
                  <span className="avatar mr-3 br-3 align-self-center avatar-md cover-image bg-primary-transparent text-primary">
                    <i className="fe fe-mail" />
                  </span>
                  <div>
                    <span className="font-weight-bold">
                      {" "}
                      Commented on your post{" "}
                    </span>
                    <div className="small text-muted d-flex">3 hours ago</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex pb-4" href="#">
                  <span className="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-secondary-transparent text-secondary">
                    <i className="fe fe-download" />
                  </span>
                  <div>
                    <span className="font-weight-bold">
                      {" "}
                      New file has been Uploaded{" "}
                    </span>
                    <div className="small text-muted d-flex">5 hour ago</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex pb-4" href="#">
                  <span className="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-warning-transparent text-warning">
                    <i className="fe fe-user" />
                  </span>
                  <div>
                    <span className="font-weight-bold">
                      {" "}
                      User account has Updated
                    </span>
                    <div className="small text-muted d-flex">20 mins ago</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex pb-4" href="#">
                  <span className="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-info-transparent text-info">
                    <i className="fe fe-shopping-cart" />
                  </span>
                  <div>
                    <span className="font-weight-bold">
                      {" "}
                      New Order Recevied
                    </span>
                    <div className="small text-muted d-flex">1 hour ago</div>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <div className="text-center dropdown-btn pb-3">
                  <div className="btn-list">
                    <a href="#" className="btn btn-primary btn-sm">
                      <i className="fe fe-plus mr-1" />
                      Add New
                    </a>
                    <a href="#" className=" btn btn-secondary btn-sm">
                      <i className="fe fe-eye mr-1" />
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*Navbar */}
            <div className="dropdown header-profile">
              <a
                className="nav-link pr-0 leading-none d-flex pt-1"
                data-toggle="dropdown"
                href="#"
              >
                <span
                  className="avatar avatar-md brround cover-image"
                  data-image-src="/assets/images/users/female/2.jpg"
                  style={{
                    background:
                      'url("/assets/images/users/female/2.jpg") center center',
                  }}
                />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <div className="drop-heading">
                  <div className="text-center">
                    <h5 className="text-dark mb-1">Vanessa Dyer</h5>
                    <small className="text-muted">Web Developer</small>
                  </div>
                </div>
                <div className="dropdown-divider m-0" />
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-user" />
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-edit" />
                  Schedule
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-mail" /> Inbox
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-unlock" /> Look Screen
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-power" /> Log Out
                </a>
                <div className="dropdown-divider" />
                <div className="text-center dropdown-btn pb-3">
                  <div className="btn-list">
                    <a href="#" className="btn btn-icon btn-facebook btn-sm">
                      <i className="icon icon-social-facebook" />
                    </a>
                    <a href="#" className="btn btn-icon btn-twitter btn-sm">
                      <i className="icon icon-social-twitter" />
                    </a>
                    <a href="#" className="btn btn-icon btn-instagram btn-sm">
                      <i className="icon icon-social-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown d-md-flex Sidebar-setting">
              <a
                href="#"
                className="nav-link icon"
                data-toggle="sidebar-right"
                data-target=".sidebar-right"
              >
                {/* <i className="fe fe-more-horizontal" /> */}
                <Threedots/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
