import "./Header.css";
import {Link} from "react-router-dom";
import img from "./logo.png"
function Header() {
	return <div className="Header">
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container-fluid">
				<img src={img} alt="" className="logo-img"/>
				<a className="navbar-brand" href="/">FoodHub</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">Home</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link active" to="/menu">Menu</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link active" to="/checkout">Checkout <i className="bi bi-cart-check "></i></Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
}

export default Header;