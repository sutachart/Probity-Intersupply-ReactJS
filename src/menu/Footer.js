/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="bg-footer">
          <div class="container low-padding">
            <div class="row justify-content-center text-light">
              <div class="col-4 col-md-3 col-lg-3 p-3">
                <div>
                  <a class="a-link" href="#home">
                    หน้าหลัก
                  </a>
                </div>
                <div>
                  <a class="a-link" href="#aboutus">
                    เกี่ยวกับเรา
                  </a>
                </div>
                <div>
                  <a class="a-link" href="#project">
                    ผลงาน
                  </a>
                </div>
                <div>
                  <a class="a-link" href="#service">
                    บริการของเรา
                  </a>
                </div>
                <div>
                  <a class="a-link" href="#customer">
                    ลูกค้า
                  </a>
                </div>
                <div>
                  <a class="a-link" href="#contact">
                    ติดต่อ
                  </a>
                </div>
              </div>
              <div class="col-7 col-md-3 col-lg-3 p-3">
                <p class="head-text-footer">บริการของเรา</p>
                <li>รับเหมาก่อสร้าง</li>
                <li>รับเหมางานระบบ</li>
                <li>รับติดตั้งโทรคมนาคม</li>
                <li>รับบริหารโครงการ</li>
              </div>
              <div class="col-11 col-md-3 col-lg-3 p-3">
                <p class="head-text-footer">เกี่ยวกับเรา</p>
                <p>
                  ที่อยู่ : เลขที่ 99/174 หมู่บ้าน ปริญญดา ถ.คลองขุด
                  ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ 10540
                </p>
              </div>
              <div class="col-11 col-md-3 col-lg-3 p-3">
                <p class="head-text-footer">ติดต่อเรา</p>
                <li>Tel: (+66) 086-875-0608</li>
                <li>Email: Probity@hotmail.com</li>
                <li>Facebook</li>
                <li>Line</li>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <div class="container">
              <div class="col-12">
                <div class="text-center p-3">
                  <span class="text-light">
                    Copyright&nbsp;&nbsp;
                    <span class="text-light">©ProbityInterSupply.com</span>
                    &nbsp;&nbsp;All Rights Reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
