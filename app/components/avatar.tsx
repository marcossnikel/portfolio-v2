import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePicture() {
  return (
    <Avatar className="w-40 h-40">
      <AvatarImage src="/me.jpeg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
