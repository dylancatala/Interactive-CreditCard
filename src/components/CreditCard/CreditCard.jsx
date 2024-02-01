import frontCard from "../../images/bg-card-front.png";
import backCard from "../../images/bg-card-back.png";

import React from "react";

const CreditCard = ({ data }) => {
  const formatCardNumber = () => {
    const formattedCardNumber = (data?.numbers ?? "0000000000000000")
      ?.padEnd(16, "0")
      .split("")
      .reduce((acc, v, idx) => {
        const index = parseInt(idx / 4);

        if (!acc[index]) {
          acc[index] = "";
        }

        acc[index] += v;

        console.log(acc);

        return acc;
      }, {});

    return Object.values(formattedCardNumber).map((v) => v);
  };

  return (
    <div>
      <div className="absolute top-56 left-48">
        <div className="relative">
          <img src={frontCard} alt="Front Credit Card" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="flex flex-row items-center gap-3 px-9 pb-12">
              <div className="bg-white rounded-full w-12 h-12"></div>
              <div className="border border-white rounded-full w-5 h-5"></div>
            </div>
            <div className="flex flex-col gap-5 px-9 py-6">
              <div className="flex flex-row justify-between">
                {formatCardNumber().map((v) => (
                  <p className="text-white text-3xl font-medium tracking-[0.05em]">
                    {v}
                  </p>
                ))}
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <p className="text-white text-sm font-medium tracking-[0.1em]">
                    {data?.holder ? data?.holder : "JANE APPLESEED"}
                  </p>
                </div>
                <div>
                  <p className="text-white text-sm font-medium tracking-[0.1em]">
                    {data?.month ? data?.month : "10"}/
                    {data?.year ? data?.year : "25"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-2/4 left-72">
        <div className="relative">
          <img src={backCard} alt="Back Credit Card" />
          <div className="absolute bottom-28 right-14">
            <div>
              <p className="text-white text-md font-semibold tracking-[0.08em]">
                {data?.cvc ? data?.cvc : "123"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
