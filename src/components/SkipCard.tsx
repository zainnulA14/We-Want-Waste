import React from "react";
import productImg from "/assets/images/4-yarder-skip.jpg";
import { Calendar, Check, X } from "lucide-react";
import { Skip } from "@/lib/constants";

interface SkipCardProps {
  skip: Skip;
  selectedSkip: Skip | null;
  handleSelectSkip: (skip: Skip) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  selectedSkip,
  handleSelectSkip,
}) => {
  return (
    <>
      <div
        className={`bg-white dark:bg-gray-800 p-5 rounded-[15px] border ${
          skip?.id === selectedSkip?.id
            ? "border-theme-green dark:border-theme-lightGreen"
            : "border-[#eaeaea] dark:border-[#333]"
        }  cardWrapper`}
      >
        <div className="bg-theme-lightGreen absolute top-3 right-3 font-medium text-white shadow-sm text-sm py-1 px-3 rounded-md inline-block">
          {skip.size} yard
        </div>
        <img
          src={productImg}
          alt={`${skip.size} Yard Skip`}
          className="w-full"
        />
        <div className="pt-5">
          <h3 className="text-2xl text-theme-green dark:text-white font-bold mb-1">
            {skip.size} Yard Skip
          </h3>
          <div className="flex items-center gap-2 text-sm mb-4 text-gray-400 dark:text-gray-200">
            <Calendar className="w-4 h-4" />
            {skip.hire_period_days} day hire period
          </div>
          <div className="flex flex-col">
            <span className="text-theme-lightGreen text-3xl font-bold">
              £{(skip?.price_before_vat * (1 + skip?.vat / 100))?.toFixed(0)}
            </span>
            <span className="text-gray-400 dark:text-gray-200 text-xs">
              (£{skip.price_before_vat} + {skip.vat}% VAT)
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm pt-3">
            <div className="flex items-center gap-1">
              {skip.allowed_on_road ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <X className="h-4 w-4 text-red-500" />
              )}
              <span>Road Placement</span>
            </div>
            <div className="flex items-center gap-1">
              {skip.allows_heavy_waste ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <X className="h-4 w-4 text-red-500" />
              )}
              <span>Heavy Waste</span>
            </div>
          </div>

          <button
            className={
              skip?.id === selectedSkip?.id
                ? "addToCartBtn bg-theme-green"
                : "addToCartBtn bg-theme-lightGreen"
            }
            onClick={() => handleSelectSkip(skip)}
          >
            {skip?.id === selectedSkip?.id ? "Selected" : "Select This Skip"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SkipCard;
