import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => (
  <>
    <Navbar />
    <main className="p-8">
      <h1 className="mb-4 font-bold text-3xl">Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="block p-2 border w-full" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="block p-2 border w-full" />
        </div>
        <button className="bg-blue-500 mt-4 p-2 text-white">Submit</button>
      </form>
    </main>
    <Footer />
  </>
);

export default ContactUs;
