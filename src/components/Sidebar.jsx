import React, { useState } from "react";
 const Sidebar=()=>{
    const [fleet, setFleet]=useState([]);
    const [form, setForm]=useState({
        regNo:"",
        category: "",
        driver: "",
        status:""
    });
    const handleChange=(e)=>{
        setForm({ ...form, [e.target.name]: e.target.value});
    };
    const handleSubmit=()=>{
        const { regNo, category, driver, status }=form;

        if(!regNo || !category || !driver || !status){
            alert("All fields are required");
            return;
        }
        setFleet([...fleet, form]);
        setForm({regNo: "", category: "", driver: "", status: ""});
    };
    return(
        <div>
            <h3>Add Fleet</h3>

            <input 
                name="regNo"
                placeholder="Vehicle Reg No"
                value={form.regNo}
                onChange={handleChange}
            />

            <select name="catergory" value={form.catergory} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="Auto">Auto</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Bus">Bus</option>
            </select>

            <input
                name="driver"
                placeholder="Driver Name"
                value={form.driver}
                onChange={handleChange}
            />
            <select name="status" value={form.status} onChange={handleChange}>
                <option value="">Status</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
            </select>

            <button onCLick={handleSubmit}>Add Fleet</button>
        </div>
    );
 };
 export default React.memo(Sidebar);