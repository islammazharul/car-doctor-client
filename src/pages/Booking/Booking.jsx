import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Book from "./Book";
import { useNavigate } from "react-router-dom";


const Booking = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])

    const url = `http://localhost:6500/booking?email=${user.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBooking(data)
                }
                else {
                    // Log out and then navigate
                    navigate('/')
                }
            })
    }, [url, navigate])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to confirm delete')
        if (proceed) {
            fetch(`http://localhost:6500/booking/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = booking.filter(books => books._id !== id)
                        setBooking(remaining)
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:6500/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update status
                    const remaining = booking.filter(books => books._id !== id);
                    const updated = booking.find(books => books._id === id);
                    updated.status = 'confirm';
                    const newBooking = [updated, ...remaining]
                    setBooking(newBooking)
                }
            })
    }

    return (
        <div>
            <h2>Your Booking {booking?.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(books => <Book
                                key={books._id}
                                books={books}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></Book>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;