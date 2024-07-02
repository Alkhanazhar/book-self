import Header from "../components/Header";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-28 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="md:w-1/2 md:mr-6 mb-6 md:mb-0 ">
            <p className="text-xl">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-xl">
              <strong>Email:</strong> contact@example.com
            </p>
            <p className="text-xl">
              <strong>Address:</strong> 123 Main St, Anytown, USA
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1719941976~exp=1719945576~hmac=e4d252890d8c212cfbb1740d281da760bf10d1164068f9793753616bdc1611d7&w=740"
              alt="Contact Us"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
