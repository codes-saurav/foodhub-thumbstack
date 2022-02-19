import "./Invoice.css";
import {createRef} from "react";
import Pdf from "react-to-pdf";

function Invoice(props) {
	var ref=createRef();
		  
		 return <> <div class="root" ref={ref}>
		<h1>INVOICE</h1>
		<hr />
		<div class="Header">
			<h2 class="heading">FoodHub</h2>
			<div class="billing-details">
				<div class="Name">Name: {props.name}</div>
				<div class="mobile">Phone: {props.number}</div>
				<div class="email">Email: {props.email}</div>
			</div>
		</div>
		<hr />
		<div className="det">
			<h3>Order Summary </h3>
			<div class="category" >
				<table class="Table">
					<tr>
						<th class="s">S.NO</th>
						<th class="n">Name</th>
						<th class="q">QTY</th>
						<th class="p">Price</th>
					</tr>
					{props.list.map((item) => {
						return <tr>
							<td class="s">{item.key}</td>
							<td class="n">{item.name}</td>
							<td class="q">{item.qty}</td>
							<td class="p">Rs. {item.price}</td>
						</tr>
					})}
					<tr>
						<td class="t" colspan="3">{"Total Payable + 10% Tip"}</td>
						<td class="p"> Rs. {props.total}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
    	<Pdf targetRef={ref} filename="invoice.pdf">
        {({toPdf}) => (
            <button className="pdfbtn btn-primary" onClick={toPdf}>Generate pdf</button>
        )}
    	</Pdf>
		</>
}

export default Invoice