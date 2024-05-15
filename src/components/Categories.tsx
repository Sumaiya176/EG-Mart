import Image from "next/image";

const Categories = () => {
  return (
    <div>
      <p className="text-3xl text-gray-700 font-bold text-center">
        Top Categories
      </p>
      <p className="text-center text-gray-400 text-xs md:text-sm md:mx-18 lg:mx-60 my-10">
        Welcome to our top categories section, where you can explore a diverse
        range of cutting-edge monitors tailored to meet your specific needs and
        preferences. Dive into the world of gaming with our high-performance
        Gaming Monitors, engineered to deliver unparalleled speed, precision,
        and immersion for the ultimate gaming experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative max-w-xl mx-auto mt-20">
          <img
            className="object-cover rounded-md"
            src="https://plus.unsplash.com/premium_photo-1683436791486-508249532f52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random image"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div className="absolute inset-0 flex items-end">
            <h2 className="text-white pb-4 ps-4 text-3xl font-bold">LED</h2>
          </div>
        </div>

        <div>
          <div className="relative max-w-xl mx-auto mt-20">
            <img
              className="object-cover rounded-md"
              src="https://images.unsplash.com/photo-1590212151175-e58edd96185b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
              alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-end">
              <h2 className="text-white pb-4 ps-4 text-3xl font-bold">LCD</h2>
            </div>
          </div>

          <div className="relative max-w-xl mx-auto mt-8">
            <img
              className=" object-cover rounded-md"
              src="https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
              alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-end">
              <h2 className="text-white pb-4 ps-4 text-3xl font-bold">QLED</h2>
            </div>
          </div>
        </div>

        <div className="relative max-w-xl mx-auto mt-20">
          <img
            className="object-cover rounded-md"
            src="https://plus.unsplash.com/premium_photo-1665329006421-4e945f91885f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Random image"
          />
          <div className="absolute inset-0 opacity-60 rounded-md"></div>
          <div className="absolute inset-0 flex items-end">
            <h2 className="text-white pb-4 ps-4 text-3xl font-bold">OLED</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
