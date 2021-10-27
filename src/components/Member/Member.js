import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MethodContext } from '../../App';

const Member = ({member}) => {
    const {_id, name,email, room_no} = member;

    const handleDelete = useContext(MethodContext);
    
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{room_no}</td>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button onClick={ () => handleDelete(_id)} type="button" class="btn btn-outline-primary"><i class="fas fa-trash"></i></button>
              <Link to={`/members/update/${_id}`}>
                <button type="button" class="btn btn-outline-primary"><i class="fas fa-edit"></i></button>
              </Link>
            </div>
        </tr>
    );
};

export default Member;