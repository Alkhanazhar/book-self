import Header from "../components/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-6  min-h-screen">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row items-center  p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="md:w-1/2 md:mr-6 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-xl mb-4">
              We started our journey in 2010 with a mission to provide the best
              products and services to our customers. Our dedication to quality
              and customer satisfaction has helped us grow and expand over the
              years.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <p className="text-xl">
              We believe in integrity, excellence, and putting our customers
              first. Our team works tirelessly to ensure that every customer has
              a positive experience with our company.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-21300.jpg?t=st=1719943811~exp=1719947411~hmac=94cde6f9844375ae9ff175948debc3878af834aecd4ee8657972809e7889fb66&w=740"
              alt="Our Team"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
