/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class OurService extends Component {
  render() {
    return (
      <div>
        <div class="container padding-page">
          <div class="row">
            <div class="col-md-4 ">
              <div class="row row-sm-12 ">
                <div class="col-3 col-sm-3 mt-2">
                  <img src="img/service/model.png" width="70" />
                </div>
                <div class="col-9 col-sm-9">
                  <h5 class="text-head-content">
                    <b>รับเหมาก่อสร้าง</b>
                  </h5>
                  <p>
                    รับเหมาก่อสร้างบ้าน ออกแบบบ้าน รับเหมาต่อเติม
                    และปรับปรุงอาคาร พร้อมตกแต่งภายในครบวงจร
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="row row-sm-12 ">
                <div class="col-3 col-sm-3 mt-2">
                  <img src="img/service/cctv.png" width="70" />
                </div>
                <div class="col-9 col-sm-9">
                  <h5 class="text-head-content">
                    <b>รับเหมางานระบบ</b>
                  </h5>
                  <p>
                    รับเหมาติดตั้งงานระบบ เดินสายไฟ ติดตั้งกล้องวงจรปิด
                    เครื่องใช้ไฟฟ้า และระบบสาธารณูปโภค
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="row row-sm-12 ">
                <div class="col-3 col-sm-3 mt-2">
                  <img src="img/service/tower2.png" width="70" />
                </div>
                <div class="col-9 col-sm-9">
                  <h5 class="text-head-content">
                    <b>รับติดตั้งโทรคมนาคม</b>
                  </h5>
                  <p>รับติดตั้งระบบโทรคมนาคมต่าง เสาสัญญาณโทรศัพท์ 3G 4G</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-5 mb-5" />
      </div>
    );
  }
}
