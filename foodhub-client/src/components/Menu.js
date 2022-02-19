import "./Menu.css";
import React,{useState} from "react";
import Item from "./Item";
import axios from "axios";
import Spinner from "./Spinner";

import { useEffect } from "react";
 
function Menu(props) {
	
	const [loading,setLoading]=useState(true);
	
	
	useEffect(()=>{
		fetchData();
	})
	
	var [list,setList]=useState([0]);
	
	const fetchData= async()=>{



	await axios.get("https://foodhub-server.herokuapp.com/menu").then((res) => {
			var l=res.data;
			console.log(l);
			if(localStorage.getItem("order")===null || JSON.parse(localStorage.getItem("order")).length!==l.length)
			{
				var li=[]
				list.forEach((item) => {li.push(0)})
				localStorage.setItem("order",JSON.stringify(li));
				localStorage.setItem("total",0);
			}
			localStorage.setItem("list",JSON.stringify(l));
			setList(l);
			setLoading(false)
		})
	}
	
	
	
	return <>{(loading)?<Spinner/>:<div className="Menu">
		<p className="menu"> Menu </p>
		<div className=" row justify-content-evenly  text-center" >

		{list.map((item,key) => <Item item={item} index={key} />)}

		</div>
	</div>}
	
	</>
}

export default Menu;