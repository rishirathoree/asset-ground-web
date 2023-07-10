import React, { useState } from "react";
import product1 from "../assets/Rectangle1.png";
import product2 from "../assets/Rectangle2.png";
import product3 from "../assets/Rectangle 46.png";
const ProductPage = () => {
  const switches = ["About Business", "Audience", "Profitablity", "Photos"];
  const [
    showCurrentTabSwitchAboutProduct,
    setShowCurrentTabSwitchAboutProduct,
  ] = useState("About Business");
  return (
    <>
      <div className="lg:p-20 md:p-12 sm:p-4 lg:py-32 md:py-32 sm:py-20 space-y-6">
        <span className="font-bold text-xl">Lorem ipsum dolor sit amet.</span>

        {/* website and days div index badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-normal text-sm text-gray-600">#12345</span>
            <span className="flex items-center gap-2">
              <i className="bx bx-laptop text-orange-400"></i>
              <p className="font-medium text-gray-500 text-sm">Website</p>
            </span>
            <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              High Interest
            </span>
          </div>
          <span className="font-light text-sm text-gray-400">5 Days Ago</span>
        </div>

        {/* Switches for product page information */}
        <div>
          <ul className="flex flex-wrap items-center">
            {switches.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setShowCurrentTabSwitchAboutProduct(item);
                  }}
                  className={`block lg:px-6 md:px-6 sm:px-4 py-4 cursor-pointer text-sm font-semibold ${
                    showCurrentTabSwitchAboutProduct === item
                      ? "bg-red-600 text-white"
                      : "bg-red-600/20 text-red-500"
                  }`}
                >
                  <p className="w-max lg:text-sm md:text-sm sm:text-[14px]">
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Based On Switch Rendering the data */}

        <div className="space-y-4">
          {/* About Business */}
          {showCurrentTabSwitchAboutProduct === "About Business" && (
            <>
              <div className="lg:w-1/2 md:w-3/3 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 sm:w-full">
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    field
                  </p>
                  <p className="font-semibold">eCommerce</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Starting Date
                  </p>
                  <p className="font-semibold">05 may 2020</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Working Hours/Week
                  </p>
                  <p className="font-semibold">20</p>
                </span>
              </div>

              <div className="lg:w-1/2 md:w-3/3 sm:w-full">
                <p className="font-light text-sm capitalize text-gray-400">
                  Description
                </p>
                <p className="font-normal text-md mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt omnis obcaecati nemo magnam eligendi a voluptatibus
                  aspernatur delectus dignissimos corporis, modi, ex molestias
                  corrupti fuga quo aut laboriosam doloribus totam. Placeat quos
                  perferendis, voluptate cupiditate architecto corporis harum.
                  Autem, non sit. Ut repellendus modi, blanditiis in beatae
                  delectus porro aperiam. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Iure molestiae eligendi itaque
                  aspernatur numquam eos voluptates ut reiciendis dolorem
                  voluptatem cum reprehenderit voluptate repellendus, enim magni
                  consectetur rem, aut quas! Corporis eveniet id unde porro
                  quasi repudiandae cumque! Saepe dignissimos nam assumenda
                  tempore commodi inventore ut reprehenderit! Ex, error quasi.
                </p>
              </div>

              <div className="lg:w-1/2 md:w-3/3 sm:w-full">
                <p className="font-light text-sm capitalize text-gray-400">
                  Asset Included
                </p>
                <p className="font-normal text-md mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt omnis obcaecati nemo magnam eligendi a voluptatibus
                  aspernatur delectus dignissimos corporis, modiit! Ex, error
                  quasi.
                </p>
              </div>
            </>
          )}

          {/* audience switch tabs content */}
          {showCurrentTabSwitchAboutProduct === "Audience" && (
            <>
              <div className="lg:w-2/3 md:w-3/3 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 sm:w-full">
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Countries of the majority of users?{" "}
                  </p>
                  <p className="font-semibold">UAE, KSA</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Website Languages
                  </p>
                  <p className="font-semibold">English</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Analytics Tools Available
                  </p>
                  <p className="font-semibold">Yes</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Avg. Monthly Pageviews
                  </p>
                  <p className="font-semibold">10,000</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Avg. Monthly Users
                  </p>
                  <p className="font-semibold">500</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Reason for sell
                  </p>
                  <p className="font-semibold">Seeking to have capital</p>
                </span>
              </div>
            </>
          )}

          {showCurrentTabSwitchAboutProduct === "Profitablity" && (
            <>
              <div className="lg:w-1/2 md:w-3/3 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 sm:w-full">
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Monetization Type
                  </p>
                  <p className="font-semibold">Amazon FBM</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Employees Available
                  </p>
                  <p className="font-semibold">02</p>
                </span>
              </div>

              <div className="lg:w-1/2 md:w-3/3 sm:w-full">
                <p className="font-light text-sm capitalize text-gray-400">
                  Inventory Status and Details
                </p>
                <p className="font-normal text-md mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt omnis obcaecati nemo magnam eligendi a voluptatibus
                  aspernatur delectus dignissimos corporis, modi, ex molestias
                  corrupti fuga quo aut laboriosam doloribus totam. Placeat quos
                  perferendis, voluptate cupiditate architecto corporis harum.
                  Autem, non sit. Ut repellendus modi, blanditiis in beatae
                  delectus porro aperiam. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Iure molestiae eligendi itaque
                  aspernatur numquam eos voluptates ut reiciendis dolorem
                  voluptatem cum reprehenderit voluptate repellendus, enim magni
                  consectetur rem, aut quas! Corporis eveniet id unde porro
                  quasi repudiandae cumque! Saepe dignissimos nam assumenda
                  tempore commodi inventore ut reprehenderit! Ex, error quasi.
                </p>
              </div>

              <div className="lg:w-1/2 md:w-3/3 sm:w-full">
                <p className="font-light text-sm capitalize text-gray-400">
                  Suppliers Status and Details
                </p>
                <p className="font-normal text-md mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt omnis obcaecati nemo magnam eligendi a voluptatibus
                  aspernatur delectus dignissimos corporis, modiit! Ex, error
                  quasi.
                </p>
              </div>

              <div className="lg:w-2/3 md:w-3/3 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 sm:w-full">
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Revenue for last 30 days
                  </p>
                  <p className="font-semibold">10,000 USD</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Revenue for last 6 month
                  </p>
                  <p className="font-semibold">6000 USD</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Revenue for last 12 month
                  </p>
                  <p className="font-semibold">400 USD</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Net profit last 3 month
                  </p>
                  <p className="font-semibold">300 USD</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Net profit last 6 month
                  </p>
                  <p className="font-semibold">700 USD</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Net profit last 12 month
                  </p>
                  <p className="font-semibold">2000 USD</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Net profit last 12 month
                  </p>
                  <p className="font-semibold">2000 USD</p>
                </span>
                <span>
                  <p className="font-medium text-sm capitalize text-gray-400">
                    Multiple
                  </p>
                  <p className="font-semibold">6.5</p>
                </span>
              </div>
            </>
          )}

          {showCurrentTabSwitchAboutProduct === "Photos" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                <button className="px-4 absolute lg: md:bottom-6 sm:bottom-4 z-50 rounded-md flex items-center right-8 py-2 gap-2 text-sm font-medium shadow-lg bg-[#0E4B72] text-white">
                  <i className="bx bx-images"></i> See all collection
                </button>
                <div className="row-span-2">
                  <img
                    src={product1}
                    alt="Image 1"
                    className="w-full shadow-custom h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={product2}
                    alt="Image 2"
                    className="w-full shadow-custom h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={product3}
                    alt="Image 3"
                    className="w-full shadow-custom h-full object-cover"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div>
          <button className="bg-[#0E4B72] text-white p-3 font-normal rounded">
            I'm Interested
          </button>
          <button className="text-[#0E4B72] p-3 font-normal rounded">
            Need More Info?
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
