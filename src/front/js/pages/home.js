import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    console.log(store.products.length);
  })

  return (
    <>
      { store.products.length <= 0 ?
        <h1>Cargando datos...</h1> :
        <div className="text-center mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">descripcion </th>
              <th scope="col">categoria</th>
              <th scope="col">price</th>
              <th scope="col">stock</th>
            </tr>
          </thead>
          <tbody>
            {store.products && store.products.length > 0
              ? store.products[0].map((product, i) => {
                  return (
                    <tr key={i}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      }    
    </>
  );
};
