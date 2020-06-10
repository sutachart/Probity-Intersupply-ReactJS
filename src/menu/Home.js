/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="navbar navbar-dark navbar-expand-lg" id="navbar">
          <div class="container">
            <a class="navbar-brand ml-2" href="/">
              <span class="heading-weight">PIS Part.,Ltd.</span>
            </a>
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarMenu"
            >
              <span class="navbar-toggler-icon  "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item mr-3">
                  <a class="nav-link" href="#home">
                    <span>หน้าหลัก</span>
                  </a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="#aboutus">
                    <span>เกี่ยวกับเรา</span>
                  </a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="#project">
                    <span>ผลงาน</span>
                  </a>
                </li>
                <li class="nav-item dropdown mr-3">
                  <a
                    class="nav-link dropdown-toggle"
                    id="dropdown07"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                  >
                    <span>บริการของเรา</span>
                  </a>
                  <div
                    class="dropdown-menu mt-2 mb-2"
                    aria-labelledby="dropdown07"
                  >
                    <a class="dropdown-item text-dark" href="#service">
                      <span>รับเหมาก่อสร้าง</span>
                    </a>
                    <a class="dropdown-item text-dark" href="#service">
                      <span>รับเหมางานระบบ</span>
                    </a>
                    <a class="dropdown-item text-dark" href="#service">
                      <span>รับเหมางานโทรคมนาคม</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-dark" href="#">
                      <span>All our services</span>
                    </a>
                  </div>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="#customer">
                    <span>ลูกค้า</span>
                  </a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="#contact">
                    <span>ติดต่อ</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div class="right-navbar">
            <span>fb</span>
            <span>line</span>
          </div> */}
        </div>

        <div class="container">
          <div class="row align-items-center text-center justify-content-center site-blocks-cover">
            <div class="col-md-10">
              <h1 class="text-uppercase home-content text-light">
                PROBITY INTERSUPPLY
              </h1>
              <span class="sub-text mb-3 d-block text-light mt-2">
                รับเหมาก่อสร้าง / รับเหมางานระบบ / รับเหมางานโทรคมนาคม
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
