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
              <span class="text-light heading-weight">PIS Part.,Ltd.</span>
            </a>
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarMenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
              <ul class="navbar-nav ml-auto">
                <li class=" nav-item mr-3 active">
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
                <li class="nav-item mr-3">
                  <a class="nav-link" href="#service">
                    <span>บริการของเรา</span>
                  </a>
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
