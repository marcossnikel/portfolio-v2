import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BsList } from "react-icons/bs";
import Link from "next/link";
export default function Sidebar() {
  const pages = ["ABOUT", "WORK", "CONTACT"];
  return (
      <Sheet>
        <SheetTrigger className="text-zinc-100">
          <BsList size={24} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex justify-center items-center flex-col h-4/6">
            {pages.map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`}>
                <SheetClose>
                  <SheetTitle className="hover:scale-125 transition-all text-3xl cursor-pointer">
                    {page}
                  </SheetTitle>
                </SheetClose>
              </Link>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
  );
}
