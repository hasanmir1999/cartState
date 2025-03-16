import { BsCart2 } from "react-icons/bs";
import Link from "next/link";
export default function Navbar({ addedToCart }) {
  return (
    <>
      <nav className="bg-orange-300 py-2 px-3 shadow-md fixed top-0 w-full z-10 border-b-2 border-white">
        <div className="Container">
          <ul className="flex justify-between items-center">
            <li className="p-2 text-white border-2 border-white rounded-md">
              <Link
                href={"/cart"}
                className="flex flex-col items-center gap-1 relative"
              >
                {addedToCart > 0 && (
                  <>
                    <span className="absolute -top-3 -right-4 w-5 h-5 bg-white rounded-full text-orange-300 flex justify-center items-center text-xs z-[1]">
                      {addedToCart}
                    </span>
                    <span className="absolute -top-3 -right-4 w-5 h-5 bg-white rounded-full animate-ping"></span>
                  </>
                )}
                <BsCart2 size={"20px"} />
                <p className="text-sm">cart</p>
              </Link>
            </li>
            <li className="p-2 text-white">
              <Link href={"/"}>
                <p>home</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
