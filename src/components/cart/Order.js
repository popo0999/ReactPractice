import React, { useState } from 'react';
import Product from './Product';
const Order = (props) => {
	const [length, setLength] = useState(3);
	const products = [
		{
			id: 1,
			name: 'New Balance shoes',
			price: 3000,
			picName: 'NB.jpg',
			category: 'shoes',
		},
		{
			id: 2,
			name: 'Nike shoes',
			price: 4500,
			picName: 'nike.jfif',
			category: 'shoes',
		},
		{
			id: 3,
			name: 'solomon shoes',
			price: 5000,
			picName: 'solomon.jpg',
			category: 'shoes',
		},
	];
	const { data, setData, sum, setSum } = props;
	return (
		<div className="col-9">
			<div className="title d-flex align-items-center mb-5">
				<h1>訂購單</h1>
				<p className="m-0">{length}種商品項目</p>
			</div>
			{products.map((v, i) => {
				return (
					<Product
						id={v.id}
						name={v.name}
						price={v.price}
						setData={setData}
						data={data}
						setSum={setSum}
						sum={sum}
						picName={v.picName}
						setLength={setLength}
						length={length}
					/>
				);
			})}
		</div>
	);
};

export default Order;
