const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [],
		},
		actions: {
			getAllProducts: async () => {
				try{
					const store = getStore();
					const resp = await fetch(process.env.BACKEND_URL + "/api/products")
					const { data } = await resp.json()
					setStore({ products: [...store.products, data] })
					return data;
				}catch(error){
					console.log(error);
				}
			},
		}
	};
};

export default getState;
