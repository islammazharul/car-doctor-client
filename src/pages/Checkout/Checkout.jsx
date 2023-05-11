import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    // console.log({ service })
    const { user } = useContext(AuthContext)

    const handleService = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = user?.email
        const date = form.date.value
        const details = form.details.value
        const booking = {
            customerName: name,
            img,
            email,
            date,
            service: title,
            service_id: _id,
            details: details,
            price
        }
        console.log(booking);

        fetch('http://localhost:6500/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('service book successfully')
                }
            })
    }

    return (
        <div className="w-9/12 mx-auto">
            <h2 className="text-3xl text-center mb-5">Checkout {title}</h2>
            <form onSubmit={handleService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="form-control">

                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                    </div>

                    <div className="form-control">

                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <input type="text" defaultValue={'$' + price} placeholder="Service Price" className="input input-bordered" />
                    </div>

                </div>
                <div className="form-control mt-4">

                    <textarea type="text" name="details" placeholder="Product Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div className="form-control mt-4">
                    <input type="submit" className="btn btn-block bg-orange-600" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;