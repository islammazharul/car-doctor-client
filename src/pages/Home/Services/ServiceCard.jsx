import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ service }) => {
    const { title, img, price, name } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions flex-grow-1 items-center text-orange-600 font-bold">
                    <p className="text-start">Price : {price}</p>
                    <BsArrowRight className='text-3xl font-bold'></BsArrowRight>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;