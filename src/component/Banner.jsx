import Image from "next/image";
import banner from "../../public/assets/banner.png";
import effect from "../../public/assets/bannereffect.png";

const Banner = () => {
  return (
    <div className="relative h-[750px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={banner}
        alt="Coffee Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Content on Background */}
      <div className="absolute inset-0 flex flex-col justify-center  md:px-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Brewed to <br /> Perfection Sipped <br />
            with Passion.
          </h1>

          <p className="mt-5 text-sm leading-7 text-white md:text-base">
            Welcome to Latte Lane — where every cup tells a story. From <br />
            ethically sourced beans to expertly crafted blends, we bring <br />
            you the rich, bold flavors of premium coffee straight to your <br />
            home. Whether you're chasing the perfect morning <br />
            brew or indulging in a midday escape, our coffee is made <br />
            to elevate every moment. Discover the taste of true <br />
            craftsmanship in every sip.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
              Order Now
            </button>

            <button className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black">
              veiw more
            </button>
          </div>

          <div className="mt-8 flex items-center gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white">4.8 ★</h2>
              <p className="mt-1 text-sm text-white">Average Rating</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">1000 +</h2>
              <p className="mt-1 text-sm text-white">Regulars</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">30 +</h2>
              <p className="mt-1 text-sm text-white">Coffee specialties</p>
            </div>
          </div>
        </div>

        {/* Second Image */}
        <Image
          src={effect}
          alt="Coffee"
          width={750}
          height={750}
          className="absolute right-10 top-1/2 -translate-y-1/2 object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
