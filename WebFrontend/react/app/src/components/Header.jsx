import { useNavigate } from "react-router-dom";




const Header = ({data}) => {

  const navigate = useNavigate();
    // const {logo, title} = data;

    console.log(data.logo);
    console.log(data.title);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">

            <div className="nav-brand" onClick={() => navigate("/") } >
              <img height="80px" src={data.logo} />
            </div>
            
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a onClick={() => navigate("/app") } className="nav-link active" href="#" aria-current="page">
                    Home
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => navigate("/login") }>
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => navigate("/blog") }>
                    Blog
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#" onClick={() => navigate("/") }>
                      Action 1
                    </a>
                    <a className="dropdown-item" href="#" onClick={() => navigate("/app") }>
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0">
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
