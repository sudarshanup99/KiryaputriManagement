
import { Card } from 'antd';
import house from "../../assets/house1.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Meta } = Card;

const notify = () => toast.success("Booking Successful");

const Details = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <Card
      style={{
        width: 600,
      }}
      cover={
        <img
          alt="House"
          src={house}
        />
      }
    >
      <Meta
        title="Location: Nakhipot"
      />
      <div className="mt-4">
        <ul className="list-disc ml-5">
          <li>Status: Available</li>
          <li>Service: Water, Washroom.......</li>
        </ul>
      </div>
    </Card>
    <div className="mt-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-sky-600" onClick={notify}>
        Book Now
      </button>
    </div>
    <ToastContainer />
  </div>
);

export default Details;
