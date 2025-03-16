"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";


export default function Header({ courses }) {


    const [menu, setMenu] = useState(false)
    const [activeSection, setActiveSection] = useState("");

    const navItems = [
        { href: courses ? "/#home" : "#home", label: "خانه" },
        { href: courses ? "/#courses" : "#courses", label: "دوره ها" },
        { href: courses ? "/#about" : "#about", label: "درباره ما" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section")
        const observerOptions = {
            root: null,
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`)
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <div dir="rtl" className="z-50 fixed right-0 left-0 w-full border-b-2 md:flex-row border-gray-300 flex flex-col items-center px-5 justify-start lg:px-28 bg-white">
            <div className="flex flex-row items-center justify-between h-16 w-full md:max-w-max">
                <div className="flex flex-row items-center gap-5 h-full">
                    <img className="w-8 hidden md:block" src="/images/logo.png" />
                    <button className="md:hidden" onClick={() => setMenu(!menu)}>
                        <FaBars className="text-cyan-700" size={20} />
                    </button>
                    <p className="font-bold text-2xl text-cyan-700">مشکات</p>
                </div>
                <div className="h-full flex items-center md:hidden">
                    <img className="w-8" src="/images/logo.png" />
                </div>
            </div>
            <ul className={`bg-white w-full flex flex-col md:justify-between md:items-center md:h-16 md:flex-row self-start md:pb-0 gap-5 transition-all overflow-hidden ${menu ? 'h-48 pb-4' : 'h-0 pb-0'} duration-300`}>
                <div className="flex flex-col md:flex-row md:gap-10 gap-5 md:mr-10 text-nowrap">
                    {navItems.map((item) => (
                        <li key={item.href} className="relative list-none">
                            <Link
                                href={item.href}
                                className={`relative pb-2 transition-all duration-300 
                  ${activeSection === item.href ? "after:w-full" : "after:w-0"}
                  after:absolute after:left-0 after:bottom-0 after:h-[2px]
                  after:bg-cyan-600 after:transition-all after:duration-300
                  hover:after:w-full`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </div>
                <div className="w-full md:w-auto flex flex-row gap-5 font-bold">
                    <Link href="/register" className="text-center bg-cyan-600 w-full pb-2 pt-2.5 rounded-md text-white text-nowrap px-5">
                        ثبت نام
                    </Link>
                    <Link href="/login" className="text-center border-2 border-cyan-600 text-cyan-700 w-full py-2 rounded-md text-nowrap px-5">
                        ورود
                    </Link>
                </div>
            </ul>
        </div>
    )
}