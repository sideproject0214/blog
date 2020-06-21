import React, { Fragment } from "react";
import { Row, Spinner } from "reactstrap";

export const GrowingSpinner = (
  <Fragment>
    <Row className="d-flex justify-content-center m-5">
      <Spinner
        style={{ width: "2rem", height: "2rem" }}
        type="grow"
        color="primary"
      />
      <Spinner
        style={{ width: "2rem", height: "2rem" }}
        type="grow"
        color="secondary"
      />
      <Spinner
        style={{ width: "2rem", height: "2rem" }}
        type="grow"
        color="success"
      />
      <Spinner
        style={{ width: "2rem", height: "2rem" }}
        type="grow"
        color="danger"
      />
      <Spinner
        style={{ width: "2rem", height: "2rem" }}
        type="grow"
        color="warning"
      />
      <Spinner
        style={{ width: "2rem", height: "2rem" }}
        type="grow"
        color="info"
      />
      <Spinner
        style={{ width: "2rem", height: "2rem" }}
        type="grow"
        color="light"
      />
      <Spinner
        style={{ width: "2rem", height: "2rem" }}
        type="grow"
        color="dark"
      />
    </Row>
  </Fragment>
);
