import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { base_url } from "../../helper/Context";

function ProductAdmin() {
  let url = useContext(base_url);
  let getLocalStorage = JSON.parse(localStorage.getItem("admin"));
  let token = getLocalStorage.accessToken;
  const [dataTables, setDataTable] = useState();

  const fetchData = async () => {
    await axios
      .get(`${url}api/products/admin/get-all-data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setDataTable(res.data.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columnTable = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
  ];

  return (
    <>
      <div className="max-sm:flex max-sm:flex-col max-sm:w-full">
        <div className="max-sm:flex max-sm:bg-blue-300 max-sm:w-full">
          Product
        </div>
        <br></br>
        <br></br>
        <div className="max-sm:flex max-sm:flex-col max-sm:w-full">
          <DataTable columns={columnTable} data={dataTables} />
        </div>
      </div>
    </>
  );
}

export default ProductAdmin;
