import Image from "next/image";
import splash from "../../public/assets/splash.png";
import { Coffee, CupSoda, Dessert } from "lucide-react";

const Item = () => {
  return (
    <div className="relative border-y border-gray-200 bg-white">

      {/* Coffee Splash Image */}
    <Image
  src={splash}
  alt="Coffee Splash"
  width={400}
  height={400}
  className="absolute -left-2 -top-30 z-10 w-80 object-contain"
/>

      {/* Category Items */}
      <div className="flex items-center justify-center gap-12 py-6">

        <div className="flex flex-col items-center gap-2">
          <Coffee size={28} />
          <p className="text-sm">Hot Coffee</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <CupSoda size={28} />
          <p className="text-sm">Cold Coffee</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Coffee size={28} />
          <p className="text-sm">Cup Coffee</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Dessert size={28} />
          <p className="text-sm">Dessert</p>
        </div>

      </div>
    </div>
  );
};

export default Item;