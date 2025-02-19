

const testimonials = [
  { text: "This AI changed the way we do marketing!", author: "Growth Manager at Tech Startup" },
  { text: "Saved us hours of manual optimization.", author: "Head of Growth in E-commerce" },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <h2 className="text-3xl text-center font-bold">Trusted by Satisfied Clients</h2>
      <div className="mt-8 px-8 grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg text-center">
            <p className="italic">&quot;{testimonial.text}&quot;</p>
            <p className="mt-4 text-gray-400">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
