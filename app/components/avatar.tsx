import { Avatar, AvatarFallback,AvatarImage } from "@/components/ui/avatar";


export default function ProfilePicture() {
  return (
    <Avatar className="w-40 h-40 border-2 border-muted-foreground">
      <AvatarImage src="https://github.com/marcossnikel.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
