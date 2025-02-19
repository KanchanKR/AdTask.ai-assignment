

const ContactForm = () => {
  return (
    <section className="bg-black text-white py-12">
      <h2 className="text-3xl text-center font-bold">Get in Touch</h2>
      <div className="mt-8 flex justify-center">
        <form className="w-full max-w-lg bg-gray-900 p-6 rounded-lg">
          <input className="w-full p-3 mb-4 bg-gray-800 rounded" type="text" placeholder="Name" />
          <input className="w-full p-3 mb-4 bg-gray-800 rounded" type="email" placeholder="Email" />
          <textarea className="w-full p-3 mb-4 bg-gray-800 rounded" placeholder="Message"></textarea>
          <button className="w-full p-3 bg-blue-500 rounded">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
