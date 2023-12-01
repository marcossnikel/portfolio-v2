'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


export default function Navbar(){
    const tabs = ['', "About", "Contact"];
    const pathname = usePathname()
    return(
        <header className="flex justify-between py-5">
          <div className="flex gap-10">
          {tabs.map((tab) => {            
            return (
              <Link
              
              className={clsx(
                `text-zinc-300 text-md transition-all hover:scale-105  rounded-sm`,
                {
                  'underline underline-offset-4 ': pathname === `/${tab.toLowerCase()}`
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
        </header>
    )
}