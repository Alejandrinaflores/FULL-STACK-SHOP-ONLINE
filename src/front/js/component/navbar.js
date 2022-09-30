import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [carro, setCarro] = useState([]);

	return (
		<nav className="navbar navbar-light bg-light">
		<div className="dropdown">
		  <button
			className="btn btn-secondary dropdown-toggle"
			type="button"
			id="dropdownMenuButton1"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		  >
			carrito
		  </button>
		  <ul
			className="dropdown-menu"
			aria-labelledby="dropdownMenuButton1"
		  ></ul>
		</div>
		<div className="dropdown">
		  <button
			className="btn btn-secondary dropdown-toggle"
			type="button"
			id="dropdownMenuButton1"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		  >
			favoritos
		  </button>
		</div>
	  </nav>
	);
};
