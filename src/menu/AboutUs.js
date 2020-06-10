import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div class="container padding-page">
          <div class="row row-cols-1 justify-content-center align-items-center justify-content-center">
            <div class="col-11 col-sm-12">
              <div class="text-center">
                <h3 class="text-header">
                  <span class="sub-title">About us</span>
                  <b>เกี่ยวกับเรา</b>
                </h3>
              </div>
              <hr />
            </div>
            <div class="col-11 col-sm-12 mt-5 text-center">
              <p class="lead text-dark">
                บริษัท พร็อบบิตี้ อินเตอร์ซับพลาย ห้างหุ้นส่วน จำกัด
                ดำเนินธุรกิจด้านการรับเหมาก่อสร้างโดยทางบริษัทรับออกแบบงานก่อสร้าง
                รับเหมาก่อสร้างโรงงาน รับเหมาก่อสร้างโกดัง
                รับเหมาก่อสร้างอาคารสำนักงาน รับสร้างบ้าน คอนโด ที่พักอาศัย
                รวมถึงการปรับปรุง-รีโนเวทโรงงาน และงานต่อเติมทั้งหมด
                ตั้งแต่ขนาดเล็กไปจนถึงขนาดใหญ่ ด้วยทีมงานมืออาชีพ
                โดยมีเจตนาที่จะสร้างงานที่มีคุณภาพ และราคาที่เหมาะสม
                ทุกผลงานของเราสร้างจากความทุ่มเท ใส่ใจในรายละเอียด
                ส่งมอบงานตรงเวลา ซื่อสัตย์ จริงใจ ไม่ทิ้งงาน
                จนทำให้บริษัทเราเป็นที่ยอมรับจากลูกค้า
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
