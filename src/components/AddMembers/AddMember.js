import React, { useRef } from 'react';

const AddMember = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const roomRef = useRef();

    const handleAddMember = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const room_no = roomRef.current.value;
        const member = {
            name, 
            email,
            room_no
        }
       fetch('http://localhost:8000/member', {
           method:'POST',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify(member)
       })
       .then( res => res.json())
       .then( data => {
           if(data.insertedId){
               alert('New Member Added Successfully!!');
               e.target.reset();
           }
       })
    }
    return (
        <div style={{padding:'50px 25px', width:'40%'}}>
           <div>
               <h2>Add New Member</h2>
           </div>
           <form onSubmit={handleAddMember}>
                <div class="col-12">
                    <label htmlFor="name">Name</label>
                    <input ref={nameRef} id='name' type="text" className="form-control"/>
                </div>
                <div class="col-auto">
                    <label htmlFor="email">Email</label>
                    <input ref={emailRef} id='email' type="text" className="form-control"/>
                </div>
                <div class="col-auto">
                    <label htmlFor="room">Room No.</label>
                    <input ref={roomRef} id='room' type="number" className="form-control"/>
                </div>
                <br />
                <input className='btn btn-dark' type="submit" value="ADD" />
           </form>
        </div>
    );
};

export default AddMember;