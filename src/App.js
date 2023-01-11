import { Routes, Route, Outlet, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="authors" element={<Authors />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="ingredients" element={<Ingredients />} />
            <Route path="steps" element={<Steps />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
  );
}

function Layout() {
  return (
    <div className='container py-3'>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Recipe Book</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                  <li className='nav-item'>
                    <Link className='nav-link' to="/">Home</Link>
                  </li>
                  <li className='nav-item'><Link className='nav-link' to="/authors">Authors</Link></li>
                  <li className='nav-item'><Link className='nav-link' to="/recipes">Recipes</Link></li>
                  <li className='nav-item'><Link className='nav-link' to="/ingredients">Ingredients</Link></li>
                  <li className='nav-item'><Link className='nav-link' to="/steps">Steps</Link></li>
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

function Home() {
  return (
    <div className='p-5 mb-4 bg-light rounded-3'>
      <div className='container-fluid py-5'>
        <h1 className='display-5 fw-bold'>Home</h1>
      </div>
    </div>
  );
}

function Authors() {
  return (
    <div className='p-5 mb-4 bg-light rounded-3'>
      <div className='container-fluid py-5'>
      <h1 className='display-5 fw-bold'>Authors</h1>
    </div>
    </div>
  );
}

function Recipes() {
  return (
    <div className='p-5 mb-4 bg-light rounded-3'>
      <div className='container-fluid py-5'>
      <h1 className='display-5 fw-bold'>Recipes</h1>
    </div>
    </div>
  );
}

function Ingredients() {
  return (
    <div className='p-5 mb-4 bg-light rounded-3'>
      <div className='container-fluid py-5'>
      <h1 className='display-5 fw-bold'>Ingredients</h1>
    </div>
    </div>
  );
}

function Steps() {
  return (
    <div className='p-5 mb-4 bg-light rounded-3'>
      <div className='container-fluid py-5'>
      <h1 className='display-5 fw-bold'>Steps</h1>
    </div>
    </div>
  );
}

function NotFound() {
  return (
      <div className='p-5 mb-4 bg-light rounded-3'>
        <div className='container-fluid py-5'>
          <h1 className='display-5 fw-bold'>404</h1>
          <p className='col-md-8 fs-4'>
            <Link className="btn btn-primary btn-lg" to="/">Go Home</Link>
          </p>
      </div>
    </div>      
  );
}