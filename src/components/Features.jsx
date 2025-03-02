const features = [
    { title: "Multi-level Dropdowns", description: "Create unlimited nested dropdown menus with smooth animations." },
    { title: "Responsive Design", description: "Adapts to any screen size from mobile to desktop." },
    { title: "Easy Integration", description: "Works with React and Tailwind CSS easily." },
    { title: "User-friendly", description: "Smooth animations and clear visual hierarchy." },
    { title: "Accessibility", description: "Ensuring all users can navigate your site easily." },
    { title: "Customizable", description: "Customize colors, animations, and behavior to match your brand." },
  ];
  
  const Features = () => {
    return (
      <section className="lexa-deca py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center">Powerful Navigation Features</h2>
        <div className="m-10 grid md:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  