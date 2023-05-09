import { FcCalendar } from 'react-icons/fc';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { ImLocation } from 'react-icons/im'

const Contact = () => {
    return (
        <div className="card w-full bg-black text-neutral-content mt-20">
            <div className="lg:flex justify-around items-center p-5 space-y-3 lg:py-20">

                <div className="flex items-center">
                    <FcCalendar className='h-10 w-10 mr-4'></FcCalendar>
                    <div>
                        <p className="">We are open monday-friday</p>
                        <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className="flex items-center">
                    <MdOutlinePermPhoneMsg className='h-10 w-10 mr-4 text-orange-500'></MdOutlinePermPhoneMsg>
                    <div>
                        <p className="">Have a question?</p>
                        <h2 className="text-2xl font-bold">+2546 251 2658</h2>
                    </div>
                </div>
                <div className="flex items-center">
                    <ImLocation className='h-10 w-10 mr-4 text-orange-500'></ImLocation>
                    <div>
                        <p className="">Need a repair? our address</p>
                        <h2 className="text-2xl font-bold">Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;