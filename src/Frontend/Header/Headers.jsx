import '../Header/Headers.css'

const Headers = () => {
  return (
    <div className="bg-gray-300 pt-5 pb-5 flex justify-between">
      <div>
        <div className="title ms-9">Last Rites</div>
      </div>

          <div className='flex justify-end align-middle my-auto'>
               <div className='me-7 cursor-pointer active:text-blue'>Home</div>
               <div className='me-7 cursor-pointer active:text-blue'>About Us</div>
               <div className='me-7 cursor-pointer active:text-blue'>Contact Us</div>
          </div>
  
    </div>
  )
}

export default Headers
