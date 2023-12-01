import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePicture() {
  return (
    <Avatar className="w-32 h-32">
      <AvatarImage src="/me.jpeg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
