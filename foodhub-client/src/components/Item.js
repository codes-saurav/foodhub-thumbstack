import "./Item.css";


function Item(props) {
	function handleClick(e) {
		if(window.confirm(props.item.name+" added to cart")){
			var name=e.target.name;
			var list=JSON.parse(localStorage.getItem("order"));
			list[Number(name)]+=1;
			localStorage.setItem("order",JSON.stringify(list));
			var total=Number(localStorage.getItem("total"));
			localStorage.setItem("total",total+Number(props.item.price));
		}
	}
	return <>
	
 <div className="col-md-4 text-center">
	<div className="Item" >
		<div className="Logo">
			<img className="images img-fluid" src={props.item.logo} alt={props.item.name} />
		</div>
		<div className="Details">
			<p className="Name">{props.item.name}</p>
			<p className="Description">{props.item.description}</p>
		</div>
		<div className="Order row justify-content-evenly">
		<div className="col-md-6">
			<p className="Price">{"₹ " +props.item.price}</p>
		</div>
		<div className="col-md-6">
			<button name={props.index} className="Add" onClick={handleClick} >Add to cart</button>
		</div>
		</div>

	</div>
	</div>
	
	</>
}

export default Item;