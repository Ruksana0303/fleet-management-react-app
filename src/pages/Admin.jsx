import Sidebar from "../components/Sidebar";
const Admin=()=>{
    return(
        <div style={{ display: "flex"}}>
            <Sidebar/>
                <div style={{ marginLeft: "20px"}}>
                    <h2>Admin Dashboard</h2>
                    <p>FLeet data will appear here</p>
                </div>
        </div>
    );
};
export default Admin;