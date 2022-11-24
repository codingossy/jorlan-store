import React from "react";

// import images
import Headset1 from "../../assets/images/pexels-photo-2601274.jpeg";
import Headset2 from "../../assets/images/pexels-photo-7679454.jpeg";
import Headset3 from "../../assets/images/pexels-photo-2988232.jpeg";
import Headset4 from "../../assets/images/pexels-photo-6567607.jpeg";

const Exclusive = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        {/* title box */}
        <h2 className="mb-6 text-3xl font-bold">happy customers</h2>

        {/* grid box */}
        <div className="grid gap-y-4 px-5 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4 lg:gap-10">
          {/* items */}
          <div className="relative h-72 border">
            <img src={Headset1} alt="" />
            <div className="bg-white/2 absolute bottom-0 h-32 px-6 backdrop-blur-md">
              <h4 className="py-4 text-xl font-semibold ">Market</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                accusamus.
              </p>
            </div>
          </div>
          {/* items */}
          <div className="relative h-72 border">
            <img src={Headset2} alt="" />
            <div className="bg-white/2 absolute bottom-0 h-32 px-6 backdrop-blur-md">
              <h4 className="py-4 text-xl font-semibold ">Jeans</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                accusamus.
              </p>
            </div>
          </div>

          {/* items */}
          <div className="relative h-72 border">
            <img src={Headset3} alt="" />
            <div className="bg-white/2 absolute bottom-0 h-32 px-6 backdrop-blur-md">
              <h4 className="py-4 text-xl font-semibold ">Payment</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                accusamus.
              </p>
            </div>
          </div>

          {/* items */}
          <div className="relative h-72 border">
            <img src={Headset4} alt="" />
            <div className="bg-white/2 absolute bottom-0 h-32 px-6 backdrop-blur-md">
              <h4 className="py-4 text-xl font-semibold ">Happy Customer</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                accusamus.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Exclusive;
