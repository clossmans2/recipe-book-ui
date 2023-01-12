import React from "react";
import { Link } from "react-router-dom";


export default function NotFound() {
    return (
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">404</h1>
          <p className="col-md-8 fs-4">
            <Link className="btn btn-primary btn-lg" to="/">
              Go Home
            </Link>
          </p>
        </div>
      </div>
    );
  }