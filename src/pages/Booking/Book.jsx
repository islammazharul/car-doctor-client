import React from 'react';

const Book = ({ books, handleDelete, handleBookingConfirm }) => {

    const { _id, img, price, service, email, date, status } = books;

    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>{service}</td>
            <td>{date}</td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
                {
                    status === "Confirm" ? <span className='font-bold text-purple-500'>Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>

    );
};

export default Book;