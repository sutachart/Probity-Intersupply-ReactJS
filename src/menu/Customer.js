/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Customer extends Component {
  render() {
    return (
      <div>
        <div class="container padding-page">
          <div class="col-12 col-sm-12 justify-content-center">
            <div class="text-center">
              <span class="sub-title">Our Clients</span>
              <h3 class="text-header">
                <b>ลูกค้าที่เคยใช้บริการ</b>
              </h3>
            </div>
            <hr />
            <div class="row justify-content-center mt-5">
              <div class="col-4 col-sm-2 mt-2 mr-5">
                <img
                  src="img/customer/thaisafe.jpg"
                  class="mx-auto pic-customer"
                  height="200"
                />
              </div>
              <div class="col-4 col-sm-2 mt-2 mr-5">
                <img
                  src="img/customer/krungthai.jpg"
                  class="mx-auto pic-customer"
                  height="200"
                />
              </div>
              <div class="col-4 col-sm-2 mt-2 mr-5">
                <img
                  src="img/customer/sing.jpg"
                  class="mx-auto pic-customer"
                  height="200"
                />
              </div>
              <div class="col-4 col-sm-2 mt-2 mr-5">
                <img
                  src="img/customer/thai-bave.jpg"
                  class="mx-auto pic-customer"
                  height="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
