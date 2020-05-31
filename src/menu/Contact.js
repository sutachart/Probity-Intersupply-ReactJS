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
        <div class="row-12 row-sm-12 row-lg-12">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7756.2466885404865!2d100.6913035!3d13.5892755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM1JzIxLjYiTiAxMDDCsDQxJzM5LjIiRQ!5e0!3m2!1sth!2sth!4v1531067936211"
              width="100%"
              height="315"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
