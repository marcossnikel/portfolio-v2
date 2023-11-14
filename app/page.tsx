import { Button } from "@/components/ui/button";
import ProfilePicture from "./components/avatar";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Articles from "./components/posts";

export default function Home() {
  return (
    <div className="text-zinc-100">
      <div className="flex justify-between">
        <div className="flex w-96">
          <h1 className="">
            Hello, I&apos;m <strong>Marcos Nikel</strong>,i love to make
            enterprise code goes to production and impact directly into users
            🥰🥰🥰{" "}
          </h1>
        </div>
        <div className="flex-1 flex justify-around flex-col gap-2 items-center">
          <ProfilePicture />
          <Link href="/resume.pdf" target="_blank">
            <Button className=" bg-zinc-900 text-lg">Download Resume</Button>
          </Link>
        </div>
      </div>
      <Link href="/about" className="flex items-center gap-2">
        Learn more about me <BsArrowRight size={18} />
      </Link>
      <div>
        <h1 className="text-4xl my-4">My Latest Posts</h1>
        <Articles />
      </div>
      <div>
        <h1 className="text-xl mt-6">Most used stacks</h1>
      </div>
    </div>
  );
}
