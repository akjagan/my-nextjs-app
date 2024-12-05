import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Email = () => (
  <>
    <Navbar />
    <main className="p-8">
      <h1 className="mb-4 font-bold text-3xl">Send an Email</h1>
      <form method="POST" action="/api/send-email">
        <div>
          <label htmlFor="to">To:</label>
          <input type="email" id="to" name="to" className="block p-2 border w-full" />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" className="block p-2 border w-full" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="block p-2 border w-full"></textarea>
        </div>
        <button className="bg-blue-500 mt-4 p-2 text-white">Send</button>
      </form>
    </main>
    <Footer />
  </>
);

export default Email;
