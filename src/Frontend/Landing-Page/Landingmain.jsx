
import { useNavigate } from 'react-router-dom';

 const Landingmain = () => {
  const navigate = useNavigate();
  const handleAdmin=()=>{
    navigate("/Admin")
  }
  const handleUser=()=>{
    navigate("/User")
  }
  return (
    <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-sky-600" onClick={handleAdmin}>
        Admin
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-sky-600" onClick={handleUser}>
        User
      </button>
    </div>
  )
}
export default Landingmain;
