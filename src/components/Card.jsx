import {useState} from "react";

function Card({cardProps, setCartCount, cartCount}) {
	const [addToCart, setAddToCart] = useState(false);

	function handleAddToCart() {
		setAddToCart(!addToCart);
		if (addToCart && cartCount > 0) {
			setCartCount(cartCount - 1);
		} else if (cartCount >= 0) {
			setCartCount(cartCount + 1);
		}
	}

	return (
		<>
			<div className="col mb-5 ">
				<div className="card h-100  ">
					{/* <!-- Sale badge--> */}
					{cardProps.isSale ? (
						<div
							className="badge bg-dark text-white position-absolute"
							style={{top: "0.5rem", right: "0.5rem"}}
						>
							Sale
						</div>
					) : (
						""
					)}

					{/* <!-- Product image--> */}
					<img
						className="card-img-top"
						src={cardProps.img ? cardProps.img : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"}
						alt="..."
					/>
					{/* <!-- Product details--> */}
					<div className="card-body p-4">
						<div className="text-center">
							{/* <!-- Product name--> */}
							<h5 className="fw-bolder">{cardProps.productType}</h5>
							{/* <!-- Product reviews--> */}
							{cardProps.isStar ? (
								<>
									<div className="d-flex justify-content-center small text-warning mb-2">
										<div className="bi-star-fill"></div>
										<div className="bi-star-fill"></div>
										<div className="bi-star-fill"></div>
										<div className="bi-star-fill"></div>
										<div className="bi-star-fill"></div>
									</div>
								</>
							) : (
								""
							)}
							{/* <!-- Product price--> */}
							{cardProps.offerPrice && (
								<span className="text-muted text-decoration-line-through">{cardProps.offerPrice}</span>
							)}
							{cardProps.standardPrice}
						</div>
					</div>
					{/* <!-- Product actions--> */}
					<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
						<div className="text-center">
							<button
								className={` btn btn-outline-dark mt-auto ${
									addToCart ? "bg-danger text-white btn-outline-white" : ""
								}`}
								onClick={handleAddToCart}
							>
								{addToCart ? "Remove" : "Add to cart"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
