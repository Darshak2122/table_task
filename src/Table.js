import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "guru",
      email: "guru@gmail.com",
      mobile: 8140610691,
    },
    {
      id: 2,
      name: "vivek",
      email: "vivek@gmail.com",
      mobile: 8140610692,
    },
    {
      id: 3,
      name: "jay",
      email: "jay@gmail.com",
      mobile: 8140610693,
    },
    {
      id: 4,
      name: "raj",
      email: "raj@gmail.com",
      mobile: 8140610694,
    },
    {
      id: 5,
      name: "ajay",
      email: "ajay@gmail.com",
      mobile: 8140610695,
    },
  ]);

  const [editData, setEditData] = useState(null);

  const handleEdit = (item) => {
    setEditData(item);
  };

  const handleSave = () => {
    const updatedData = data.map((item) =>
      item.id === editData.id ? editData : item
    );
    setData(updatedData);
    setEditData(null);
  };

  const handleCancel = () => {
    setEditData(null); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{backgroundColor:"ivory", }}>
    <br/>
      <h2 style={{textDecoration:"underline"}}>Table</h2>
      <br />
      <table className="table"> 
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editData && editData.id === item.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editData && editData.id === item.id ? (
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {editData && editData.id === item.id ? (
                  <input
                    type="number"
                    name="mobile"
                    value={editData.mobile}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.mobile
                )}
              </td>
              <td>
                {editData && editData.id === item.id ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(item)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
