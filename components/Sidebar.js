"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Dashboard } from "@/svgs/svg";
import { useLogisticContext } from "@/contexts/LogisticProvider";
import { Chevronright, Widget, SmallCircle } from "@/svgs/svg";
import { PageIcon } from "@/svgs/svg";


const Sidebar = () => {
  const { sideBarVisible, setSideBarVisible } = useLogisticContext();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible((prev) => !prev);
  return (
    <aside
      className={`app-sidebar toggle-sidebar ps ps--active-y ${
        sideBarVisible ? "" : "hidden"
      } sm:block`}
    >
      <ul className="side-menu toggle-menu">
        <li>
          <h3>Main</h3>
        </li>
        <li className="slide is-expanded">
          <a className="side-menu__item" onClick={() => toggle()}>
            <Dashboard />

            <span
              className={`side-menu__label ml-2 ${
                pathname == "/eccomerce" ||
                pathname === "/sales" ||
                pathname === "/logistics"
                  ? "text-[#868eff]"
                  : ""
              }`}
            >
              Dashboard
            </span>
            <Chevronright />
            {/* <i className="angle fa fa-angle-right" /> */}
          </a>
          {isVisible && (
            <ul className="slide-menu">
              <li className={`${pathname == "/eccomerce" && "text-[#868eff]"}`}>
                <a className="slide-item " href="">
                  <span>Analytics Dashboard</span>
                </a>
              </li>
              <li>
                <a className="slide-item" href="/eccomerce">
                  <div className="mr-2">
                    <SmallCircle />
                  </div>

                  <span
                    className={` ${
                      pathname == "/eccomerce" && "text-[#868eff]"
                    }`}
                  >
                    E-Commerce Dashboard
                  </span>
                </a>
              </li>
              <li>
                <a className="slide-item" href="/sales">
                  <div className="mr-2">
                    <SmallCircle />
                  </div>
                  <span
                    className={`${pathname == "/sales" && "text-[#868eff]"}`}
                  >
                    {" "}
                    Sales Dashboard
                  </span>
                </a>
              </li>
              <li>
                <a className="slide-item" href="/logistics">
                  <div className="mr-2">
                    <SmallCircle />
                  </div>
                  <span
                    className={`${
                      pathname == "/logistics" && "text-[#868eff]"
                    }`}
                  >
                    Logistics Dashboard
                  </span>
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a className="side-menu__item" href="">
            <Widget />
            <span className="side-menu__label ml-2">Widgets</span>
          </a>
        </li>
        <li>
          <a className="side-menu__item" href="/quotations">
            <i className="side-menu__icon fe fe-codepen" />
            <span
              className={`side-menu__label ${
                pathname == "/quotations" && "text-[#868eff]"
              }`}
            >
              Quotations
            </span>
          </a>
        </li>
        {/* <li className="slide">
          <a
            className="side-menu__item"
            data-toggle="slide"
            href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/#"
          >
            <i className="side-menu__icon fe fe-file-text" />
            <span className="side-menu__label">Forms</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/form-elements"
                className="slide-item"
              >
                {" "}
                Form Elements
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/form-wizard"
                className="slide-item"
              >
                {" "}
                Form Wizard
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/wysiwyag"
                className="slide-item"
              >
                {" "}
                Form Editor
              </a>
            </li>
          </ul>
        </li> */}
        {/* <li className="slide">
          <a
            className="side-menu__item"
            data-toggle="slide"
            href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/#"
          >
            <i className="side-menu__icon fe fe-bar-chart-2" />
            <span className="side-menu__label">Charts</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/chart-chartist"
                className="slide-item"
              >
                Chartist Charts
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/chart-morris"
                className="slide-item"
              >
                {" "}
                Morris Charts
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/chart-js"
                className="slide-item"
              >
                {" "}
                Charts js
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/chart-peity"
                className="slide-item"
              >
                {" "}
                Pie Charts
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/chart-echart"
                className="slide-item"
              >
                {" "}
                Echart Charts
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/chart-flot"
                className="slide-item"
              >
                {" "}
                Flot Charts
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/chart-nvd3"
                className="slide-item"
              >
                {" "}
                Nvd3 Charts
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/chart-dygraph"
                className="slide-item"
              >
                Dygraph Charts
              </a>
            </li>
          </ul>
        </li> */}
        {/* <li className="slide">
          <a
            className="side-menu__item"
            data-toggle="slide"
            href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/#"
          >
            <i className="side-menu__icon fe fe-layout" />
            <span className="side-menu__label">Tables</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a href="/tables" className="slide-item">
                Default table
              </a>
            </li>
            <li>
              <a href="/tables" className="slide-item">
                {" "}
                Data Tables
              </a>
            </li>
          </ul>
        </li> */}
        <li>
          <h3>Components</h3>
        </li>
        {/* <li className="slide">
          <a
            className="side-menu__item"
            data-toggle="slide"
            href=""
          >
            <i className="side-menu__icon fe fe-box" />
            <span className="side-menu__label">Elements</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a
                href=""
                className="slide-item"
              >
                {" "}
                Alerts
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/buttons"
                className="slide-item"
              >
                {" "}
                Buttons
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/colors"
                className="slide-item"
              >
                {" "}
                Colors
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/cards"
                className="slide-item"
              >
                {" "}
                Cards design
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/cards-image"
                className="slide-item"
              >
                {" "}
                Image Cards design
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/avatars"
                className="slide-item"
              >
                {" "}
                Avatars
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/dropdown"
                className="slide-item"
              >
                Dropdowns
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/thumbnails"
                className="slide-item"
              >
                {" "}
                Thumbnails
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/mediaobject"
                className="slide-item"
              >
                {" "}
                Media Object
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/list"
                className="slide-item"
              >
                {" "}
                List
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/tags"
                className="slide-item"
              >
                {" "}
                Tags
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/pagination"
                className="slide-item"
              >
                {" "}
                Pagination
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/navigation"
                className="slide-item"
              >
                {" "}
                Navigation
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/typography"
                className="slide-item"
              >
                {" "}
                Typography
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/breadcrumbs"
                className="slide-item"
              >
                {" "}
                Breadcrumbs
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/badge"
                className="slide-item"
              >
                {" "}
                Badges
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/jumbotron"
                className="slide-item"
              >
                {" "}
                Jumbotron
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/panels"
                className="slide-item"
              >
                {" "}
                Panels
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/modal"
                className="slide-item"
              >
                {" "}
                Modal
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/tooltipandpopover"
                className="slide-item"
              >
                {" "}
                Tooltip and popover
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/progress"
                className="slide-item"
              >
                {" "}
                Progress
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/carousel"
                className="slide-item"
              >
                {" "}
                Carousels
              </a>
            </li>
          </ul>
        </li> */}
        {/* <li className="slide">
          <a
            className="side-menu__item"
            data-toggle="slide"
            href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/#"
          >
            <i className="side-menu__icon fe fe-calendar" />
            <span className="side-menu__label">Calendar</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/calendar"
                className="slide-item"
              >
                Default calendar
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/calendar2"
                className="slide-item"
              >
                Full calendar
              </a>
            </li>
          </ul>
        </li> */}
        {/* <li className="slide">
          <a
            className="side-menu__item"
            data-toggle="slide"
            href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/#"
          >
            <i className="side-menu__icon fe fe-layers" />
            <span className="side-menu__label">Advanced UI</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/chat"
                className="slide-item"
              >
                {" "}
                Default Chat
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/notify"
                className="slide-item"
              >
                {" "}
                Notifications
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/sweetalert"
                className="slide-item"
              >
                {" "}
                Sweet alerts
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/rangeslider"
                className="slide-item"
              >
                {" "}
                Range slider
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/scroll"
                className="slide-item"
              >
                {" "}
                Content Scroll bar
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/counters"
                className="slide-item"
              >
                Counters
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/loaders"
                className="slide-item"
              >
                {" "}
                Loaders
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/time-line"
                className="slide-item"
              >
                {" "}
                Time Line
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/rating"
                className="slide-item"
              >
                {" "}
                Rating
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/accordion"
                className="slide-item"
              >
                {" "}
                Accordions
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/tabs"
                className="slide-item"
              >
                {" "}
                Tabs
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/footers"
                className="slide-item"
              >
                Footers
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/crypto-currencies"
                className="slide-item"
              >
                {" "}
                Crypto-currencies
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/users-list"
                className="slide-item"
              >
                {" "}
                User List
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/search"
                className="slide-item"
              >
                {" "}
                Search page
              </a>
            </li>
          </ul>
        </li> */}
        <li>
          <a className="side-menu__item" href="">
            <i className="side-menu__icon fe fe-map-pin" />
            <span className="side-menu__label">Maps</span>
          </a>
        </li>
        {/* <li className="slide">
          <a
            className="side-menu__item"
            data-toggle="slide"
            href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/#"
          >
            <i className="side-menu__icon fe fe-compass" />
            <span className="side-menu__label">Icons</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons"
                className="slide-item"
              >
                {" "}
                Font Awesome
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons2"
                className="slide-item"
              >
                {" "}
                Material Design Icons
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons3"
                className="slide-item"
              >
                {" "}
                Simple Line Icons
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons4"
                className="slide-item"
              >
                {" "}
                Feather Icons
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons5"
                className="slide-item"
              >
                {" "}
                Ionic Icons
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons6"
                className="slide-item"
              >
                {" "}
                Flag Icons
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons7"
                className="slide-item"
              >
                {" "}
                pe7 Icons
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons8"
                className="slide-item"
              >
                {" "}
                Themify Icons
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons9"
                className="slide-item"
              >
                Typicons Icons
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/icons10"
                className="slide-item"
              >
                Weather Icons
              </a>
            </li>
          </ul>
        </li> */}

        {/* pages */}
        <li className="slide is-expanded cursor-pointer">
          <a className="side-menu__item active" onClick={() => toggle()}>
            {/* <i className="side-menu__icon fe fe-airplay" /> */}
            <PageIcon />
            <span className="side-menu__label ml-2">Pages</span>
            <i className="angle fa fa-angle-right" />
          </a>
          {isVisible && (
            <ul className="slide-menu">
              <li className="active">
                <a className="slide-item active" href="">
                  <span>Analytics Dashboard</span>
                </a>
              </li>
              <li>
                <a className="slide-item" href="/eccomerce">
                  <span>E-Commerce Dashboard</span>
                </a>
              </li>
              <li>
                <a className="slide-item" href="/sales">
                  <span>Sales Dashboard</span>
                </a>
              </li>
              <li>
                <a className="slide-item" href="">
                  <span>IT Dashboard</span>
                </a>
              </li>
              <li>
                <a className="slide-item" href="/logistics">
                  <span>Logistics Dashboard</span>
                </a>
              </li>
            </ul>
          )}
        </li>
        {/* <li className="slide">
          <a
            className="relative flex items-center text-sm font-normal transition-all duration-[0.25s] ml-2.5 mr-0 mt-px mb-0 p-2.5;"
            data-toggle="slide"
            href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/#"
          >
            <i className="side-menu__icon fe fe-briefcase" />
            <span className="side-menu__label">Pages</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a href="/profile" className="slide-item">
                {" "}
                Profile
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/editprofile"
                className="slide-item"
              >
                {" "}
                Edit Profile
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/email"
                className="slide-item"
              >
                {" "}
                Email
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/emailservices"
                className="slide-item"
              >
                {" "}
                Email Inbox
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/gallery"
                className="slide-item"
              >
                {" "}
                Gallery
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/about"
                className="slide-item"
              >
                {" "}
                About Company
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/services"
                className="slide-item"
              >
                {" "}
                Services
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/faq"
                className="slide-item"
              >
                {" "}
                FAQS
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/terms"
                className="slide-item"
              >
                {" "}
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/empty"
                className="slide-item"
              >
                {" "}
                Empty Page
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/construction"
                className="slide-item"
              >
                {" "}
                Under Construction
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/blog"
                className="slide-item"
              >
                {" "}
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/invoice"
                className="slide-item"
              >
                {" "}
                Invoice
              </a>
            </li>
            <li>
              <a
                href="https://laravel.spruko.com/indoui/Leftmenu-Icon-LightSidebar-ltr/pricing"
                className="slide-item"
              >
                {" "}
                Pricing Tables
              </a>
            </li>
          </ul>
        </li> */}
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="">
            {/* <i className="side-menu__icon fe fe-shopping-cart" /> */}
         
            <span className="side-menu__label">E-Commerce</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a href="" className="slide-item">
                {" "}
                Products
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                Product Details
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                {" "}
                Shopping Cart
              </a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="">
            <i className="side-menu__icon fe fe-unlock" />
            <span className="side-menu__label">Custom</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a href="" className="slide-item">
                {" "}
                Login
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                {" "}
                Register
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                {" "}
                Forgot Password
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                {" "}
                Lock screen
              </a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="">
            <i className="side-menu__icon fe fe-alert-triangle" />
            <span className="side-menu__label">Error Pages</span>
            <i className="angle fa fa-angle-right" />
          </a>
          <ul className="slide-menu">
            <li>
              <a href="" className="slide-item">
                {" "}
                400 Error
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                {" "}
                401 Error
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                {" "}
                403 Error
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                {" "}
                404 Error
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                {" "}
                500 Error
              </a>
            </li>
            <li>
              <a href="" className="slide-item">
                {" "}
                503 Error
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, height: 545, right: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 399 }}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
