import ProfilePicture from "./components/avatar";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Articles from "./components/posts";
import { Stacks } from "./components/stacks";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <div className="text-zinc-200">
      <div className="flex justify-between items-center gap-8">
        <div className="">
          <h1 className="text-lg leading-9 flex-1">
            Greetings! I&apos;m Marcos Nikel, a passionate full stack developer
            dedicated to crafting code that not only thrives in production but
            also directly enriches user experiences. Welcome to my portfolio!
          </h1>
        </div>
        <ProfilePicture />
      </div>
      <Link href="/about" className="flex items-center gap-2">
        Learn more about me <BsArrowRight size={18} />
      </Link>
      <h1 className={`${roboto.className} text-5xl my-4`}>My Latest Posts</h1>
      <Articles />
      <h1 className="text-3xl mt-6">Most used stacks</h1>
      <Stacks />
    </div>
  );
}
