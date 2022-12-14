import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { BsFillCalendarFill } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";

import GermanyFlag from "../../assets/images/germany.png";
import { Link } from "react-router-dom";

//modal imports
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";

function VendorDetail() {
  const [varyingState, setVaryingState] = useState("");
  const [varyingModal, setVaryingModal] = useState(false);
  const [varyingRecipient, setVaryingRecipient] = useState("");
  const [varyingMessage, setVaryingMessage] = useState("");

  const onChangeRecipient = (event) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };

  return (
    <>
      <Container fluid className="top-section-container">
        {/* top section row */}
        <Row>
          <div id="top-section-row" className="shadow-sm">
            <Container>
              <Row>
                <Col md={3} xs={3}>
                  <div className="project-card-avatar">
                    <MDBContainer className="d-flex justify-content-end">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                        className="rounded-circle"
                        style={{ width: "50%", margin: "auto 0px" }}
                        alt="Avatar"
                      />
                    </MDBContainer>
                  </div>
                </Col>
                <Col md={9} xs={9}>
                  {/* title / subtitle div */}
                  <div className="title-desc-card2">
                    <p>Tom Smith</p>
                    <p>Electrician</p>
                    {/* rating div */}
                    <div className="rating-div2">
                      <span>5.0</span>
                      <div>
                        <span>
                          {<BsFillStarFill />}
                          {<BsFillStarFill />}
                          {<BsFillStarFill />}
                          {<BsFillStarFill />}
                          {<BsFillStarFill />}
                        </span>
                      </div>
                      <div className="country-flag-div">
                        <img src={GermanyFlag} alt="flag_icon" />
                        <p>Germany</p>
                      </div>
                      <div className="verification-btn-div">
                        <button>
                          <span>
                            <BsPatchCheckFill />
                          </span>
                          <p>Verified</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        {/* about us section */}
        <Row>
          <Col md={8} sm={8}>
            {/* left section */}
            <Container>
              <Row>
                <Col md={12} xs={12}>
                  <div className="about-div">
                    <p>About Me</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Col>
              </Row>
              {/* gray section */}
              <Row>
                <Col md={12}>
                  <div className="gray-panel">
                    <div>
                      <span>
                        <BsFillBookmarkStarFill />
                      </span>
                      <p>Work History and Feedback</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="work-history-info">
                    <div>
                      <div className="work-history-title">
                        <p>Water Drain cleaning</p>
                      </div>
                      <div className="rating-div2">
                        <span>5.0</span>
                        <div>
                          <span>
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                          </span>
                        </div>
                        <div className="date-time-div">
                          <span>
                            <BsFillCalendarFill />
                          </span>
                          <p>August 2022</p>
                        </div>
                      </div>
                      <div>
                        <p>Clog Cleaning, Leakage fixing and more+</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="work-history-info ">
                    <div className="gray-background">
                      <div className="work-history-title">
                        <p>Water Drain cleaning</p>
                      </div>
                      <div className="rating-div2">
                        <span>5.0</span>
                        <div>
                          <span>
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                          </span>
                        </div>
                        <div className="date-time-div">
                          <span>
                            <BsFillCalendarFill />
                          </span>
                          <p>August 2022</p>
                        </div>
                      </div>
                      <div>
                        <p>Clog Cleaning, Leakage fixing and more+</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="work-history-info">
                    <div>
                      <div className="work-history-title">
                        <p>Water Drain cleaning</p>
                      </div>
                      <div className="rating-div2">
                        <span>5.0</span>
                        <div>
                          <span>
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                            {<BsFillStarFill />}
                          </span>
                        </div>
                        <div className="date-time-div">
                          <span>
                            <BsFillCalendarFill />
                          </span>
                          <p>August 2022</p>
                        </div>
                      </div>
                      <div>
                        <p>Clog Cleaning, Leakage fixing and more+</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="pagination-div">
                    <nav aria-label="...">
                      <ul class="pagination pagination-lg">
                        <li class="page-item active" aria-current="page">
                          <span class="page-link">1</span>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="gray-panel">
                    <div>
                      <span>
                        <BsFillBookmarkStarFill />
                      </span>
                      <p>Employment History</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="employment-history-div">
                    <div className="avatar-div">
                      <MDBContainer className="d-flex ">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                          className="rounded-3 shadow-4"
                          style={{ width: "100%" }}
                          alt="Avatar"
                        />
                      </MDBContainer>
                    </div>
                    <div className="employment-history-details">
                      <div className="employment-history-title">
                        <h3>Airframe and power plant</h3>
                      </div>
                      <div className="icon-n-details">
                        <div>
                          <span>
                            <BsBuilding />
                          </span>
                          <p>Acodia</p>
                        </div>
                        <div>
                          <span>
                            <BsFillCalendarFill />
                          </span>
                          <p>May 2019 - Present</p>
                        </div>
                      </div>
                      <div className="employment-history-description">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col md={12} xs={12}>
                  <div className="employment-history-div ">
                    <div className="avatar-div">
                      <MDBContainer className="d-flex ">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                          className="rounded-3 shadow-4"
                          style={{ width: "100%" }}
                          alt="Avatar"
                        />
                      </MDBContainer>
                    </div>
                    <div className="employment-history-details ">
                      <div className="employment-history-title">
                        <h3>Airframe and power plant</h3>
                      </div>
                      <div className="icon-n-details">
                        <div>
                          <span>
                            <BsBuilding />
                          </span>
                          <p>Acodia</p>
                        </div>
                        <div>
                          <span>
                            <BsFillCalendarFill />
                          </span>
                          <p>May 2019 - Present</p>
                        </div>
                      </div>
                      <div className="employment-history-description">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          {/* right section */}
          <Col md={4} xs={4}>
            <div className="work-detials-div">
              <div className="rate-n-basic-details">
                <div className="flex-column">
                  <span>$35</span>
                  <span>
                    <p>Hourly Rate</p>
                  </span>
                </div>
                <div className="flex-column">
                  <span>53</span>
                  <span>
                    <p>Jobs Done</p>
                  </span>
                </div>
                <div className="flex-column">
                  <span>22</span>
                  <span>
                    <p>Rehired</p>
                  </span>
                </div>
              </div>
              <div className="make-offer-btn">
                <MDBBtn
                  onClick={() => {
                    setVaryingState("@mdo");
                    setVaryingModal(!varyingModal);
                    setVaryingRecipient("@mdo");
                  }}
                  className="makeoffer"
                >
                  Make an Offer
                </MDBBtn>
              </div>
              <div className="progress-bar-info-div">
                <div>
                  <p>88%</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>Job Success</p>
                  </span>
                </div>
                <div>
                  <p>88%</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>Job Success</p>
                  </span>
                </div>
                <div>
                  <p>88%</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>Job Success</p>
                  </span>
                </div>
                <div>
                  <p>88%</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>Job Success</p>
                  </span>
                </div>
              </div>
              <div className="social-icons-div">
                <p>Social platforms</p>
                <div>
                  <i class="fab fa-google"></i>
                  <i class="fab fa-linkedin-in"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
              <div className="geegr-verification-div">
                <button>
                  <span>
                    <BsPatchCheckFill />
                  </span>
                  <p>Verified</p>
                </button>
              </div>
              <div className="skills-div">
                <span>Good Communication</span>
                <span>A high level of techinal undersatnding.</span>
              </div>
              <div className="Attachment-div">
                <a href="#" className="attachment-box ripple-effect">
                  <span>Cover Letter</span>
                  <i>PDF</i>
                </a>
                <a href="#" className="attachment-box ripple-effect">
                  <span>Contract</span>
                  <i>DOCX</i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* modal */}
            <MDBModal
              show={varyingModal}
              setShow={setVaryingModal}
              tabIndex="-1"
            >
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>New message to {varyingState}</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={() => setVaryingModal(!varyingModal)}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <form>
                      <div className="mb-3">
                        {varyingModal && (
                          <MDBInput
                            value={varyingRecipient}
                            onChange={onChangeRecipient}
                            labelClass="col-form-label"
                            label="Recipient:"
                          />
                        )}
                      </div>
                      <div className="mb-3">
                        {varyingModal && (
                          <MDBTextArea
                            value={varyingMessage}
                            onChange={onChangeMessage}
                            labelClass="col-form-label"
                            label="Message:"
                          />
                        )}
                      </div>
                    </form>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <div className="btn-modal-div">
                      <MDBBtn
                        color="secondary"
                        onClick={() => setVaryingModal(!varyingModal)}
                      >
                        Close
                      </MDBBtn>
                      <MDBBtn>Save changes</MDBBtn>
                    </div>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VendorDetail;
