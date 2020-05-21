/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div class="container padding-page">
          <div class="row justify-content-center">
            <div class="text-center">
              <span class="sub-title">CONTACTS</span>
              <h3 class="text-head-content">
                <b>ติดต่อเรา</b>
              </h3>
            </div>
          </div>
          <div class="row rounded mt-4">
            <div class="col-md-12 col-lg-12 mt-2 mb-2">
              <form action="#" class="p-5 bg-white rounded">
                <div class="row form-group">
                  <div class="col-md-12 mb-3 mb-md-0">
                    <label class="font-weight-bold" for="fullname">
                      ชื่อ - นามสกุล
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="email">
                      อีเมลล์
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="email">
                      เบอร์โทร
                    </label>
                    <input
                      type="text"
                      id="tel"
                      class="form-control"
                      placeholder="(+66) 012-345-6789"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="message">
                      ข้อความ
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      class="form-control"
                      placeholder="Please sent your message."
                    ></textarea>
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      value="ยืนยัน"
                      class="btn btn-primary rounded btn-lg"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
