import Link from "next/link";

const nav = () => {
  return (
    <div className="bg-[#76361F] py-4">
      <div className="grid grid-cols-3 bg-[#76361F] items-center max-w-6xl mx-auto px-4">
        <h1 className="font-bold text-3xl text-white ">Latte Lane</h1>
        <div>
          <ul className="flex gap-8 text-white">
            <Link href="" className="border border-white rounded-full px-3 bg-black">Home</Link>
            <Link href="">About</Link>
            <Link href=""> Menu</Link>
            <Link href="">Buy Now</Link>
          </ul>
        </div>

        <div className="flex gap-3 pl-28">
          <button className="border border-white text-white font-semibold rounded-full px-5 py-2">
            Log In
          </button>

          <button className="border border-white text-white font-semibold rounded-full px-5 py-2">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default nav;
