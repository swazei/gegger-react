import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillWalletFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
function ProjectCard() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="work-project-card shadow-sm p-2 bg-white rounded">
              <Container>
                <Row>
                  <Col md={2} sm={2} xs={2}>
                    <div className="project-card-avatar">
                      <MDBContainer className="d-flex justify-content-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                          className="rounded-3"
                          style={{ width: "100px" }}
                          alt="Avatar"
                        />
                      </MDBContainer>
                    </div>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <div className="content-for-project">
                      <h1>Aircraft Mechanic</h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </Col>
                  <Col md={2} sm={2} xs={2}>
                    <div className="star-icon">
                      <span>
                        {" "}
                        <BsFillStarFill />
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="custom-gray-row">
                  <Col md={12} sm={12} xs={12} className="p-0">
                    <div className="details-of-vendor">
                      <div>
                        <span>
                          <BsFillPinMapFill />
                        </span>
                        <p>San Fracisso</p>
                      </div>
                      <div>
                        <span>
                          <BsClockHistory />
                        </span>
                        <p>Full Time</p>
                      </div>
                      <div>
                        <span>
                          <BsFillWalletFill />
                        </span>
                        <p>$35000-$38000</p>
                      </div>
                      <div>
                        <span>
                          <BsFillClockFill />
                        </span>
                        <p>2 Days ago</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectCard;
