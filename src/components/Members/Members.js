import React, { useContext } from 'react';
import { MembersContext } from '../../App';
import Member from '../Member/Member';

const Members = () => {
    const [members] = useContext(MembersContext)
    return (
        <div style={{padding:'50px 25px', width:'60%'}}>
        <div>
            <h2 style={{textAlign:'center'}}>Our Members</h2>
        </div>
        <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Room NO.</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    members.map(member => <Member key={member._id} member={member} />)
                }
            </tbody>
            </table>
        </div>
     </div>
    );
};

export default Members;