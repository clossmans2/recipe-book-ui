import React from "react";
import { Link, Outlet } from "react-router-dom";


function Layout() {
    return (
        <div className="container py-3">
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                Recipe Book
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/authors">
                        Authors
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/recipes">
                        Recipes
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/ingredients">
                        Ingredients
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/steps">
                        Steps
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
        <hr />
        <main>
            <Outlet />
        </main>
        </div>
    );
}

export default Layout;