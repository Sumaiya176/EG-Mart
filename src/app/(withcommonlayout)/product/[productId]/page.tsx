import Image from "next/image";

const page = async ({ params }: { params: { productId: string } }) => {
  const res = await fetch(`http://localhost:5000/gadget/${params.productId}`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="mx-12 my-14 md:mx-36">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Image src={data?.image} alt="" height={600} width={600} />
        </div>
        <div>
          <p className="text-3xl font-semibold mb-4">{data?.gadgetName}</p>
          <div className="text-2xl flex">
            <p> ${data?.price} |</p>
            <div>
              <div className="flex items-center justify-center mt-2 mx-4">
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
            <p className="text-base mt-1">(36 review)</p>
          </div>

          <div className="mt-6 flex justify-center">
            <p className="justify-center text-gray-600">
              One of the primary considerations is the resolution, which
              determines the clarity and sharpness of images displayed on the
              screen. Resolutions like Full HD (1920x1080) or 4K Ultra HD
              (3840x2160) offer varying levels of detail, suitable for different
              tasks ranging from casual browsing to professional content
              creation. Another significant aspect is the refresh rate,
              indicating how often the monitor refreshes its image per second.
              Higher refresh rates, such as 144Hz or 240Hz, deliver smoother
              motion, particularly beneficial for gaming and multimedia
              applications where fluidity is paramount.
            </p>
          </div>
          <div className="mt-6">
            <p className="justify-center mb-4 text-xl font-semibold text-gray-800">
              Quick Overview Display
            </p>
            <ul className={"list-disc list-inside"}>
              <li className="text-gray-600"> Size (Inch) - 27</li>
              <li className="text-gray-600">Display Resolution - 1920x1080 </li>
              <li className="text-gray-600"> Panel Type - IPS</li>
              <li className="text-gray-600"> Refresh Rate (Hz) - 165Hz</li>
              <li className="text-gray-600">Rotatable - No</li>
              <li className="text-gray-600">HDMI Port - 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
