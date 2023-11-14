'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar(){
    const tabs = ['', "About", "Contact", "Blog"];
    const pathname = usePathname()
    return(
        <header className="flex justify-between py-5">
          <div className="flex gap-10">
          {tabs.map((tab) => {            
            return (
              <Link
              
              className={clsx(
                "text-slate-400 transition-all hover:scale-105 p-1 rounded-sm",
                {
                  'bg-zinc-600': pathname === `/${tab.toLowerCase()}`
                }
              )}
              key={tab}
              href={tab === "" ? "/" : tab.toLowerCase()}
              >
                {tab === '' ? 'Home' : tab}
              </Link>
            );
          })}
          </div>
          <p>toggle theme</p>
        </header>
    )
}