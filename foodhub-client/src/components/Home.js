import "./Home.css";

import {useHistory} from "react-router-dom";

function Home() {
	const history=useHistory();
	function handleClick() {
		history.push("/menu");
	}
	return <div className="Home">
		<div className="container">
		  <div className="row rowHome">
			<div className="col-md-12">
				<div className="name d-flex justify-content-center mb-3">
				Welcome to FoodHub
				</div>
				<hr className="hrstyle"/>
				<div className="features mt-3">
					Where the flavor inebriates you.
					<br />
					Traditional Indian food to delight the whole family 
				</div>
			</div>
			<div className="col">
				{/* <div className="Image">
					<img className="image" src={Image} alt="Best cuisines in this Area" />
				</div> */}
				<div>
					<button className="Button" onClick={handleClick}>Order Now</button>
				</div>
			</div>
		  </div>
		</div>
	</div>
}

export default Home;