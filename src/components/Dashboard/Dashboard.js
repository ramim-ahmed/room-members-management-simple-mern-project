import { useContext } from "react";
import { MembersContext } from "../../App";

const Dashboard = () => {
    const [members] = useContext(MembersContext)
    return (
        <div style={{padding:'50px 25px', width:'40%'}}>
        <div>
            <h1>Total Members: {members.length}</h1>
        </div>
     </div>
    );
};

export default Dashboard;