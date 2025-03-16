"use client"

import Image from "next/image";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { PiUserBold } from "react-icons/pi";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { use, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function BurgerMenu() {

    const route = usePathname()

    const [navState, setNavState] = useState(false)

    console.log(route);


    return (
        <>
            <nav className="burger-header w-full bg-white fixed top-0 shadow-lg px-5 flex flex-col lg:hidden z-20">
                <div className="burger-menu-icon-logo flex justify-between items-center">
                    <div className="burger-menu-logo w-max flex flex-row items-center">
                        <Image
                            src="/images/logo.png"
                            alt="meshkat-logo"
                            width={20}
                            height={20}
                            className="w-full h-auto object-cover"
                        />
                        <h1 className="text-cyan-700 mr-3 font-bold">مشکات</h1>
                    </div>
                    <div className="burger-menu-icon text-cyan-600 text-2xl cursor-pointer">
                        {navState ? <IoMdClose onClick={() => setNavState(!navState)} /> : <RiMenu2Line onClick={() => setNavState(!navState)} />}
                    </div>
                </div>
                <div className={`line h-[2px] bg-gray-200 w-full transition-all duration-300  ${!navState && 'opacity-0'}`}></div>
                <div className={`burger-menu-items transition-all duration-300 ${!navState && 'h-0'}`}>
                    <ul className={`my-2 transition-all duration-300 ${!navState && 'opacity-0 pointer-events-none'}`}>
                        <li className="py-1"><Link className={`flex justify-between items-center p-2 rounded-md ${route == '/admin' ? 'text-white bg-cyan-600/70' : 'text-gray-700'}`} href={'/admin'}><p className="text-sm">داشبورد</p><RxDashboard /></Link></li>
                        <li className="py-1"><Link className={`flex justify-between items-center p-2 rounded-md ${route == '/admin/users' ? 'text-white bg-cyan-600/70' : 'text-gray-700'}`} href={'/admin/users'}><p className="text-sm">کاربران</p><PiUserBold /></Link></li>
                        <li className="py-1"><Link className={`flex justify-between items-center p-2 rounded-md ${route == '/admin/events' ? 'text-white bg-cyan-600/70' : 'text-gray-700'}`} href={'/admin/events'}><p className="text-sm">رویدادها</p><MdOutlineSmartDisplay /></Link></li>
                        <li className="py-1"><Link className={`flex justify-between items-center p-2 rounded-md ${route == '/admin/teachers' ? 'text-white bg-cyan-600/70' : 'text-gray-700'}`} href={'/admin/teachers'}><p className="text-sm">اساتید</p><FaChalkboardTeacher /></Link></li>
                        <li className="py-1"><Link className={`flex justify-between items-center p-2 rounded-md ${route == '/admin/news' ? 'text-white bg-cyan-600/70' : 'text-gray-700'}`} href={'/admin/news'}><p className="text-sm">اخبار</p><FaRegNewspaper /></Link></li>
                        <li className="py-1"><Link className={`flex justify-between items-center p-2 rounded-md ${route == '/' ? 'text-white bg-cyan-600/70' : 'text-gray-700'}`} href={'/'}><p className="text-sm">خروج</p><FiLogOut /></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
