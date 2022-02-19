import "./Checkout.css";
import React,{useState} from "react";
import ReactDOM from "react-dom";
import Invoice from "./Invoice";
import axios from "axios";

function Checkout(props) {
	var [list,setList]=useState([]);
	var [[name,number,email],setDetails]=useState(["","",""]);
	var [hide,setHide]=useState("hidden");
	if(list.length===0 && localStorage.getItem("order")!==null)
	{
		var order=JSON.parse(localStorage.getItem("order"));
		var li=JSON.parse(localStorage.getItem("list"));
		order.forEach((val,key) => {
			if(val>0)
				list.push({key: key, name: li[key].name,price: li[key].price, qty: val})
		})
	}
	
	function handleSubtract(e){
		var key=Number(e.target.name);
		var order=JSON.parse(localStorage.getItem("order"));
		var li=JSON.parse(localStorage.getItem("list"));
		var total=JSON.parse(localStorage.getItem("total"));
		var temp=[];
		order[key]-=1;
		total-=Number(li[key].price);
		localStorage.setItem("order",JSON.stringify(order));
		localStorage.setItem("total",JSON.stringify(total));
		order.forEach((val,key) => {
			if(val>0)
				temp.push({key: key, name: li[key].name,price: li[key].price, qty: val})
		})
		setList(temp);
	}
	
	function handleName(e) {
		setDetails([e.target.value,number,email]);
	}
	
	function handlePhone(e) {
		setDetails([name,e.target.value,email]);
	}
	
	function handleEmail(e) {
		setDetails([name,number,e.target.value]);
	}
	
	function printBill() {
		if(name.length>0 && number.length===10 && email.length>0){
			axios.post("https://foodhub-server.herokuapp.com/print",{list: list, name: name, number: number, email: email, total: Number(localStorage.getItem("total"))})
			ReactDOM.render(
  				<React.StrictMode>
    				<Invoice list={list} name={name} number={number} email={email} total={Math.round(Number(localStorage.getItem("total"))*1.1)} />
  				</React.StrictMode>,
  				document.getElementById('root')
			);
			var l=JSON.parse(localStorage.getItem("order"));
			for(var i=0;i<l.length;i++)
				l[i]=0
			localStorage.setItem("order",JSON.stringify(l));
			localStorage.setItem("total",0);
		}
		else	
			alert("please fill the correct details");
	}
	
	return <div className="Checkout">
		<div className="container">
		  <div className="row checkout-row">
			<div className="col left">
				<div className="Total">
					Total: {"₹"+localStorage.getItem("total")}
				</div>
				<div className="Items">
					{list.map((item,key) => {
						return <div className="item row justify-content-evenly" key={item._id}>
							<div className="Details col-md-5 mt-1">
								<p className="Name">{item.name}</p>
							</div>
							<div className="order col-md-3 mt-1">
								<p className="Price">{"₹ " +item.price}</p>
							</div>
							<div className="col-md-3">
								{item.qty}
								<button name={item.key} className="Subt" onClick={handleSubtract}>-</button>

							</div>
						</div>
					})}
				</div>
				<button className="Pay" onClick={() => {if(localStorage.getItem("total")>0)setHide("shown")}}> Pay Now </button>
			</div>
			<div className={"col right "+hide}>
				<div className="Thank">
					Thank you for ordering 
				</div>
				<div className={"details "+hide}>
					Enter your details to generate the bill
					<div className="Inputs">
						<div className="ind">
							<div className="cate">Name:</div><input className="input" type="text" value={name} onChange={handleName} />
						</div>
						<div className="ind">
							<div className="cate">Phone:</div><input className="input" type="number" value={number} onChange={handlePhone} />
						</div>
						<div className="ind">
							<div className="cate">Email:</div><input className="input" type="email" value={email} onChange={handleEmail} />
						</div>
					</div>
				</div>
				<div className="Print Bill justify-content-center">
					<button className="print" onClick={printBill}> Print Bill </button>
				</div>
			</div>
		  </div>
		</div>
	</div>
}

export default Checkout;