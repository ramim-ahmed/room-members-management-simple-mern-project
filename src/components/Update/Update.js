import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

const Update = () => {
    const [updateMember, setUpdateMember] = useState({})
    const {id} = useParams();
    const nameRef = useRef();
    const emailRef = useRef();
    const roomRef = useRef();
    useEffect( () => {
        const url = `http://localhost:8000/members/${id}`;
        fetch(url)
        .then( res => res.json())
        .then( data => {
            setUpdateMember(data)
        })

    }, [id]);


    const handleUdpateMember = e => {
          e.preventDefault();
           const name = nameRef.current.value;
           const email = emailRef.current.value;
           const room_no = roomRef.current.value
        
        const updatedMember = {
            name, 
            email,
            room_no
        }

        const url = `http://localhost:8000/members/${id}`;
        fetch(url, {
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(updatedMember)
        })
        .then( res => res.json())
        .then( data => {
            if(data.modifiedCount > 0) {
                alert('update successfully!!')
            }
        })
    }



    const {name, email, room_no} = updateMember
    return (
        <div style={{padding:'50px 25px', width:'40%'}}>
           <div>
               <h2>Update Member</h2>
           </div>
           <form onSubmit={handleUdpateMember}>
                <div class="col-12">
                    <label htmlFor="name">Name</label>
                    <input defaultValue={name} ref={nameRef} id='name' type="text" className="form-control"/>
                </div>
                <div class="col-auto">
                    <label htmlFor="email">Email</label>
                    <input defaultValue={email} ref={emailRef} id='email' type="email" className="form-control"/>
                </div>
                <div class="col-auto">
                    <label htmlFor="room">Room No.</label>
                    <input defaultValue={room_no} ref={roomRef} id='room' type="number" className="form-control"/>
                </div>
                <br />
                <input className='btn btn-dark' type="submit" value="UPDATE" />
           </form>
        </div>
    );
};

export default Update;